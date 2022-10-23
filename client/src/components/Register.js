import { Button, Container, Typography } from "@mui/material";
import React from "react";
import teams from "../utils/teams";
const Register = () => {
    return (
        <Container maxWidth="sm" sx={{ marginTop: 5 }}>
            <Typography variant="h6">Get ticket for:</Typography>
            <br />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {teams.map((team) => (
                    <Button
                        variant="outlined"
                        size={"large"}
                        sx={{ width: "100%", marginBottom: 2 }}
                    >
                        {team}
                    </Button>
                ))}
            </Container>
        </Container>
    );
};

export default Register;
