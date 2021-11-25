import React, { Component } from "react";
import PDF from "./PDF";
import "../Post.css";
import TextIn from "./parts/TextIn";
class Post extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    tel: "",
    uniName: "",
    degree: "",
    uniName1: "",
    degree1: "",
    fromEdu: "",
    toEdu: "",
    fromEdu1: "",
    toEdu1: "",
    fromExp: "",
    toExp: "",
    fromExp1: "",
    toExp1: "",
    comName: "",
    position: "",
    comName1: "",
    position1: "",
    postSubmitted: false,
    isActiveEdu: true,
    isActiveExp: true,
  };

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };
  handleAddEdu = () => {
    this.setState({ isActiveEdu: false });
  };
  handleDeleteEdu = () => {
    this.setState({ isActiveEdu: true });
  };
  handleAddExp = () => {
    this.setState({ isActiveExp: false });
  };
  handleDeleteExp = () => {
    this.setState({ isActiveExp: true });
  };
  submitPost = (e) => {
    if (
      !this.state.fName ||
      !this.state.lName ||
      !this.state.email ||
      !this.state.tel ||
      !this.state.uniName ||
      !this.state.degree ||
      !this.state.fromEdu ||
      !this.state.toEdu ||
      !this.state.fromExp ||
      !this.state.toExp ||
      !this.state.comName ||
      !this.state.position
    ) {
      alert("All fields are required!");
      e.preventDefault();
    } else {
      this.setState({
        postSubmitted: true,
      });
    }
  };

  render() {
    const isActiveEdu = this.state.isActiveEdu;
    const isActiveExp = this.state.isActiveExp;
    return (
      <>
        {!this.state.postSubmitted ? (
          <div className="jC main">
            <div className="bgMain ">
              <form className="" method="post">
                <legend className="header">Fill The CV </legend>
                <div className="mainContent">
                  <div class="container">
                    <h2>Info</h2>

                    <div class="row">
                      <TextIn
                        class="col"
                        fName="fName"
                        onChangeButton={this.onChange("fName")}
                        place="First Name"
                        textSize="textInput"
                        typeInput="text"
                      />
                      <TextIn
                        class="col"
                        lName="lName"
                        onChangeButton={this.onChange("lName")}
                        place="Last Name"
                        textSize=" textInput"
                        typeInput="text"
                      />
                      <div className="row">
                        <TextIn
                          class="col-12 w-90"
                          email="email"
                          onChangeButton={this.onChange("email")}
                          place="example@mail.com"
                          textSize=" textInputLong"
                          typeInput="email"
                        />
                      </div>
                      <div className="row">
                        <TextIn
                          class="col-12 w-90"
                          tel="tel"
                          onChangeButton={this.onChange("tel")}
                          place="(555) 555-5555"
                          textSize=" textInputLong"
                          typeInput="tel"
                        />
                      </div>
                    </div>
                  </div>
                  {/* //Education */}
                  <div class="container">
                    <h2>Education</h2>

                    <div class="row">
                      <div className="row">
                        <TextIn
                          class="col-12 w-90"
                          uniName="uniName"
                          onChangeButton={this.onChange("uniName")}
                          place="University Name"
                          textSize="textInputLong"
                          typeInput="text"
                        />
                      </div>
                      <div className="row">
                        <TextIn
                          class="col-12 w-90"
                          degree="degree"
                          onChangeButton={this.onChange("degree")}
                          place="Degree"
                          textSize=" textInputLong"
                          typeInput="text"
                        />
                      </div>

                      <TextIn
                        class="col"
                        fromEdu="fromEdu"
                        onChangeButton={this.onChange("fromEdu")}
                        place="From"
                        textSize=" textInput"
                        typeInput="text"
                      />

                      <TextIn
                        class="col"
                        toEdu="toEdu"
                        onChangeButton={this.onChange("toEdu")}
                        place="To"
                        textSize=" textInput"
                        typeInput="text"
                      />
                      <div className="jC">
                        <button
                          onClick={this.handleAddEdu}
                          className="addEdu eduBut"
                        >
                          Add One More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`container   ${
                      isActiveEdu ? "visibilityEdu" : ""
                    }`}
                  >
                    <h2>Education</h2>

                    <div className="row">
                      <div className="row">
                        <TextIn
                          class="col-12 w-90"
                          uniName1="uniName1"
                          onChangeButton={this.onChange("uniName1")}
                          place="University Name"
                          textSize="textInputLong"
                          typeInput="text"
                        />
                      </div>
                      <div className="row">
                        <TextIn
                          class="col-12 w-90"
                          degree1="degree1"
                          onChangeButton={this.onChange("degree1")}
                          place="Degree"
                          textSize=" textInputLong"
                          typeInput="text"
                        />
                      </div>

                      <TextIn
                        class="col"
                        fromEdu1="fromEdu1"
                        onChangeButton={this.onChange("fromEdu1")}
                        place="From"
                        textSize=" textInput"
                        typeInput="text"
                      />

                      <TextIn
                        class="col"
                        toEdu1="toEdu1"
                        onChangeButton={this.onChange("toEdu1")}
                        place="To"
                        textSize=" textInput"
                        typeInput="text"
                      />
                    </div>
                    <div className="jC">
                      <button
                        className="deleteEdu"
                        onClick={this.handleDeleteEdu}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  {/* Experience */}
                  <div class="container">
                    <h2>Experience</h2>

                    <div class="row">
                      <div className="row">
                        <TextIn
                          class="col-12 w-90"
                          comName="comName"
                          onChangeButton={this.onChange("comName")}
                          place="Company Name"
                          textSize="textInputLong"
                          typeInput="text"
                        />
                      </div>
                      <div className="row">
                        <TextIn
                          class="col-12 w-90"
                          position="position"
                          onChangeButton={this.onChange("position")}
                          place="Position"
                          textSize=" textInputLong"
                          typeInput="text"
                        />
                      </div>

                      <TextIn
                        class="col"
                        fromExp="fromExp"
                        onChangeButton={this.onChange("fromExp")}
                        place="From"
                        textSize=" textInput"
                        typeInput="text"
                      />

                      <TextIn
                        class="col"
                        toExp="toExp"
                        onChangeButton={this.onChange("toExp")}
                        place="To"
                        textSize=" textInput"
                        typeInput="text"
                      />
                      <div className="jC">
                        <button
                          onClick={this.handleAddExp}
                          className="addEdu eduBut"
                        >
                          Add One More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`container   ${
                      isActiveExp ? "visibilityExp" : ""
                    }`}
                  >
                    <h2>Experience</h2>

                    <div class="row">
                      <div className="row">
                        <TextIn
                          class="col-12 w-90"
                          comName1="comName1"
                          onChangeButton={this.onChange("comName1")}
                          place="Company Name"
                          textSize="textInputLong"
                          typeInput="text"
                        />
                      </div>
                      <div className="row">
                        <TextIn
                          class="col-12 w-90"
                          position1="position1"
                          onChangeButton={this.onChange("position1")}
                          place="Position"
                          textSize=" textInputLong"
                          typeInput="text"
                        />
                      </div>

                      <TextIn
                        class="col"
                        fromExp1="fromExp1"
                        onChangeButton={this.onChange("fromExp1")}
                        place="From"
                        textSize=" textInput"
                        typeInput="text"
                      />

                      <TextIn
                        class="col"
                        toExp1="toExp1"
                        onChangeButton={this.onChange("toExp1")}
                        place="To"
                        textSize=" textInput"
                        typeInput="text"
                      />
                    </div>
                    <div className="jC">
                      <button
                        className="deleteEdu"
                        onClick={this.handleDeleteExp}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div className="jC">
                  <button
                    type="button"
                    onClick={this.submitPost}
                    className="inputs inputButton"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <PDF
            fName={this.state.fName}
            lName={this.state.lName}
            email={this.state.email}
            tel={this.state.tel}
            uniName={this.state.uniName}
            degree={this.state.degree}
            fromEdu={this.state.fromEdu}
            toEdu={this.state.toEdu}
            fromExp={this.state.fromExp}
            toExp={this.state.toExp}
            comName={this.state.comName}
            position={this.state.position}
          />
        )}
      </>
    );
  }
}

export default Post;
