exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {
          title: "A trip to Kiney Lake",
          date_trip: "12-5-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: "13-5-2018"
        },
        {
          title: "The best locations in France",
          date_trip: "12-6-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: "13-6-2018"
        },
        {
          title: "The best lake in the World Lake Brienz",
          date_trip: "12-7-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: "13-7-2018"
        },
        {
          title: "A stary night in the canyon",
          date_trip: "12-8-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: "13-8-2018"
        },
        {
          title: "A day at the horshoe-bend",
          date_trip: "12-9-2018",
          story:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            date_posting: "13-9-2018"
        },
      ]);
    });
};