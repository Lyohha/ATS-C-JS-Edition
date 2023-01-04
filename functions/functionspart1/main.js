console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Класи пам\'яті: функції (частина 1)';
    }

    setTemplate(pane) {
        for (let i = 0; i < this.lines.length; i++) pane.append(this.lines[i]);
    }

    getAnswers() {
        return this.answers;
    }

    createTemplate() {
        let variables = this.createFirstsLine();
        let types = this.getTypes();
        for (let i = 0; i < types.length(); i++)
            this.createExpression(variables, types.get(i), i);
        //createSecondExpression(text);
        this.createLastLine();
        this.createReset();
        if (types.contains(5))
            this.createWorkOver();
    }

    createReset() {

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("void ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("reset("),
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i)")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\ti=i<="),
                window.CodeGenerator.createPart("CHANGE", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("?"),
                window.CodeGenerator.createPart("HIGH", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(":"),
                window.CodeGenerator.createPart("LOW", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\treturn ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i;")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));

    }

    createWorkOver() {
        let
                n1 = window.random.nextInt(9) + 1,
                n2 = window.random.nextInt(9) + 1;
        let
                o1 = window.random.key(window.CodeGenerator.Operator, 3),
                o2 = window.random.key(window.CodeGenerator.Operator, 3),
                o3 = window.random.key(window.CodeGenerator.Operator, 3),
                o4 = window.random.key(window.CodeGenerator.Operator);

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("void ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("workover("),
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i)")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\ti=(i%i)*((i"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("i)"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o2)),
                window.CodeGenerator.createPart("("),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o3)),
                window.CodeGenerator.createPart("i)"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o4)),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart(");")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("printf("),
            window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
            window.CodeGenerator.createPart(", i)"),
            window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\treturn ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i;")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    }

    createExpression(variables, type, answer) {
        switch (type) {
            case 1:
                //PRINT(i);
                this.createFirstExpression(variables, answer);
                break;
            case 2:
                //reset(i+4); PRINT(i);
                this.createSecondExpression(variables, answer);
                break;
            case 3:
                //reset(i=i+0); PRINT(i);
                this.createThirdExpression(variables, answer);
                break;
            case 4:
                //i=reset(i+0); PRINT(d,i);
                this.createFourthExpression(variables, answer);
                break;
            case 5:
                //workover(i);
                this.createFifthExpression(answer);
                break;
        }
    }

    createFirstExpression(variables, answer) {

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("printf("),
            window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
            window.CodeGenerator.createPart(", i)"),
            window.CodeGenerator.createPart(";")
        ));

        this.answers[answer] = variables.i.toString();
    }

    createSecondExpression(variables, answer) {
        let
                n1 = window.random.nextInt(10);
        let
                o1 = window.random.key(window.CodeGenerator.Operator);

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\treset(i"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(");"),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("printf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", i)"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[answer] = variables.i.toString();
    }

    createThirdExpression(variables, answer) {
        let
                n1 = window.random.nextInt(9) + 1;
        let
                o1 = window.random.key(window.CodeGenerator.Operator);

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\treset(i=i"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(");"),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("printf("),
            window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
            window.CodeGenerator.createPart(", i)"),
            window.CodeGenerator.createPart(";")
        ));

        variables.i = window.CodeGenerator.exeOperator(variables.i, n1, o1);

        this.answers[answer] = variables.i.toString();
    }

    createFourthExpression(variables, answer) {
        let
                n1 = window.random.nextInt(9) + 1;
        let
                o1 = window.random.key(window.CodeGenerator.Operator);

        variables.i = window.CodeGenerator.exeOperator(variables.i, n1, o1) <= variables.CHANGE ? variables.HIGH : variables.LOW;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\ti=reset(i=i"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(");"),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("printf("),
            window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
            window.CodeGenerator.createPart(", i)"),
            window.CodeGenerator.createPart(";")
        ));

        this.answers[answer] = variables.i.toString();
    }

    createFifthExpression(answer) {

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tworkover(i);")
        ));

        this.answers[answer] = "0";
    }

    getTypes() {
        let pos = {
            get: function(num) {
                return this[num];
            },
            length: function() {
                return 3;
            },
            contains: function(num) {
                let keys = Object.keys(this);

                for(let i = 0; i < keys.length; i++)
                    if(this[i] == num)
                        return true;

                return false;
            }
        };

        let positions = [1, 2, 3, 4, 5];

        for(let i = 0; i < 3; i++) {
            let num = window.random.nextInt(positions.length);

            // pos[positions[num]] = 1;
            pos[i] = positions[num];
            positions.splice(num, 1);
        }
        
        return pos;
    }

    createVariables() {

        let
                low = window.random.nextInt(5),
                high = window.random.nextInt(5) + 6;
        let
                change = window.random.nextInt(high - low - 1) + low + 1;
        return new Variables(low, high, change);
    }

    createFirstsLine() {

        let variables = this.createVariables();

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#include", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" <stdio.h>", window.CodeGenerator.CodeType.LIBRARY)
        ));

        // this.lines.push(window.HBox(
        //         window.CodeGenerator.createPart("#define", window.CodeGenerator.CodeType.DIRECTIVE),
        //         window.CodeGenerator.createPart(" PRINT(", window.CodeGenerator.CodeType.DEFINE1),
        //         window.CodeGenerator.createPart("int", window.CodeGenerator.CodeType.OPERATOR),
        //         window.CodeGenerator.createPart(")", window.CodeGenerator.CodeType.DEFINE1),
        //         window.CodeGenerator.createPart(" printf("),
        //         window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
        //         window.CodeGenerator.createPart(", "),
        //         window.CodeGenerator.createPart("int", window.CodeGenerator.CodeType.OPERATOR),
        //         window.CodeGenerator.createPart(")")
        // ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#define", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" LOW ", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(variables.LOW)
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#define", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" HIGH ", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(variables.HIGH)
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#define", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" CHANGE ", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(variables.CHANGE)
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" i="),
                window.CodeGenerator.createPart("LOW", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(";")
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

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("\tauto int", window.CodeGenerator.CodeType.OPERATOR),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
            window.CodeGenerator.createPart(" i=HIGH;")
    ));

        return variables;
    }

    createLastLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    }
}

class Variables {
    LOW;
    HIGH;
    CHANGE;
    i;

    constructor(x, y, z) {
        this.LOW = x;
        this.HIGH = y;
        this.CHANGE = z;
        this.i = x;
    }
}

window.mainController.setTask(new TemplateGenerator());