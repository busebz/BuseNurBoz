import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <h3>Email</h3>
        <p>bozbusenur1@gmail.com</p>
      </div>
      <div className={classes.right}>
        <h3>GitHub</h3>
        <p><a href="https://github.com/busebz" target="_blank" rel="noreferrer">github.com/busebz</a></p>
      </div>
    </div>
  );
}

export default Footer;
