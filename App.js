import React, { useState } from "react";

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="song1.mp4" />
          <File name="song2.mp4" />
        </Folder>
        <Folder name="Images">
          <File name="image1.jpeg" />
          <File name="image2.png" />
        </Folder>
      </Folder>
      <Folder name="Applications">
        <File name="App1.app" />
        <File name="App2.app" />
      </Folder>
    </div>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { name, children } = props;
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const direction = isOpen ? "down" : "right";

  return (
    <div>
      <span onClick={handleClick}>
        <i style={{ marginLeft: "10px" }} className="blue folder icon"></i>
        <i className={`black caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: "20px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp4: "headphones",
    jpeg: "file image",
    png: "file image outline",
    app: "app store",
  };
  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  );
};

export default App;
