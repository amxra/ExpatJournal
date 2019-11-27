const db= require('../database/db-config')

 module.exports = {
     getStories,
     getStoriesById
 };


 function getStories(){
     return db('locationsStories as LS')
     .join("stories as S", "LS.story_id", "S.id")
     .join("locations as L", "LS.location_id", "L.id")
     .join("photos as P", "P.story_id", "S.id")
     .select("S.id",
       "S.title",
       "S.story",
       "S.date_trip",
       "S.created_at",
       "L.city",
       "L.country",
       "P.url",
       "P.description"
     );

 }

 function getStoriesById(id) {
     return db("locationsStories as LS")
       .join("stories as S", "LS.story_id", "S.id")
       .join("locations as L", "LS.location_id", "L.id")
       .join("photos as P", "P.story_id", "S.id")
       .select(
         "S.id",
         "S.title",
         "S.story",
         "S.date_trip",
         "S.created_at",
         "L.city",
         "L.country",
         "P.url",
         "P.description"
       )
       .where("S.id", id)
       .first();
   } 