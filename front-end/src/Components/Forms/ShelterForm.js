import React from 'react'

function ShelterForm() {
  return (

        <>
        <Form >

            <Typography variant="h4" align="center" sx={{ pt: 3, fontWeight: "bold" }}>New Shelter</Typography>
            <Stack
                direction="column"
                alignItems="center"
                sx={{ py: 4 }}
            >
                <Grid item xs={6}>
                    <Controls.Input
                        name="name"
                        label="Shelter's Name"
                        value={petInfo.name}
                        onChange={handleInputChange}

                    />
                    <Controls.Input
                        label="Breed"
                        name="breed"
                        value={petInfo.breed}
                        onChange={handleInputChange}

                    />
                    <Controls.Input
                        label="Color"
                        name="color"
                        value={petInfo.color}
                        onChange={handleInputChange}

                    />
                    <Controls.Input
                        label="Description"
                        name="description"
                        value={petInfo.description}
                        onChange={handleInputChange}
                    />
                </Grid>
                <div>
                    <Controls.Button
                        type="submit"
                        text="Submit"
                        color="default"
                        textColor="black" />
                     <Controls.Button
                        text="Nevermind!"
                        color="default"
                        href={`/shelter/${id}`}
                        />
                </div>

            </Stack>
        </Form>
        </>

  )
}

export default ShelterForm