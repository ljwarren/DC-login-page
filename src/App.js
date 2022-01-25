import "./App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Box
            component="form"
            autoComplete="off"
            noValidate
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              height: "550px",
              width: "20%",
              marginTop: "7%",
              marginLeft: "38%",
              borderColor: "lightgray",
              borderStyle: "solid",
              padding: "10px",
            }}
          >
            <div>
              <h1>Welcome!</h1>
            </div>

            <div>
              <TextField
                id="outlined-basic"
                placeholder="Email"
                margin="normal"
                type="email"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ maxWidth: "300px", minWidth: "300px" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-password-input"
                placeholder="Password"
                type="password"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ maxWidth: "300px", minWidth: "300px" }}
              />
            </div>
            <Button
              variant="contained"
              sx={{
                maxWidth: "300px",
                minWidth: "300px",
                maxHeight: "30px",
                minHeight: "30px",
                color: "white",
                backgroundColor: "#4d009a",
                marginTop: "20px",
              }}
            >
              SIGN IN
            </Button>
            <Button sx={{ color: "#4d009a", marginBottom: "150px" }}>
              Forgot Password
            </Button>
            <Button
              variant="outlined"
              sx={{
                maxWidth: "300px",
                minWidth: "300px",
                maxHeight: "30px",
                minHeight: "30px",
                borderColor: "lightgray",
                color: "#4d009a",
              }}
            >
              Create Account
            </Button>
          </Box>
        </div>
      </header>
    </div>
  );
}

export default App;
