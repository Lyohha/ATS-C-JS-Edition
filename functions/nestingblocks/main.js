console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Класи пам\'яті: вкладенність блоків';
    }

    setTemplate(pane) {
        for (let i = 0; i < this.lines.length; i++) pane.append(this.lines[i]);
    }

    getAnswers() {
        return this.answers;
    }

    createTemplate() {
        this.createFirstsLine();
        this.createFirstExpression();
        this.createLastLine();
    }

    createFirstExpression() {
        let pos = this.getPosition();
        let
                n1 = window.random.nextInt(10),
                n2 = window.random.nextInt(10),
                n3 = window.random.nextInt(10),
                n4 = window.random.nextInt(10);

        let
                o1 =  window.random.key(window.CodeGenerator.Operator);

        while(o1 == window.CodeGenerator.Operator.DIVISION && n4 == 0) n4 = window.random.nextInt(10)

        this.lines.push(new HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tauto int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(";")
        ));

        let i = 0;

        if (pos.contains(1)) {
            this.lines.push(new HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                    window.CodeGenerator.createPart("\tprintf("),
                    window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                    window.CodeGenerator.createPart(", i)"),
                    window.CodeGenerator.createPart(";")
            ));
            this.answers[i++] = n1.toString();
        }
        this.lines.push(new HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t{")
        ));

        this.lines.push(new HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\tint ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i="),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart(";")
        ));

        if (pos.contains(2)) {
            this.lines.push(new HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                    window.CodeGenerator.createPart("\t\tprintf("),
                    window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                    window.CodeGenerator.createPart(", i)"),
                    window.CodeGenerator.createPart(";")
            ));
            this.answers[i++] = n2.toString();
        }
        this.lines.push(new HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\t{")
        ));

        this.lines.push(new HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\t\tint ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i="),
                window.CodeGenerator.createPart(n3),
                window.CodeGenerator.createPart(";")
        ));

        if (pos.contains(3)) {
            this.lines.push(new HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                    window.CodeGenerator.createPart("\t\t\tprintf("),
                    window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                    window.CodeGenerator.createPart(", i)"),
                    window.CodeGenerator.createPart(";")
            ));
            this.answers[i++] = n3.toString();
        }

        this.lines.push(new HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\t\ti"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("="),
                window.CodeGenerator.createPart(n4),
                window.CodeGenerator.createPart(";")
        ));

        n3 = window.CodeGenerator.exeOperator(n3, n4, o1);

        if (pos.contains(4)) {
            this.lines.push(new HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                    window.CodeGenerator.createPart("\t\t\tprintf("),
                    window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                    window.CodeGenerator.createPart(", i)"),
                    window.CodeGenerator.createPart(";")
            ));
            this.answers[i++] = n3.toString();
        }


        this.lines.push(new HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\t}")
        ));

        if (pos.contains(5)) {
            this.lines.push(new HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                    window.CodeGenerator.createPart("\t\tprintf("),
                    window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                    window.CodeGenerator.createPart(", i)"),
                    window.CodeGenerator.createPart(";")
            ));
            this.answers[i++] = n2.toString();
        }

        this.lines.push(new HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t}")
        ));
        if (pos.contains(6)) {
            this.lines.push(new HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                    window.CodeGenerator.createPart("\tprintf("),
                    window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                    window.CodeGenerator.createPart(", i)"),
                    window.CodeGenerator.createPart(";")
            ));
            this.answers[i] = n1.toString();
        }
    }

    getPosition() {

        let pos = {
            contains: function(num) {
                return this[num] != null;
            }
        };

        let positions = [1, 2, 3, 4, 5, 6];

        for(let i = 0; i < 4; i++) {
            let num = window.random.nextInt(positions.length);

            pos[positions[num]] = 1;
            positions.splice(num, 1);
        }
        
        return pos;
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