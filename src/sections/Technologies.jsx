import { useEffect, useState } from "react";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSharp,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiPostman,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";

import classes from "./Technologies.module.css";

function Technologies() {
  const [technologyGroups, setTechnologyGroups] = useState([]);

  const icons = {
    react: SiReact,
    typescript: SiTypescript,
    javascript: SiJavascript,
    html5: SiHtml5,
    css: SiCss,
    csharp: SiSharp,
    dotnet: SiDotnet,
    nodejs: SiNodedotjs,
    express: SiExpress,
    mongodb: SiMongodb,
    mysql: SiMysql, 
    mssql: DiMsqlServer,
    git: SiGit,
    azuredevops: VscAzureDevops,
    docker: SiDocker,
    postman: SiPostman,
  };

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Technologies could not be loaded.");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologyGroups(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section
      id="technologies"
      className={classes.technologies}
    >
      <div className={classes.container}>
        <div className={classes.heading}>
          <h2>Technologies I Use</h2>

          <p>
            Here are the main technologies and tools I use and have
            worked with in my projects.
          </p>
        </div>

        <div className={classes.grid}>
          {technologyGroups.map((group) => (
            <div
              key={group.title}
              className={classes.card}
            >
              <h3>{group.title}</h3>

              <div className={classes.divider}></div>

              <div className={classes.items}>
                {group.items.map((item) => {
                  const Icon = icons[item.icon];

                  return (
                    <div
                      key={item.name}
                      className={classes.item}
                    >
                      {Icon && (
                        <span
                          className={classes.icon}
                          style={{ color: item.color }}
                        >
                          <Icon />
                        </span>
                      )}

                      <span className={classes.name}>
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;