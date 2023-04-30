import React from "react";
import styles from "../../styles/componentLevelCss/Dictionary.module.css";
import { Box, Link, Stack } from "@mui/material";

const SynonymAntonym = ({ title, array }) => {
  return (
    <Stack spacing={1}>
      <h4
        className={
          title === "Synonyms" ? styles.synonymTitle : styles.antonymTitle
        }
      >
        {title}
      </h4>

      <Stack direction="row" flexWrap="wrap">
        {array.map((antonym) => (
          <Link href={`/dictionary/${antonym}`} key={antonym}>
            <p
              style={{
                border: "1px solid grey",
                borderRadius: "0.2rem",
                padding: "0.2rem 0.6rem",
                alignSelf: "center",
                // fontWeight: "300",
                marginRight: "0.4rem",
                marginTop: "0.4rem",
              }}
            >
              {antonym}
            </p>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default SynonymAntonym;
