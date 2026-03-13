import AppSite from "../AppSite";
import "./Projetos.css";

function Projetos() {
  const apps = [
    {
      titulo: "Code Connect",
      imagem: "/images/CodeConnect.png",
      linkgh: "https://github.com/lucas2005876-crypto/Code_connect.git",
      texto:
        "Aplicação web desenvolvida em React que simula uma rede social voltada para programadores. O projeto inclui sistema de autenticação com login e registro de usuários, integração com API para comunicação de dados e um feed onde é possível visualizar publicações. Os usuários podem interagir através de comentários e curtidas, criando uma experiência semelhante a plataformas sociais. Este foi um projeto pessoal, desenvolvido com uma API local para gerenciamento das informações e prática de integração entre front-end e back-end.",
    },
    {
      titulo: "Visualise - Editor de Imagem",
      imagem: "/images/Visualise.png",
      linkgh: "https://github.com/lucas2005876-crypto/Visualise.git",
      texto:
        "Aplicação desktop desenvolvida em Java com interface gráfica utilizando JavaFX, criada como projeto acadêmico. O sistema permite editar imagens através de diversas operações implementadas diretamente no backend, onde cada função manipula os pixels individualmente para aplicar alterações. Essa abordagem exigiu uma lógica mais complexa de processamento de imagem, permitindo compreender melhor como transformações gráficas funcionam em nível de pixel.",
    },
    {
      titulo: "Pomodoro",
      imagem: "/images/pomodoro.png",
      linkgh: "https://github.com/lucas2005876-crypto/pomodoro.git",
      texto:
        "Aplicação web baseada na técnica Pomodoro para auxiliar na organização do tempo. O sistema possui um temporizador que alterna entre períodos de foco e descanso e permite registrar as tarefas que estão sendo realizadas durante o ciclo, ajudando a manter o controle das atividades.",
    },
    {
      titulo: "Checklist de Estudos",
      imagem: "/images/checklist-estudos.png",
      linkgh: "https://github.com/lucas2005876-crypto/Plano_Estudos.git",
      texto:
        "Aplicação desenvolvida em React para organizar tarefas de estudo. O usuário pode criar atividades, marcar quando forem concluídas e excluir itens da lista. As informações ficam armazenadas no localStorage, permitindo que os dados permaneçam salvos mesmo após fechar a página.",
    },
  ];
  return (
    <div className="projetos" id="projetos">
      <h1>Projetos pessoais e Acadêmicos</h1>
      {apps.map((app) => {
        return (
          <AppSite
            texto={app.texto}
            titulo={app.titulo}
            imagem={app.imagem}
            linkgh={app.linkgh}
          ></AppSite>
        );
      })}
    </div>
  );
}

export default Projetos;
