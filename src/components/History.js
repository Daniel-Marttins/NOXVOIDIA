// History.js
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const History = ({ scrollType, handleClose }) => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleInternalClose = () => {
    setOpen(false);
    handleClose();
  };

  const myHistory = "Meu nome é Daniel Martins, tenho 25 anos e estou há dois anos imerso na área fascinante da programação e tecnologia... Mas nem sempre foi assim. Antes de me aventurar neste universo, eu era totalmente o oposto, me via mergulhado na área de humanas. 📚💻 Naquela época, eu escrevia diversos livros e mal sabia mexer em um computador, a não ser para jogar – e isso, claro, se o jogo já estivesse instalado haha. Eu era péssimo em tudo relacionado à tecnologia, apesar de, no fundo, gostar disso. Minhas metas de carreira eram genéricas demais, e eu esperava qualquer oportunidade que surgisse, sem um rumo definido. 🌌🌐 Um pouco mais tarde, todos nós descobrimos que nada cai do céu e muito menos bate à nossa porta. Foi aí que comecei a enfrentar sérios problemas psicológicos, pois não tinha um objetivo de vida ou um grande sonho a seguir. Foi minha namorada (agradeço imensamente a ela por ter me apresentado aquela oportunidade) que, na época em que enfrentava problemas tanto psicológicos quanto financeiros (pois já morava sozinho), veio até minha casa e me falou sobre um curso de 'Téc. Desenvolvimento de Sistemas' em uma escola técnica da minha cidade No início do curso, éramos 90 alunos, e as coisas ainda eram frágeis após a pandemia. Ao longo do curso, quase desisti inúmeras vezes, mas lá havia um grande homem – não diria apenas um professor. Graças a ele e a outro amigo meu, persisti no curso. Passei noites em claro consumindo todo tipo de conteúdo útil e relevante para meu entendimento sobre o assunto. 🌃🎓 Aos poucos, fui começando a entender como todo aquele universo funcionava. Na entrada do segundo módulo do curso, acabei me tornando coordenador de Java na minha classe, e isso foi o ápice para mim. Descobri uma paixão imensa por todo tipo de tecnologia, e desde então venho sempre buscando novos conhecimentos, principalmente novos desafios que me levem ainda mais para dentro do coração da tecnologia. Hoje, escrevo minhas histórias em linhas de código, como este portfólio que, como podem ver, é bem temático. 🚀👾 Peço desculpas se algo não cai bem, mas tudo nesta página foi construído linha por linha pensando em todos os meus gostos. Ao descobrir a liberdade nas infinitas ondas dos códigos, eu amo criar coisas com identidades únicas. Não porque quero ser melhor do que ninguém, a não ser melhor do que eu mesmo, mas para expressar todo o meu potencial, que acredito ainda estar muito prematuro, mas em breve... Em um futuro não tão distante, estarei cuidando dos detalhes de grandes eventos tecnológicos e levando o conhecimento para outras milhares de pessoas. Nesse universo de códigos e erros, descobri infinitas possibilidades de ajudar a humanidade a evoluir para um novo patamar. Bom, por agora, isso basta. Desfrutem um pouco da minha página, caso ainda não tenham explorado tudo. Se quiserem saber mais sobre mim, aqui vocês encontrarão o caminho até mim, e ficarei imensamente contente em recebê-los. Dito isso, digo um até breve para vocês 🌌✨🎹🌟🌈";

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleInternalClose}
        scroll={scrollType}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Um pouco da Minha Historia</DialogTitle>
        <DialogContent dividers={scrollType === 'paper'}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            { myHistory }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInternalClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default History;
