import { Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../services/globalContext";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const QuoteAuthor = () => {
  const { fetchRandomQuote } = useContext(GlobalContext);

  const [authorQuote, setAuthorQuote] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchQuote = async () => {
      const data = await fetchRandomQuote();

      if (mounted) {
        setAuthorQuote(data?.data);
      }
    };

    fetchQuote();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Stack spacing={2} alignItems="center">
      <FormatQuoteIcon sx={{ fontSize: "7rem" }} />
      <blockquote style={{ fontSize: "2rem" }}>
        {authorQuote?.content}
      </blockquote>
      <h4>~ {authorQuote?.author}</h4>
    </Stack>
  );
};

export default QuoteAuthor;
