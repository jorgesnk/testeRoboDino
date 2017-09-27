var brain = require('brain')
var net = new brain.NeuralNetwork();

// var data = [
//     { input: [1, 1, 1, 1], output: { colide: 1 } },
//     { input: [0, 0, 0, 0], output: { colide: 1 } },
//     { input: [0, 0, 1, 1], output: { colide: 1 } },
// ];

// net.train(data)
// var output = net.run([1, 0, 1, 1])
// console.log(output)


var robot = require("robotjs");
const delay = require('delay');
const tela = robot.getScreenSize();


var a = 0;
var vetor = [];

for (var i = 0; i <= 27; i++) {
    vetor[i] = 0;
}

var temp = vetor;
var ojetoInserer = { input: vetor, output: 0 };
while (a == 0) {
    var centro = { x: 677, y: 170 };
    var posCor = { x: 167, y: 679 }
    var peridoTempo = robot.getPixelColor(posCor.x, posCor.y)
    const cinza = 535353;
    var saida = { colide: 0 };
    const branco = 'f7f7f7';
    var corColide = cinza;



    if (peridoTempo != 'f7f7f7') {
        corColide = branco;
    }

    if (robot.getPixelColor(560, 236) == corColide) {
        temp[0] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(561, 238) == corColide) {
        temp[1] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(550, 226) == corColide) {
        temp[2] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(540, 232) == corColide) {
        temp[3] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(570, 286) == corColide) {
        temp[4] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(554, 235) == corColide) {
        temp[5] = 1
        saida.colide = 1;
    }
    if (robot.getPixelColor(560, 236) == corColide) {
        temp[6] = 1

    }
    if (robot.getPixelColor(560, 236) == corColide) {
        temp[7] = 1
        saida.colide = 1;
    }
    if (robot.getPixelColor(716, 236) == corColide) {
        temp[8] = 1
        saida.colide = 1;
    }
    if (robot.getPixelColor(720, 238) == corColide) {
        temp[9] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(730, 226) == corColide) {
        temp[10] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(710, 132) == corColide) {
        temp[11] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(720, 255) == corColide) {
        temp[12] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(906, 235) == corColide) {
        temp[13] = 1
        saida.colide = 1;
    }
    if (robot.getPixelColor(915, 225) == corColide) {
        temp[14] = 1
        saida.colide = 1;
    }
    if (robot.getPixelColor(540, 236) == corColide) {
        temp[15] = 1
        saida.colide = 1;
    }
    if (robot.getPixelColor(512, 286) == corColide) {
        temp[16] = 1
        saida.colide = 1;
    }
    if (robot.getPixelColor(452, 213) == corColide) {
        temp[17] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(755, 312) == corColide) {
        temp[18] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(496, 345) == corColide) {
        temp[19] = 1;
        saida.colide = 1;
    }
    if (robot.getPixelColor(765, 650) == corColide) {
        temp[20] = 1
        saida.colide = 1;
    }
    if (robot.getPixelColor(758, 330) == corColide) {
        temp[21] = 1
        saida.colide = 1;
    }
    if (robot.getPixelColor(906, 303) == corColide) {
        temp[22] = 1
        saida.colide = 1;
    }
    if (robot.getPixelColor(906, 400) == corColide) {
        temp[23] = 1
        saida.colide = 1;
    }

    if (robot.getPixelColor(484, 555) == corColide) {
        saida.colide = 1;
        temp[24] = 1;
    }
    if (robot.getPixelColor(494, 555) == corColide) {
        saida.colide = 1;
        temp[25] = 1;
    }

    if (robot.getPixelColor(484, 535) == corColide) {
        saida.colide = 1;
        temp[26] = 1;
    }
    if (robot.getPixelColor(494, 525) == corColide) {
        saida.colide = 1;
        temp[27] = 1;
    }
    if (robot.getPixelColor(677, 170) == corColide) {
        saida.colide = 0;
        robot.keyTap('up')
        robot.setKeyboardDelay(100);
    
    }
    ojetoInserer.input = temp;
    ojetoInserer.output = saida;
    // vetor.push(ojetoInserer);
    net.train(ojetoInserer, {
        errorThresh: 0.005,  // error threshold to reach 
        iterations: 20000,   // maximum training iterations 
          // console.log() progress periodically 
        logPeriod: 10,       // number of iterations between logging 
        learningRate: 0.3
    });

    var result = net.run(temp);

    console.log(ojetoInserer);
    console.log(ojetoInserer.output.colide)
    console.log(result.colide);

    if (result.colide > 0.98) {
        robot.keyTap('up')
        console.log('entrei')
    }


}



