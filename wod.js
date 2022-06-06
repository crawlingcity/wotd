const img = new Request('https://images.squarespace-cdn.com/content/v1/61bd05f1f151e77577ab467c/3c6f8b68-6860-45bf-aa5e-e3dc260f8d55/Hybrid+Calisthenics+Logo+No+Slogan+Transparent.png?format=1500w')
const logo = await img.loadImage()

let widget = createWidget(logo)
if (config.runsInWidget) {
  // create and show widget
  Script.setWidget(widget)
  Script.complete()
}
else {
  widget.presentSmall()
}

// Assemble widget layout 
function createWidget(logo) {
  const listWidget = new ListWidget()
  listWidget.backgroundColor = new Color("#1A1A1A")

  const image = listWidget.addImage(logo)
  image.imageSize = new Size(65, 65)
  image.centerAlignImage()

  const staticText = listWidget.addText("Workout of the Day:")
  staticText.textColor = Color.white()
  staticText.font = Font.boldSystemFont(12)
  staticText.centerAlignText()

  listWidget.addSpacer(8)

  // Show current date in format Day. Month Year
  let currentDay = new Date().getDay().toString();
  const workouts = [
    "Day of resting and stretching :)",
    "Pushups\nLeg Raises",
    "Pullups\nSquats",
    "Bridges\nTwists",
    "Pushups\nLeg Raises",
    "Pullups\nSquats",
    "Bridges\nTwists"
  ]
  let amountTxt = listWidget.addText(workouts[currentDay])
  amountTxt.textColor = Color.orange()
  amountTxt.font = Font.systemFont(16)
  amountTxt.centerAlignText()

  listWidget.addSpacer(8)

  const dayOfWeekName = new Date().toLocaleString(
    'default', {weekday: 'long'}
  );
  let lastDate = listWidget.addText(dayOfWeekName);
  lastDate.textColor = Color.gray()
  lastDate.font = Font.mediumSystemFont(10)
  lastDate.centerAlignText();

  listWidget.setPadding(0, 0, 0, 0)
  return listWidget
}
