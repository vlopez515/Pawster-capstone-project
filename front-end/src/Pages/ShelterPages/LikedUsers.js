import React from 'react'
import { Grid } from "@mui/material";
import { Avatar, Typography } from "@mui/material";

function LikedUsers({ user }) {
    return (
        <>
            {/* Container */}
            <Grid container item xs={6} sx={{p:2}}>
                <Grid container direction="column" alignItems="center" sx={{ height: 300, border: "solid black", justifyContent: 'center' }}>
                    {/* Photo */}
                    <div >
                        <Avatar
                            sx={{ borderSpacing: 4 }}
                            alt="Nat Geo"
                            src={user.photo_id}
                        />
                    </div>
                    {/* Name */}
                    <div>
                        <Grid container justify="center" alignItems="center" spacing={5} >
                            <Grid item xs={3}>
                                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                    {user.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>

                    {/* User Info */}
                    <div >
                        <Typography color="textSecondary" variant="caption">
                            Age: {user.age} <br/>
                            Sex: {user.sex} <br/>
                            Phone Number: {user.phone_number} <br/>
                            Email: {user.email}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default LikedUsers

