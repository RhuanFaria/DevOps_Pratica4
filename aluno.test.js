const Aluno = require('./aluno');

describe('Aluno', () => {
    // 1. Testar se a média está sendo calculada corretamente
    test('calcula a média corretamente', () => {
        const aluno = new Aluno('João', [8, 6]);
        expect(aluno.calcularMedia()).toBe(7);
    });

    // 2. Testar se a menção "MS" é retornada corretamente
    test('retorna menção MS para média entre 7 e 9', () => {
        const aluno = new Aluno('Maria', [8, 6]);
        expect(aluno.obterMencao()).toBe('MS');
    });

    // 3. Testar se @ alun@ foi aprovad@ ou reprovad@
    test('verifica se aluno foi aprovado ou reprovado', () => {
        const aluno = new Aluno('Carlos', [4, 3]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });

    // 4. Testar para menção "SS"
    test('retorna menção SS para média maior ou igual a 9', () => {
        const aluno = new Aluno('Ana', [9, 9]);
        expect(aluno.obterMencao()).toBe('SS');
    });

    // 5. Testar se o aluno foi aprovado com menção SS
    test('verifica aprovação com menção SS', () => {
        const aluno = new Aluno('Bia', [10, 9]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    // 6. Testar para menção "MM"
    test('retorna menção MM para média entre 5 e 7', () => {
        const aluno = new Aluno('Duda', [5, 6]);
        expect(aluno.obterMencao()).toBe('MM');
    });

    // 7. Testar se o aluno foi aprovado com menção MM
    test('verifica aprovação com menção MM', () => {
        const aluno = new Aluno('Luca', [6, 6]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    // 8. Testar para menção "MI"
    test('retorna menção MI para média menor que 5', () => {
        const aluno = new Aluno('Eve', [3, 4]);
        expect(aluno.obterMencao()).toBe('MI');
    });

    // 9. Testar se o aluno foi reprovado com menção MI
    test('verifica reprovação com menção MI', () => {
        const aluno = new Aluno('Lea', [3, 4]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });

    // 10. Testar se a média de um array vazio retorna NaN
    test('retorna NaN para média de array vazio', () => {
        const aluno = new Aluno('Kai', []);
        expect(aluno.calcularMedia()).toBeNaN();
    });

    // 11. Testar se notas com valores decimais são calculadas corretamente
    test('calcula corretamente média com valores decimais', () => {
        const aluno = new Aluno('Roberta', [6.5, 7.3]);
        expect(aluno.calcularMedia()).toBeCloseTo(6.9);
    });

    // 12. Testar se notas fora do intervalo [0,10] geram erro
    test('lança erro se a média for maior que 10', () => {
        const aluno = new Aluno('Paty', [11, 9]);
        expect(() => aluno.calcularMedia()).toThrow('Média acima da máxima permitida!');
    });

    // 13. Testar se as notas são números
    test('verifica se todas as notas são números', () => {
        const aluno = new Aluno('Igor', [5, 'sete']);
        expect(() => aluno.calcularMedia()).toThrow();
    });

    // 14. Testar se o aluno pode ser aprovado faltando uma prova e tirando nota máxima na última
    test('verifica aprovação com nota máxima em uma prova', () => {
        const aluno = new Aluno('Sara', [10]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    // 15. Testar se todas as notas iguais a zero retornam menção "MI"
    test('retorna menção MI para todas as notas zero', () => {
        const aluno = new Aluno('Dan', [0, 0]);
        expect(aluno.obterMencao()).toBe('MI');
    });

    // 16. Testar se notas muito próximas de 7 retornam a menção correta
    test('retorna menção correta para notas próximas de 7', () => {
        const aluno = new Aluno('Rui', [6.9, 7.1]);
        expect(aluno.obterMencao()).toBe('MS');
    });

    // 17. Testar se uma única nota zero afeta a aprovação
    test('retorna reprovado para uma única nota zero', () => {
        const aluno = new Aluno('Val', [0, 6]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });

    // 18. Testar se a soma total das notas é correta
    test('soma corretamente as notas', () => {
        const aluno = new Aluno('Leo', [4, 3]);
        const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
        expect(soma).toBe(7);
    });

    // 19. Testar se a função aprovado funciona com menção MM
    test('retorna aprovação para menção MM', () => {
        const aluno = new Aluno('Nina', [6, 5]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    // 20. Testar se aluno com notas abaixo de 5 é reprovado
    test('reprova aluno com média abaixo de 5', () => {
        const aluno = new Aluno('Maya', [4, 3]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });
});
