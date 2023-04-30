import { Search } from "@mui/icons-material";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import SynonymAntonym from "../../components/dictionaryComponents/SynonymAntonym";
import H1 from "../../components/textComponents/h1";
import { GlobalContext } from "../../services/globalContext";
import { useRouter } from "next/router";

const DictionarySearchPage = () => {
  const { fetchWordMeaning, dictionaryError } = useContext(GlobalContext);

  const [word, setWord] = useState("");
  const [response, setResponse] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form from submitting and refreshing the page

    const data = await fetchWordMeaning(word);
    // console.log(data?.data[0]);

    setResponse(data?.data[0]);

    // router.push(
    //   {
    //     pathname: `/dictionary/${word}`,
    //     query: { response: response, error: dictionaryError },
    //   },
    //   `/dictionary/${word}`
    // );
  };

  useEffect(() => {
    console.log(response?.meanings);
  }, [response]);

  return (
    <>
      <Head>
        <title>Dictionary {word && `| ${word}`}</title>
      </Head>

      <Container sx={{ padding: "1rem 0" }}>
        {/* <H1 title="Dictionary" /> */}
        <h1 style={{ textAlign: "center" }}>Dictionary</h1>

        <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
          <Stack direction="row" spacing={1} justifyContent="center">
            <TextField
              size="small"
              type="text"
              placeholder="Enter a word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" endIcon={<Search />}>
              Search
            </Button>
          </Stack>
        </form>

        <Box sx={{ maxWidth: "1000px", margin: "1rem auto" }}>
          {dictionaryError && (
            <Box
              sx={{
                margin: "1rem 0",
                padding: "1rem",
                height: "40vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>{dictionaryError}</h3>
            </Box>
          )}

          {response && (
            <Stack spacing={2} sx={{ margin: "1rem 0", padding: "0 1rem" }}>
              <h2>{response?.word}</h2>

              {response?.phonetics && (
                <Stack direction="row">
                  {response?.phonetics?.map((phonetic, index) => (
                    <Stack
                      key={index}
                      direction="row"
                      alignItems="center"
                      spacing={2}
                    >
                      {phonetic?.text && phonetic?.audio && (
                        <>
                          <audio controls src={phonetic?.audio}>
                            Your browser doesn't support audio element
                          </audio>
                          <p>{phonetic?.text}</p>
                        </>
                      )}
                    </Stack>
                  ))}
                </Stack>
              )}

              {response.meanings.map((meaning, index) => (
                <Stack direction="column" key={index} spacing={2}>
                  <h3>{meaning.partOfSpeech}</h3>

                  <Stack spacing={1}>
                    {meaning.definitions.map((def, index) => (
                      <Stack key={def.definition}>
                        <p>
                          {`${index + 1}.`} {def.definition}
                        </p>

                        {def.example && (
                          <>
                            <p>"{def.example}"</p>
                          </>
                        )}
                      </Stack>
                    ))}
                  </Stack>

                  {meaning.synonyms.length > 0 && (
                    <SynonymAntonym title="Synonyms" array={meaning.synonyms} />
                  )}

                  {meaning.antonyms.length > 0 && (
                    <SynonymAntonym title="Antonyms" array={meaning.antonyms} />
                  )}
                </Stack>
              ))}
            </Stack>
          )}
        </Box>
      </Container>
    </>
  );
};

export default DictionarySearchPage;
