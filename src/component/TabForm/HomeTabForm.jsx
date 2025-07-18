import react, { useState } from "react";
import Profile from "./Profile";
import Address from "./Address";
import Summary from "./Summary";

const config = [
  {
    name: "Profile",
    component: Profile,
    onValidate({ name, lastName, email }) {
      const errObj = {};
      if (!name.trim()) {
        errObj.name = "name can't be empty";
      }
      if (!lastName.trim()) {
        errObj.lastName = "last name can't be empty";
      }
      if (!email.trim()) {
        errObj.email = "email can't be empty";
      }
      if (Object.keys(errObj).length > 0) {
        return { isValid: false, errObj: errObj };
      } else {
        return { isValid: true, errObj: errObj };
      }
    },
  },
  {
    name: "Address",
    component: Address,
    onValidate({ pincode }) {
      const errObj = {};
      if (pincode.length == 0) {
        errObj.pincode = "pincode can't be empty";
      }
      if (isNaN(pincode)) {
        errObj.pincode = "pincode can be a number only";
      }
      if (Object.keys(errObj).length > 0) {
        return { isValid: false, errObj: errObj };
      } else {
        return { isValid: true, errObj: errObj };
      }
    },
  },
  {
    name: "Summary",
    component: Summary,
    onValidate() {
      const errObj = {};
      return { isValid: true, errObj: errObj };
    },
  },
];
export default function HomeTabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "Sneha",
    lastName: "Gupta",
    email: "sneha@gmail.com",
    street: "2nd Cross",
    city: "Bangalore",
    pincode: 12345,
  });
  const [formError, setFormError] = useState({});
  const Tabcomponent = config[activeTab].component;
  const handleInputChange = (e, key) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };
  const handleSubmit = () => {
    console.log(formData, "formdata");
    setFormData({});
  };
  const handleNext = () => {
    const isMove = config[activeTab].onValidate(formData);
    if (isMove.isValid) {
      setActiveTab(activeTab + 1);
      setFormError({});
    } else {
      setFormError(isMove.errObj);
    }
  };
  const handlePrev = () => {
    const isMove = config[activeTab].onValidate(formData);
    if (isMove.isValid) {
      setActiveTab(activeTab - 1);
      setFormError({});
    } else {
      setFormError(isMove.errObj);
    }
  };
  return (
    <div className="App">
      <div className="tab_container">
        {config.map((tab, index) => {
          return (
            <div
              className="tab"
              key={index}
              onClick={() =>
                config[activeTab].onValidate(formData).isValid &&
                setActiveTab(index)
              }
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <Tabcomponent
        formData={formData}
        handleInputChange={handleInputChange}
        formError={formError}
      />
      <div className="button_container">
        <button
          className="pointer"
          onClick={handleNext}
          disabled={activeTab == 2}
        >
          next
        </button>
        <button
          className="pointer"
          onClick={handlePrev}
          disabled={activeTab == 0}
        >
          Prev
        </button>
        {activeTab == 2 && (
          <button className="pointer" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
