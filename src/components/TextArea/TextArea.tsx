import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

// const StyledTextField = styled(TextField)({
//   width: "100%",
//   marginTop: "16px",
//   "& .MuiInputBase-root": {
//     fontSize: "1rem",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   "& .MuiInputBase-inputMultiline": {
//     textAlign: "center",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   "@media (min-width: 600px)": {
//     width: "80%",
//     fontSize: "1.2rem",
//   },
//   "@media (min-width: 960px)": {
//     width: "60%",
//     fontSize: "1.4rem",
//   },
//   "@media (min-width: 1280px)": {
//     width: "50%",
//     fontSize: "1.6rem",
//   },
// });

// const TextArea = ({ Text = "Text to be entered here" }) => {
//   const [value, setValue] = useState(Text);

//   useEffect(() => {
//     setValue(Text);
//   }, [Text]);

//   const handleChange = (event: any) => {
//     setValue(event.target.value);
//   };
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="50px"
//       p={2}
//       bgcolor="#f5f5f5"
//     >
//       <StyledTextField
//         multiline
//         minRows={4}
//         maxRows={Infinity}
//         variant="outlined"
//         value={value}
//         onChange={handleChange}
//       />
//     </Box>
//   );
// };

// export default TextArea;

const StyledBox = styled(Box)({
  width: "100%",
  maxWidth: "60vh",
  marginTop: "16px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width: 600px)": {
    width: "80%",
  },
  "@media (min-width: 960px)": {
    width: "60%",
  },
  "@media (min-width: 1280px)": {
    width: "50%",
  },
});

const TextArea = ({ Text = "Text to be entered here" }) => {
  const [value, setValue] = useState(Text);

  useEffect(() => {
    setValue(Text);
  }, [Text]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="40px"
      p={2}
      bgcolor="#f5f5f5"
    >
      <StyledBox>
        <Typography variant="body1">{value}</Typography>
      </StyledBox>
    </Box>
  );
};

export default TextArea;
