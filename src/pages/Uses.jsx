import "./Uses.css";
import "../devicon/devicon.min.css";
import { Helmet } from "react-helmet-async";

const Uses = () => (
  <div className="uses">
    <Helmet>
      <title>Jonathan Scheiber | Uses</title>
    </Helmet>
    <h2 className="title">Uses</h2>
    <div className="uses-text">
      <p>
        This page is inspired by{" "}
        <a
          className="text-link"
          href="https://uses.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          uses.tech
        </a>{" "}
        and the tradition of developers sharing the hardware, software, and
        tools they use every day. Here's what's currently in my toolkit.
      </p>

      <h3 className="subheader">Hardware</h3>
      <div className="uses-grid">
        <div className="uses-item">
          <h4 className="uses-item-title">Computers</h4>
          <p>
            Apple MacBook Air (2025, M4, 13", 16GB RAM, 512GB SSD)
            <br />
            <br />
            Lenovo ThinkPad T14s Gen 2 (2021, AMD Ryzen 7 PRO 5850U, 14", 32GB
            RAM, 1TB SSD){" "}
          </p>
        </div>
        <div className="uses-item">
          <h4 className="uses-item-title">Keyboard &amp; Mouse</h4>
          <p>
            Apple Wireless Keyboard
            <br />
            <br />
            Logitech MX Master 4
            <br />
            <br />
            Logitech M240
          </p>
        </div>
        <div className="uses-item">
          <h4 className="uses-item-title">Monitor</h4>
          <p>Dell 21-inch 1080p</p>
        </div>
      </div>

      <h3 className="subheader">Software</h3>
      <div className="uses-grid">
        <div className="uses-item">
          <h4 className="uses-item-title">Browser</h4>
          <p>Mozilla Firefox</p>
        </div>
        <div className="uses-item">
          <h4 className="uses-item-title">Terminal</h4>
          <p>iTerm2 with zsh</p>
        </div>
        <div className="uses-item">
          <h4 className="uses-item-title">Operating System</h4>
          <p>macOS 27 Golden Gate</p>
        </div>
      </div>
    </div>
  </div>
);

export default Uses;
