const Database = require('./db') //Trás para o ducumento, um código externo!
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //Inserir dados

    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89989898989",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject:"1",
        cost:"20",
        // o proffy ID virá pelo db!
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastrar a class!
        {
            weekday: 1,
            time_from: 720,
            time_to: 1120
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1120
        }
    ]
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //consultar as classes de um determinado proffy
    //e trazer junto os dados dele
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //o horário que a pessoa trabalha, por exemplo, é das X até as x+y.
    //o horário do time_from (x) precisa ser menor ou igual ao horário solicitado.
    //O time_to precisa ser necessáriamente acima. Para que o horário solicitado esteja dentro deste intervalo de tempo (Entre x e x+y)
    const selectClassesSchedules = await db.all(`
        SELECT classes_schedule.*
        FROM classes_schedule
        WHERE classes_schedule.class_id = 1
        AND classes_schedule.weekday = "0"
        AND classes_schedule.time_from <= "520"
        AND classes_schedule.time_to >= "520"
    `)
    console.log(selectClassesSchedules)
})