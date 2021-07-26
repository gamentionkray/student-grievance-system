exports.newGrievance = function (req, res) {
  const {
    pretainsUnder,
    state,
    university,
    nature,
    description,
    previouslySubmitted,
  } = req.body;

  let sql = `INSERT INTO grievances(s_id, go_id, g_category, g_sub_category, g_description, g_upload, g_status, g_added_date) VALUES (?)`;

  let values = [
    req.decoded.id,
    0,
    pretainsUnder,
    nature,
    description,
    previouslySubmitted,
    "pending",
    new Date(),
  ];
};
