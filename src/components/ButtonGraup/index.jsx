import { Box, Button, Fade, Popper, Typography } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default ({
  navbutton,
  foo,
  bosh,
  btn,
  btn2,
  topbtn,
  topbtn2,
  btntext,
  cardbutton,
}) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <>
      {navbutton && (
        <Box
          sx={{
            mr: "5%",
            width: "25%",
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              border: 1,
              width: "45%",
              height: "70%",
              borderRadius: 0,
              color: "white",
              backgroundColor: "#FB246A",
            }}
          >
            Register
          </Button>
          <Button
            className="btn btn1"
            sx={{
              border: 1,
              width: "40%",
              height: "70%",
              borderRadius: 0,
              color: "#FB246A",
            }}
          >
            Login
          </Button>
        </Box>
      )}
      {foo && (
        <Button
          sx={{
            backgroundColor: "#FB246A",
            color: "white",
            maxWidth: "50px",
            minWidth: "20px",
            maxHeight: "40px",
            minHeight: "40px",
            ":hover": {
              backgroundColor: "#FB246A",
            },
          }}
        >
          <TelegramIcon />
        </Button>
      )}
      {bosh && (
        <>
          <Button
            aria-describedby={id}
            type="button"
            onClick={handleClick}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "silver",
            }}
          >
            <Typography variant="p" sx={{ ml: "4%", mr: "4%" }}>
              Location PK
            </Typography>
            <Typography>
              {open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
            </Typography>
          </Button>
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            transition
            sx={{ width: "35%" }}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={450}>
                <Box sx={{ border: 1, p: 1 }}>
                  Location PK <br />
                  Location PK
                </Box>
              </Fade>
            )}
          </Popper>
        </>
      )}
      {btn && (
        <Button
          sx={{
            border: 1,
            width: "100%",
            height: "100%",
            borderRadius: 0,
            color: "white",
            backgroundColor: "#FB246A",
            ":hover": {
              color: "white",
              backgroundColor: "#FB246A",
            },
          }}
        >
          Find Job
        </Button>
      )}
      {topbtn && (
        <Button
          sx={{
            mt: "10%",
            mb: "10%",
            border: 1,
            pt: "1%",
            pb: "1%",
            pl: "5%",
            pr: "5%",
          }}
        >
          {btntext}
        </Button>
      )}
      {cardbutton && (
        <Button
          sx={{
            border: 1,
            maxHeight: "40px",
            maxWidth: "150px",
            minWidth: "150px",
            borderRadius: "30px",
            p: "0px 30px 0x 30px",
            ":hover": {
              color: "white",
              backgroundColor: "#8B92DD",
            },
          }}
        >
          Full Time
        </Button>
      )}
      {btn2 && (
        <Button
          sx={{
            border: 1,
            width: "40%",
            height: "70px",
            mt: "5%",
            borderRadius: 4,
            color: "white",
            backgroundColor: "#FB246A",
            ":hover": {
              color: "white",
              backgroundColor: "#FB246A",
            },
          }}
        >
          Find Job
        </Button>
      )}
    </>
  );
};
