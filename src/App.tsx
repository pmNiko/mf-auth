import CardContainer from "./remotes/CardContainer";

export default () => {
  return (
    <CardContainer title="CardContainer consumido" showImage>
      <p style={{ textAlign: "center", padding: "4em" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae
        beatae illum suscipit laboriosam, ratione harum dignissimos voluptatem
        eveniet non quia commodi distinctio aliquid provident nemo reprehenderit
        odio quaerat facere.
      </p>
      <div style={{ textAlign: "center", marginBottom: "3em" }}>
        <button
          style={{
            width: 130,
            height: 30,
            fontSize: 10,
            fontWeight: "bold",
            background: "royalblue",
            color: "white",
            border: 0,
            borderRadius: "5px",
            textTransform: "uppercase",
            boxShadow: "2px 4px 6px 1px rgba(0,0,0,0.5)",
          }}
        >
          Ir al Inicio
        </button>
      </div>
    </CardContainer>
  );
};
