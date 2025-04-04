import { SERVICES } from "../../utils/constants";
import { OPENINGS } from "../../utils/constants";

import "./form.css";

interface IForm {
  isCareersForm?: boolean;
}

function Form({ isCareersForm }: IForm) {
  const checkboxArr = isCareersForm ? OPENINGS : SERVICES;

  return (
    <form action="" className="form">
      <div className="form__control-wrapper">
        <div className="form__control">
          <label htmlFor="" className="form__label">
            Full Name
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Type here"
            required
          />
        </div>
        <div className="form__control">
          <label htmlFor="" className="form__label">
            Email
          </label>
          <input
            type="email"
            className="form__input"
            placeholder="Type here"
            required
          />
        </div>
      </div>
      {isCareersForm && (
        <div className="form__control-wrapper">
          <div className="form__control">
            <label htmlFor="" className="form__label">
              Experience In Years
            </label>
            <input
              type="number"
              className="form__input"
              placeholder="Type here (optional)"
              min={0}
            />
          </div>
          <div className="form__control">
            <label htmlFor="" className="form__label">
              Contact
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Type here"
              value={"+91 "}
              required
            />
          </div>
        </div>
      )}
      <div className="form__control form__control--checkbox">
        <label className="form__label form__label--checkbox">
          {isCareersForm
            ? "Which role you are applying for?"
            : "What services are you interested in?"}
        </label>
        <div className="form__checkbox-wrapper">
          {checkboxArr.map((item) => (
            <div className="form__checkbox-item" key={item}>
              <input
                type="checkbox"
                id={item}
                className="form__checkbox-input"
              />
              <label htmlFor={item} className="form__checkbox-value">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
      {isCareersForm ? (
        <div className="form__control">
          <p className="form__label form__label--file">Upload Your Resume</p>
          <label htmlFor="resume" className="form__label form__label--file">
            <input
              id="resume"
              type="file"
              className="form__input form__input--file"
              required
            />
            <span className="form__resume-btn">Browse</span>
          </label>
        </div>
      ) : (
        <div className="form__control">
          <label htmlFor="" className="form__label">
            Your Message
          </label>
          <textarea
            className="form__textarea"
            placeholder="Type here"
          ></textarea>
        </div>
      )}
      <button className="btn">Submit</button>
    </form>
  );
}

export default Form;
