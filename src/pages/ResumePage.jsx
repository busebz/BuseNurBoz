import classes from "./ResumePage.module.css";

function ResumePage() {
  return (
    <div className={classes.resumePage}>
      <div className={classes.explanation}>
        <h1>RESUME</h1>
        <p>
          Full CV and publication list can be found{" "}
          <a href="/cv/BUSE NUR BOZ.pdf" download>
            here.
          </a>
        </p>
      </div>
    </div>
  );
}

export default ResumePage;
