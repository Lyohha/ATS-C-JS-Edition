console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Функція squeeze';
    }

    setTemplate(pane) {
        for (let i = 0; i < this.lines.length; i++) pane.append(this.lines[i]);
    }

    getAnswers() {
        return this.answers;
    }

    createTemplate() {
        this.createFirstsLine();
        this.createMain();
        this.createSqueezeFunction();
    }

    createMain() {
        let string = this.createText();
        let symbols = this.createRemovedSymbols();

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("void ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("main()")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tchar ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("*s;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tchar ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("c["),
                window.CodeGenerator.createPart(4),
                window.CodeGenerator.createPart("];")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\ts="),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(string, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t"),
                window.CodeGenerator.createPart("c["),
                window.CodeGenerator.createPart(0),
                window.CodeGenerator.createPart("]="),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(""+symbols[0], window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(";"),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" c["),
                window.CodeGenerator.createPart(1),
                window.CodeGenerator.createPart("]="),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(""+symbols[1], window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(";"),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" c["),
                window.CodeGenerator.createPart(2),
                window.CodeGenerator.createPart("]="),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(""+symbols[2], window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(";"),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" c["),
                window.CodeGenerator.createPart(3),
                window.CodeGenerator.createPart("]="),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(""+symbols[3], window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tfor", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(i="),
                window.CodeGenerator.createPart(0),
                window.CodeGenerator.createPart("; i<"),
                window.CodeGenerator.createPart(4),
                window.CodeGenerator.createPart("; i++)")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\tsqueeze(s,c[i]);")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\tprintf("),
                window.CodeGenerator.createPart("\"%s\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(",s);")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t}")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));

        for (let i = 0; i < 4; i++)
            this.answers[i] = (string = this.removeSymbol(string, symbols[i]));

    }

    createSqueezeFunction() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("void ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("squeeze("),
                window.CodeGenerator.createPart("char ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("*s, "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("char ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("c)")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i,j;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tfor", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(i=j="),
                window.CodeGenerator.createPart(0),
                window.CodeGenerator.createPart("; s[i]!="),
                window.CodeGenerator.createPart("\'\\0\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("; i++)")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\tif", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(s[i]!=c)")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\t\ts[j++]=s[i];")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\ts[j]="),
                window.CodeGenerator.createPart("\'\\0\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    }

    createText() {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let stringBuilder = '';
        let count = window.random.nextInt(5) + 3;
        for (let i = 0; i < count; i++) {
            stringBuilder = stringBuilder + alphabet[window.random.nextInt(alphabet.length)];
        }

        return stringBuilder;
    }

    removeSymbol(str, symbol) {
        return str.replace(symbol, '');
    }

    createRemovedSymbols() {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let symbols = Array();

        for (let i = 0; i < 4; i++)
            symbols[i] = alphabet[window.random.nextInt(alphabet.length)];

        return symbols;
    }

    createFirstsLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#include", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" <stdio.h>", window.CodeGenerator.CodeType.LIBRARY)
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));
    }
}

window.mainController.setTask(new TemplateGenerator());