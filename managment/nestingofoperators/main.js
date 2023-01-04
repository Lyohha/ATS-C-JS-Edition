console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Вкладенність операторів';
    }

    setTemplate(pane) {
        for (let i = 0; i < this.lines.length; i++) pane.append(this.lines[i]);
    }

    getAnswers() {
        return this.answers;
    }

    createTemplate() {
        this.createFirstsLine();
        let text = this.createVariables();
        this.createFirstExpression(text);
        this.createSecondExpression(text);
        this.createLastLine();
    }

    createVariables() {

        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        let t = [
            window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
        ];

        let text = t.join('');

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tchar", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("* input = "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(text, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i="),
                window.CodeGenerator.createPart(0),
                window.CodeGenerator.createPart(", num="),
                window.CodeGenerator.createPart(0),
                window.CodeGenerator.createPart(", sym="),
                window.CodeGenerator.createPart(0),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tchar ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("c;")
        ));

        return text;
    }

    createFirstExpression(text) {
        let num = 0;

        for (let i = 0; i < text.length; i++)
            if (!isNaN(parseInt(text.substr(i, 1)))) num++;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\twhile", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("((c=input[i++]) != "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                //window.CodeGenerator.createPart("EOS", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("\'\\0\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(")")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\tif", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(c >= "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\'0\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" && c <= "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\'9\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(") num++;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\telse", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" sym++;")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", num)"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[0] = num.toString();
    }

    createSecondExpression(text) {
        let type = window.random.nextInt(2);

        let builder = '';

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tfor", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(i="),
                window.CodeGenerator.createPart(0),
                window.CodeGenerator.createPart("; (c=input[i]) != "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\'\\0\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("; i++)")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\tif", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(c >= "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(type == 0 ? "\'0\'" : "\'a\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" && c <= "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(type == 0 ? "\'9\'" : "\'z\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(") putchar(c);")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tputchar("),
                window.CodeGenerator.createPart("\'\\n\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(");")
        ));

        for (let i = 0; i < text.length; i++) {
            if (type == 0 && !isNaN(parseInt(text.substr(i, 1))))
                builder += text.charAt(i);
            if (type == 1 && isNaN(parseInt(text.substr(i, 1))))
                builder += text.substr(i, 1);
        }

        this.answers[1] = builder;
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

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("void", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" main()")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));
    }

    createLastLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    }
}

class Variables {
    x;
    y;
    z;

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

window.mainController.setTask(new TemplateGenerator());