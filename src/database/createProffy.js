module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    //inserir dados na tabela de proffys
  const insertedProffy = await db.run(`
  INSERT INTO proffys (
      name,
      avatar,
      whatsapp,
      bio
  ) VALUES (
      ${proffyValue.name},
      ${proffyValue.avatar},
      ${proffyValue.whatsapp},
      ${proffyValue.bio}
     );
 `)
 const proffy_id = insertedProffy.lastID

 //inserir dados na tabela classes
   const insertedClasses = await db.run(`
   INSERT INTO classes (
       subject,
       cost,
       proffy_id
   ) VALUES (
       ${classValue.subject},
       ${classValue.cost},
       ${classValue.proffy_id}
   );

`)
 const class_id = insertedClasses.lastID

//inserir dados na tabela Schedule
   classScheduleValues.map((value) => {})

}