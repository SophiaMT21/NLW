const Database = require('./database/db')

const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('./utils/format')

function pageLanding(req, res) {
return res.render("index.html")
}

async function pageStudy(req, res) {
     const filters = req.query

       if(!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", {filters, subjects, weekdays })
}
//converter horas em minutos
const timeToMinutes = convertHoursToMinutes(filters.time)

console.log('não tem campos vazios')

const query = `

SELECT classes.*, proffys.*
FROM proffys
JOIN classes ON (classes.proffy_id = proffys_id)
WHERE EXISTS(
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = classes_id
    AND class_schedule.weekday = ${filters.weekday}
    AND class_schedule.time_from <= ${timeToMinutes}
    AND class_schedule.time_to > ${timeToMinutes}
)
    AND classes.subject = '${filters.subject}'

`
//caso haja erro na conulta do banco de dados
try {

    const db = await Database
    const proffys = await db.all(query)
 
    return res.render('study.html', {proffys, subjects, filters, weekdays })

      }catch (error) {
          console.log(error)

   }


}

function pageGiveClasses(req, res) {
 
return res.render( "give-classes.html", {subjects, weekdays})
}

function saveClasses(req, res) {
    const createProffy = require('./database/createProffy')
    
    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio
    }
    
    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }

    const classScheduleValues = req.body.weekday.map((weekday) => {})
    
    return res.redirect("/study")
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
}