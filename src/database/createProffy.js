module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {
    //Inserir dados na tabela de teachers!
    //A função "await" substituie "then", seu papel é forçar que a aplicação espere o termino da ação indicada!
    //Paa que o objeto "await" seja usado dentro de uma função, é necessário indicar aque a mesma é "async"!
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    // insere dados na tabela classes

    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)
    
    const class_id = insertedClass.lastID
    
    // insere dados na tabela class_Schedules
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue)=>{
        return db.run(`
            INSERT INTO classes_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    //Executar todos os db.runs() das class_Schedules
    await Promise.all(insertedAllClassScheduleValues)
}