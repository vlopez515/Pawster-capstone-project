import "./ViewPet.css";

export default function ViewPet({ petShown }) {
  return (

    <div className="petShown">
      <div className="petInfo">
        <dl>
          <dt>AGE</dt>
          <dd>{petShown.age}</dd>
          <dt>BREED</dt>
          <dd> {petShown.breed}</dd>
          <dt>GENDER</dt>
          <dd>{petShown.gender}</dd>
          <dt>COLOR</dt>
          <dd>{petShown.color}</dd>
          <dt>HOUSE TRAINED?</dt>
          <dd>{petShown.house_trained ? "Yes" : "No"}</dd>
          <dt>SPECIAL NEEDS?</dt>
          <dd> {petShown.special_needs ? "Yes" : "No"}</dd>
          <dt> Shelter # </dt>
          <dd>{petShown.phone_number}</dd>
         
        </dl>
        <p>
            {petShown.description
              ? petShown.description
              : "No pet description provided."}
          </p>
      </div>
    </div>
  );
}
