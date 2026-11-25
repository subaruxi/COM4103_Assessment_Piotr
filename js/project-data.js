// Content for every project page (project-detail.html?id=...).
//
// Each project has:
//   title, category, author, date, updated, difficulty, time, price
//   image / alt   - main photo (also used on the projects page tile)
//   helpful       - how many people have already marked it helpful
//   calculator    - what the cost calculator asks for, e.g. { label: "Floor area", unit: "m²", amount: 12 }
//                   "amount" is the size the material prices below are based on
//   materials     - { name, price, scales }. "scales: true" means the cost goes up or down
//                   with the size entered in the calculator. Tools don't scale.
//   steps         - { title, text }
//   questions     - { question, answer }
//   comments      - { name, date, text }

var PROJECTS = {
    "regrout-shower": {
        title: "Re-grout a shower in an afternoon",
        category: "Bathroom",
        author: "TileTidyTom",
        date: "14 Oct 2026",
        updated: "2 Nov 2026",
        difficulty: "Beginner",
        time: "2 Hours",
        price: 90,
        image: "img/shower-regrout.jpg",
        alt: "Re-grouted shower",
        helpful: 48,
        calculator: { label: "Tiled area", unit: "m²", amount: 4 },
        materials: [
            { name: "Grout rake", price: 8, scales: false },
            { name: "Multi-tool grout removal blade", price: 15, scales: false },
            { name: "Grout float and sponge set", price: 10, scales: false },
            { name: "Mould and mildew remover", price: 7, scales: false },
            { name: "Waterproof wall grout (5kg)", price: 16, scales: true },
            { name: "Grout sealer", price: 12, scales: true },
            { name: "Bath silicone and sealant gun", price: 14, scales: false },
            { name: "Gloves and dust mask", price: 8, scales: false }
        ],
        steps: [
            { title: "Clean and inspect", text: "Spray the tiles with mould remover, leave it for 10 minutes and scrub. Look for cracked or loose tiles, as these need fixing before you re-grout." },
            { title: "Rake out the old grout", text: "Use a grout rake or a multi-tool blade to remove the old grout to a depth of about 2–3mm. Work slowly so you don't chip the tile edges." },
            { title: "Clear the dust", text: "Vacuum the joints, then wipe the tiles with a damp cloth. New grout won't stick to dust." },
            { title: "Apply the new grout", text: "Mix the grout to a toothpaste-like consistency. Press it into the joints with the float held at 45°, working diagonally across the tiles." },
            { title: "Wipe and finish", text: "After 10–15 minutes, wipe off the excess with a barely damp sponge. Run a finger or grout tool along each joint for a neat finish." },
            { title: "Seal and wait", text: "Leave the grout to cure for 24 hours before using the shower, then apply grout sealer to help keep mould away." }
        ],
        questions: [
            { question: "Can I just put new grout over the old grout?", answer: "Not really. A thin layer on top will crack and flake off quickly. Rake out at least 2mm so the new grout has something to grip." },
            { question: "How long before I can shower?", answer: "Most wall grouts need 24 hours. Check the bag, as some rapid-set grouts are ready in 3 hours." }
        ],
        comments: [
            { name: "Priya K", date: "3 Nov 2026", text: "Did this last weekend and the shower looks brand new. The multi-tool blade saved me hours." },
            { name: "DIYDan", date: "28 Oct 2026", text: "Top tip: do one wall at a time so the grout doesn't dry before you wipe it." }
        ]
    },

    "raised-planter": {
        title: "Grow your own veg in a raised planter",
        category: "Garden",
        author: "PlotAndPot",
        date: "2 Oct 2026",
        updated: "2 Oct 2026",
        difficulty: "Beginner",
        time: "4 Hours",
        price: 60,
        image: "img/raised-bed.jpeg",
        alt: "Raised vegetable bed",
        helpful: 36,
        calculator: { label: "Planter area", unit: "m²", amount: 1 },
        materials: [
            { name: "Raised planter kit (120 × 80cm)", price: 35, scales: true },
            { name: "Topsoil and compost mix (100L)", price: 14, scales: true },
            { name: "Weed membrane", price: 4, scales: true },
            { name: "Seeds and seedlings", price: 5, scales: false },
            { name: "Gardening gloves", price: 2, scales: false }
        ],
        steps: [
            { title: "Pick a sunny spot", text: "Most vegetables need at least six hours of sun a day. Choose a level spot that's easy to reach with a watering can." },
            { title: "Build the planter", text: "Assemble the kit on a hard surface, then carry it into place. Check it's level before filling." },
            { title: "Line the base", text: "Lay weed membrane across the bottom to stop weeds pushing up while still letting water drain." },
            { title: "Fill and plant", text: "Fill with the soil and compost mix, firm it down gently and water. Plant seedlings at the spacing shown on the packet." }
        ],
        questions: [
            { question: "What's easiest to grow for a beginner?", answer: "Salad leaves, radishes, courgettes and herbs like parsley are very forgiving and quick to harvest." },
            { question: "Do I need to put stones in the bottom for drainage?", answer: "No. A raised planter on soil drains well on its own, and stones just take up space the roots could use." }
        ],
        comments: [
            { name: "GreenFingersGem", date: "20 Oct 2026", text: "Already had two lots of lettuce from mine. My kids love picking it." },
            { name: "Sam W", date: "9 Oct 2026", text: "Worth buying a bigger bag of compost than you think. Mine settled a lot after the first week." }
        ]
    },

    "accent-wall": {
        title: "Choose and paint a bold accent colour",
        category: "Decorating",
        author: "ColourByClaire",
        date: "21 Sep 2026",
        updated: "30 Oct 2026",
        difficulty: "Intermediate",
        time: "1 Day",
        price: 45,
        image: "img/feature-wall.jpg",
        alt: "Painted feature wall",
        helpful: 52,
        calculator: { label: "Wall area", unit: "m²", amount: 10 },
        materials: [
            { name: "Emulsion paint (2.5L)", price: 24, scales: true },
            { name: "Roller and tray set", price: 8, scales: false },
            { name: "Angled cutting-in brush", price: 5, scales: false },
            { name: "Masking tape", price: 3, scales: false },
            { name: "Filler and sandpaper", price: 5, scales: false }
        ],
        steps: [
            { title: "Choose your colour", text: "Buy tester pots and paint large swatches on the wall. Look at them in the morning and evening before deciding." },
            { title: "Prepare the wall", text: "Fill any holes, sand them smooth and wipe the wall down. Tape along the ceiling, skirting and neighbouring walls." },
            { title: "Cut in the edges", text: "Use the angled brush to paint a 5cm strip around the edges of the wall where the roller can't reach." },
            { title: "Roll the first coat", text: "Roll in a W shape, then fill in without lifting the roller. Keep a wet edge so you don't get lines." },
            { title: "Second coat and tidy up", text: "Let it dry for 2–4 hours, apply a second coat, then remove the tape while the paint is still slightly wet for a crisp line." }
        ],
        questions: [
            { question: "Which wall should be the accent wall?", answer: "Usually the one your eye goes to first when you walk in, like behind the bed or the sofa." },
            { question: "Do dark colours need more coats?", answer: "Often yes. Strong colours can need three coats, or a tinted primer underneath to get an even finish." }
        ],
        comments: [
            { name: "Leah M", date: "1 Nov 2026", text: "Went for a deep green behind the bed. It completely changed the room." },
            { name: "PaintPete", date: "25 Oct 2026", text: "Pulling the tape off while it's wet really works. Cleanest line I've ever done." }
        ]
    },

    "alcove-shelves": {
        title: "Fit floating shelves beside a chimney",
        category: "Storage",
        author: "ChiselAndCraft",
        date: "5 Oct 2026",
        updated: "11 Nov 2026",
        difficulty: "Advanced",
        time: "2 Days",
        price: 120,
        image: "img/alcove-shelving.jpg",
        alt: "Shelving fitted in an alcove",
        helpful: 61,
        calculator: { label: "Number of shelves", unit: "shelves", amount: 3 },
        materials: [
            { name: "Oak-effect shelf boards", price: 60, scales: true },
            { name: "Timber battens (2.4m)", price: 14, scales: true },
            { name: "Wall plugs and screws", price: 6, scales: true },
            { name: "Wood glue and filler", price: 7, scales: false },
            { name: "Sandpaper", price: 3, scales: false },
            { name: "Wood stain or varnish", price: 15, scales: false },
            { name: "Stud and cable detector", price: 15, scales: false }
        ],
        steps: [
            { title: "Measure the alcove", text: "Measure the width at the back, middle and front of each shelf height. Alcoves are rarely square, so cut each shelf to its own measurements." },
            { title: "Check for cables and pipes", text: "Run a detector over the wall where the battens will go. Cables often run straight up or down from sockets and switches." },
            { title: "Fix the battens", text: "Screw a batten along the back wall and one down each side, checking they're level. These hold the shelf invisibly." },
            { title: "Build the shelf box", text: "Glue and screw a top board, bottom board and front strip around the battens so the shelf looks solid." },
            { title: "Finish", text: "Fill the screw holes, sand smooth and apply stain or varnish. Give it a day to dry before loading the shelves." }
        ],
        questions: [
            { question: "How much weight will they hold?", answer: "Fixed into brick with three battens, each shelf can comfortably hold books. On plasterboard, use heavy-duty plasterboard fixings and keep loads lighter." },
            { question: "Can I do this on a chimney breast with a fireplace in use?", answer: "Keep shelves well away from the fire opening and never fix into the flue. If in doubt, ask a chimney sweep where the flue runs." }
        ],
        comments: [
            { name: "Marcus J", date: "8 Nov 2026", text: "Took me a whole weekend but they look like they came with the house." },
            { name: "Hannah", date: "15 Oct 2026", text: "Measuring the back and front separately was the key. My alcove was 1cm narrower at the back!" }
        ]
    },

    "laminate-floor": {
        title: "Lay click-fit laminate in a bedroom",
        category: "Flooring",
        author: "FloorFixFiona",
        date: "29 Sep 2026",
        updated: "29 Sep 2026",
        difficulty: "Intermediate",
        time: "1 Day",
        price: 250,
        image: "img/hero-finished-project.jpg",
        alt: "Finished laminate floor",
        helpful: 44,
        calculator: { label: "Floor area", unit: "m²", amount: 12 },
        materials: [
            { name: "Laminate flooring (12m²)", price: 168, scales: true },
            { name: "Underlay (12m²)", price: 36, scales: true },
            { name: "Laminate fitting kit", price: 15, scales: false },
            { name: "Door threshold bar", price: 10, scales: false },
            { name: "Scotia beading", price: 16, scales: true },
            { name: "Expansion spacers", price: 5, scales: false }
        ],
        steps: [
            { title: "Let the boards settle", text: "Leave the unopened packs in the room for 48 hours so they adjust to the temperature and humidity." },
            { title: "Prepare the floor", text: "Remove the old carpet and grippers, then sweep. Check the floor is flat and screw down any squeaky boards." },
            { title: "Lay the underlay", text: "Roll the underlay out in the direction you'll lay the boards and tape the joins together." },
            { title: "Lay the first row", text: "Start along the longest straight wall with spacers to leave a 10mm expansion gap. Cut the last board to fit." },
            { title: "Carry on row by row", text: "Use the offcut from each row to start the next, so the joins are staggered. Click each board in and tap it tight with the fitting block." },
            { title: "Finish the edges", text: "Remove the spacers, fit scotia beading around the skirting to hide the gap and add a threshold bar at the door." }
        ],
        questions: [
            { question: "Do I need to take the skirting boards off?", answer: "No. Scotia beading covers the expansion gap. Removing skirting gives a neater finish but is a lot more work." },
            { question: "Which way should the boards run?", answer: "Usually towards the main window, so light runs along the boards and hides the joins." }
        ],
        comments: [
            { name: "Olly B", date: "10 Oct 2026", text: "Way easier than I expected. The fitting kit is a must." },
            { name: "Jess T", date: "4 Oct 2026", text: "Don't skip the 48 hours! My first floor buckled because I rushed it." }
        ]
    },

    "reseal-bath": {
        title: "Reseal a bath with fresh silicone",
        category: "Bathroom",
        author: "TileTidyTom",
        date: "18 Oct 2026",
        updated: "18 Oct 2026",
        difficulty: "Beginner",
        time: "1 Hour",
        price: 15,
        image: "img/shower-regrout.jpg",
        alt: "Bathroom with sealed bath edge",
        helpful: 39,
        calculator: { label: "Length of bath edge", unit: "m", amount: 3 },
        materials: [
            { name: "Anti-mould bath silicone", price: 6, scales: true },
            { name: "Silicone remover", price: 3, scales: false },
            { name: "Sealant gun", price: 4, scales: false },
            { name: "Masking tape", price: 2, scales: false }
        ],
        steps: [
            { title: "Remove the old silicone", text: "Cut along both edges of the old bead with a sharp blade and peel it away. Use silicone remover to get rid of the last traces." },
            { title: "Fill the bath", text: "Fill the bath with water before sealing. The bath sinks slightly when it's full, so the new seal won't split later." },
            { title: "Tape and apply", text: "Put masking tape a few millimetres either side of the gap, then run a steady bead of silicone along it." },
            { title: "Smooth and peel", text: "Smooth the bead with a wet finger, peel off the tape straight away, and leave it to cure for 24 hours before draining the bath." }
        ],
        questions: [
            { question: "Can I put new silicone over the old?", answer: "No, it won't stick properly and mould will grow underneath. Always remove the old bead completely." },
            { question: "Why does my silicone keep going black?", answer: "That's mould. Use an anti-mould silicone and keep the room well ventilated after baths and showers." }
        ],
        comments: [
            { name: "Ella R", date: "22 Oct 2026", text: "The filling-the-bath trick is genius. My last seal split within a month." },
            { name: "Kev", date: "19 Oct 2026", text: "Masking tape made it look professional. Thanks!" }
        ]
    },

    "raised-bed-weekend": {
        title: "Build a raised bed in a weekend",
        category: "Garden",
        author: "PlotAndPot",
        date: "8 Sep 2026",
        updated: "15 Oct 2026",
        difficulty: "Beginner",
        time: "2 Days",
        price: 90,
        image: "img/raised-bed.jpeg",
        alt: "Wooden raised garden bed",
        helpful: 57,
        calculator: { label: "Bed area", unit: "m²", amount: 2 },
        materials: [
            { name: "Treated timber sleepers (×4)", price: 56, scales: true },
            { name: "Corner posts and screws", price: 8, scales: false },
            { name: "Lining membrane", price: 6, scales: true },
            { name: "Topsoil and compost", price: 20, scales: true }
        ],
        steps: [
            { title: "Mark out the bed", text: "Use pegs and string to mark the shape. Keep it no wider than 1.2m so you can reach the middle from either side." },
            { title: "Clear the ground", text: "Dig out turf and weeds inside the marked area and level the ground roughly." },
            { title: "Build the frame", text: "Screw the sleepers to the corner posts, checking each side is level as you go." },
            { title: "Line the sides", text: "Staple membrane to the inside of the sleepers to help the timber last longer." },
            { title: "Fill it up", text: "Fill with a mix of topsoil and compost, water well and leave it to settle for a few days before planting." }
        ],
        questions: [
            { question: "Is treated timber safe for growing food?", answer: "Modern treated timber is considered safe, and lining the inside with membrane stops the soil touching the wood." },
            { question: "How deep should it be?", answer: "30cm is plenty for most vegetables. Go deeper if you want to grow carrots or parsnips." }
        ],
        comments: [
            { name: "Nina", date: "12 Oct 2026", text: "Built two of these. Saturday for the frames, Sunday for filling. Perfect weekend job." },
            { name: "GrowWithGraham", date: "20 Sep 2026", text: "Get the soil delivered in a bulk bag. Much cheaper than lots of small bags." }
        ]
    },

    "kitchen-tap": {
        title: "Replace a leaky kitchen tap",
        category: "Kitchen",
        author: "PipeUpPaul",
        date: "11 Oct 2026",
        updated: "11 Oct 2026",
        difficulty: "Intermediate",
        time: "90 Mins",
        price: 70,
        image: "img/hero-finished-project.jpg",
        alt: "New kitchen mixer tap",
        helpful: 33,
        calculator: { label: "Number of taps", unit: "taps", amount: 1 },
        materials: [
            { name: "Kitchen mixer tap", price: 50, scales: true },
            { name: "Flexible tap connectors (pair)", price: 8, scales: true },
            { name: "Basin wrench", price: 8, scales: false },
            { name: "PTFE tape", price: 2, scales: false },
            { name: "Silicone grease", price: 2, scales: false }
        ],
        steps: [
            { title: "Turn off the water", text: "Close the isolation valves under the sink, or the main stopcock if there aren't any. Open the tap to drain what's left." },
            { title: "Disconnect the old tap", text: "Put a towel and bowl under the pipes, then undo the connectors with the basin wrench." },
            { title: "Remove the old tap", text: "Undo the back nut holding the tap to the sink and lift it out. Clean the area around the hole." },
            { title: "Fit the new tap", text: "Screw the flexible connectors into the new tap, feed them through the hole and tighten the fixing nut from underneath." },
            { title: "Reconnect and test", text: "Wrap PTFE tape around the threads, connect to the pipes and turn the water back on slowly. Check every joint for drips." }
        ],
        questions: [
            { question: "Will any tap fit my sink?", answer: "Most kitchen taps fit a standard 35mm hole. Measure yours, and check whether you have one hole or two." },
            { question: "I don't have isolation valves. Should I fit some?", answer: "Yes. They're cheap and mean you can turn off the water at the sink next time instead of the whole house." }
        ],
        comments: [
            { name: "Aisha", date: "16 Oct 2026", text: "Basin wrench is a must. I couldn't reach the nuts with a normal spanner." },
            { name: "Rob H", date: "13 Oct 2026", text: "Done in an hour and no more dripping. Cheers!" }
        ]
    },

    "floating-shelf": {
        title: "Put up a single floating shelf",
        category: "Storage",
        author: "ChiselAndCraft",
        date: "24 Oct 2026",
        updated: "24 Oct 2026",
        difficulty: "Intermediate",
        time: "1 Hour",
        price: 25,
        image: "img/alcove-shelving.jpg",
        alt: "Single floating shelf on a wall",
        helpful: 29,
        calculator: { label: "Number of shelves", unit: "shelves", amount: 1 },
        materials: [
            { name: "Floating shelf with hidden bracket", price: 18, scales: true },
            { name: "Heavy-duty wall plugs and screws", price: 4, scales: true },
            { name: "Torpedo spirit level", price: 3, scales: false }
        ],
        steps: [
            { title: "Find the right spot", text: "Hold the shelf up and mark where you want it. Check for cables and pipes before drilling." },
            { title: "Mark the bracket holes", text: "Hold the bracket against the wall with the spirit level on top and mark through the holes." },
            { title: "Drill and fix", text: "Drill the holes, push in the wall plugs and screw the bracket on tightly." },
            { title: "Slide on the shelf", text: "Push the shelf onto the bracket rods until it's tight against the wall, then fix it with the small screws underneath." }
        ],
        questions: [
            { question: "Can I put a floating shelf on plasterboard?", answer: "Yes, but use proper plasterboard fixings or screw into a stud, and keep the weight light." },
            { question: "My shelf droops at the front. Why?", answer: "Usually the bracket isn't fully tight, or the plugs are too small for the wall. Re-fix it with heavy-duty plugs." }
        ],
        comments: [
            { name: "Zara", date: "30 Oct 2026", text: "Quick and satisfying job. Now I want to put them everywhere." },
            { name: "Lewis", date: "26 Oct 2026", text: "Check the level twice. I was 3mm out and it bugged me forever." }
        ]
    },

    "dimmer-switch": {
        title: "Swap a light switch for a dimmer",
        category: "Electrics",
        author: "SparkySophie",
        date: "6 Nov 2026",
        updated: "6 Nov 2026",
        difficulty: "Advanced",
        time: "1 Hour",
        price: 35,
        image: "img/feature-wall.jpg",
        alt: "Dimmer switch on a painted wall",
        helpful: 22,
        calculator: { label: "Number of switches", unit: "switches", amount: 1 },
        materials: [
            { name: "LED-compatible dimmer switch", price: 20, scales: true },
            { name: "Voltage tester", price: 10, scales: false },
            { name: "Insulated screwdriver", price: 5, scales: false }
        ],
        steps: [
            { title: "Turn off the power", text: "Switch off the lighting circuit at the consumer unit (fuse box) and put a note on it so nobody turns it back on." },
            { title: "Check it's dead", text: "Unscrew the old switch and use a voltage tester on every wire before touching anything." },
            { title: "Note the wiring", text: "Take a photo of how the wires are connected to the old switch before you remove them." },
            { title: "Wire the dimmer", text: "Connect the wires to the same terminals on the dimmer, following the instructions in the box, and connect the earth wire to the back box." },
            { title: "Fix and test", text: "Screw the dimmer to the back box, turn the power back on and test it at different brightness levels." }
        ],
        questions: [
            { question: "Do I need an electrician for this?", answer: "Swapping a switch like-for-like isn't notifiable work in England, but if you're unsure about any wiring, stop and call a qualified electrician." },
            { question: "Why do my lights flicker on the dimmer?", answer: "Your bulbs may not be dimmable, or the dimmer isn't LED-compatible. Check both say they work together." }
        ],
        comments: [
            { name: "Chris P", date: "10 Nov 2026", text: "Make sure the bulbs are dimmable! Learned that one the hard way." },
            { name: "Mo", date: "8 Nov 2026", text: "Taking a photo of the wiring first saved me. Clear guide, thanks." }
        ]
    },

    "paint-cupboards": {
        title: "Paint tired kitchen cupboard doors",
        category: "Decorating",
        author: "ColourByClaire",
        date: "16 Oct 2026",
        updated: "4 Nov 2026",
        difficulty: "Beginner",
        time: "5 Hours",
        price: 40,
        image: "img/feature-wall.jpg",
        alt: "Freshly painted kitchen cupboards",
        helpful: 41,
        calculator: { label: "Number of cupboard doors", unit: "doors", amount: 8 },
        materials: [
            { name: "Cupboard paint (750ml)", price: 20, scales: true },
            { name: "Multi-surface primer", price: 8, scales: true },
            { name: "Degreaser", price: 4, scales: false },
            { name: "Mini roller and brush", price: 6, scales: false },
            { name: "Sandpaper", price: 2, scales: false }
        ],
        steps: [
            { title: "Take the doors off", text: "Unscrew the doors and handles and label each one so you know where it goes back." },
            { title: "Clean and sand", text: "Wipe every door with degreaser, then lightly sand so the primer has something to grip." },
            { title: "Prime", text: "Apply a thin coat of primer and let it dry fully." },
            { title: "Paint", text: "Use the brush for the edges and details, then the mini roller for flat areas. Apply two thin coats rather than one thick one." },
            { title: "Refit", text: "Leave the paint to harden overnight, then refit the doors with the original or new handles." }
        ],
        questions: [
            { question: "Can I paint glossy or vinyl-wrapped doors?", answer: "Yes, but sanding and a good primer are essential, or the paint will peel." },
            { question: "How long until I can use the kitchen normally?", answer: "It's touch-dry in a few hours, but most cupboard paints take about a week to fully harden, so be gentle at first." }
        ],
        comments: [
            { name: "Becky", date: "1 Nov 2026", text: "Saved us thousands compared to a new kitchen. Looks amazing in sage green." },
            { name: "Tariq", date: "20 Oct 2026", text: "Labelling the doors is a lifesaver. I'd never have remembered where they went." }
        ]
    },

    "herb-garden": {
        title: "Plant a patio herb garden in pots",
        category: "Garden",
        author: "GrowWithGraham",
        date: "3 Nov 2026",
        updated: "3 Nov 2026",
        difficulty: "Beginner",
        time: "3 Hours",
        price: 30,
        image: "img/raised-bed.jpeg",
        alt: "Herbs growing in pots",
        helpful: 18,
        calculator: { label: "Number of pots", unit: "pots", amount: 5 },
        materials: [
            { name: "Terracotta pots", price: 15, scales: true },
            { name: "Herb plants", price: 10, scales: true },
            { name: "Peat-free compost", price: 5, scales: true }
        ],
        steps: [
            { title: "Choose your herbs", text: "Pick herbs you'll actually cook with. Basil, parsley, mint, chives and thyme are good starters." },
            { title: "Prepare the pots", text: "Make sure each pot has a drainage hole, then fill it with compost to about 3cm below the rim." },
            { title: "Plant", text: "Gently loosen the roots, plant each herb at the same depth it was in its old pot, and firm the compost around it." },
            { title: "Water and place", text: "Water well and put the pots in a sunny spot near the kitchen door so they're easy to grab." }
        ],
        questions: [
            { question: "Why does mint need its own pot?", answer: "Mint spreads very quickly and will take over any pot it shares with other herbs." },
            { question: "How often should I water?", answer: "Check the compost every couple of days. Water when the top centimetre feels dry." }
        ],
        comments: [
            { name: "Sophie L", date: "10 Nov 2026", text: "Lovely little project to do with the kids." },
            { name: "Ade", date: "5 Nov 2026", text: "Supermarket herb pots work too, just split them up into a few pots so they don't overcrowd." }
        ]
    },

    "tile-splashback": {
        title: "Tile a splashback behind the sink",
        category: "Bathroom",
        author: "TileTidyTom",
        date: "27 Oct 2026",
        updated: "9 Nov 2026",
        difficulty: "Intermediate",
        time: "4 Hours",
        price: 110,
        image: "img/shower-regrout.jpg",
        alt: "Tiled bathroom splashback",
        helpful: 26,
        calculator: { label: "Splashback area", unit: "m²", amount: 1 },
        materials: [
            { name: "Wall tiles (1m²)", price: 45, scales: true },
            { name: "Tile adhesive", price: 12, scales: true },
            { name: "Wall grout", price: 8, scales: true },
            { name: "Notched trowel", price: 6, scales: false },
            { name: "Manual tile cutter", price: 25, scales: false },
            { name: "Tile spacers and trim", price: 8, scales: true },
            { name: "Bathroom silicone", price: 6, scales: false }
        ],
        steps: [
            { title: "Plan the layout", text: "Lay the tiles out on the floor first so you know where the cuts will be. Aim for equal cuts at each end." },
            { title: "Fix a guide batten", text: "Screw a straight batten one tile height above the sink. It gives you a perfectly level line to start from." },
            { title: "Spread adhesive and tile", text: "Spread adhesive with the notched trowel and press the tiles in with spacers between them. Work in small areas." },
            { title: "Cut and finish edges", text: "Cut the edge tiles with the tile cutter and finish the sides with tile trim." },
            { title: "Grout and seal", text: "After 24 hours, remove the spacers and grout. Seal the gap between the sink and tiles with silicone." }
        ],
        questions: [
            { question: "Can I tile straight onto painted plaster?", answer: "Yes, if the paint is sound. Lightly sand it and apply a tile primer first." },
            { question: "Should the first row sit on the sink?", answer: "No. Start from a level batten above it, so a sloped sink doesn't make every row wonky." }
        ],
        comments: [
            { name: "Ruth", date: "5 Nov 2026", text: "The batten trick made such a difference. Everything lined up perfectly." },
            { name: "Jay", date: "30 Oct 2026", text: "Borrowed a tile cutter from a neighbour to save money. Worked fine." }
        ]
    },

    "stepping-stones": {
        title: "Lay a stepping stone path across the lawn",
        category: "Garden",
        author: "GrowWithGraham",
        date: "12 Sep 2026",
        updated: "12 Sep 2026",
        difficulty: "Intermediate",
        time: "4 Hours",
        price: 150,
        image: "img/raised-bed.jpeg",
        alt: "Stepping stones across a lawn",
        helpful: 31,
        calculator: { label: "Number of stones", unit: "stones", amount: 8 },
        materials: [
            { name: "Stepping stones", price: 100, scales: true },
            { name: "Sharp sand", price: 28, scales: true },
            { name: "Rubber mallet", price: 8, scales: false },
            { name: "Spirit level", price: 10, scales: false },
            { name: "String line and pegs", price: 4, scales: false }
        ],
        steps: [
            { title: "Plan the route", text: "Walk the route normally and mark where your feet land. Space the stones to match your natural stride." },
            { title: "Cut the turf", text: "Place each stone on the grass and cut around it with a spade. Lift the turf out." },
            { title: "Dig and add sand", text: "Dig each hole about 3cm deeper than the stone and add a layer of sharp sand." },
            { title: "Set the stones", text: "Place each stone on the sand and tap it down with the mallet until it's level and just below the grass, so you can mow over it." }
        ],
        questions: [
            { question: "Why set the stones below the grass?", answer: "So the lawnmower passes straight over them and nobody trips on a raised edge." },
            { question: "Do I need concrete?", answer: "Not for a garden path. Sharp sand is enough for stones you only walk on." }
        ],
        comments: [
            { name: "Fran", date: "1 Oct 2026", text: "Spacing them to my stride was a great tip. Feels really natural to walk on." },
            { name: "Big Mike", date: "18 Sep 2026", text: "The mallet is essential. Got them all perfectly level." }
        ]
    },

    "box-pipework": {
        title: "Box in exposed pipework",
        category: "Bathroom",
        author: "PipeUpPaul",
        date: "19 Oct 2026",
        updated: "7 Nov 2026",
        difficulty: "Advanced",
        time: "5 Hours",
        price: 85,
        image: "img/shower-regrout.jpg",
        alt: "Boxed-in bathroom pipework",
        helpful: 24,
        calculator: { label: "Length of pipework", unit: "m", amount: 2 },
        materials: [
            { name: "Timber battens", price: 12, scales: true },
            { name: "Moisture-resistant MDF", price: 30, scales: true },
            { name: "Screws and wall plugs", price: 5, scales: false },
            { name: "Removable access panel", price: 12, scales: false },
            { name: "Primer and paint", price: 16, scales: true },
            { name: "Decorator's caulk", price: 4, scales: false },
            { name: "Jigsaw blade", price: 6, scales: false }
        ],
        steps: [
            { title: "Measure around the pipes", text: "Measure how far the pipes stick out from the wall and add 1cm so the boxing doesn't touch them." },
            { title: "Fix the battens", text: "Screw battens to the wall and floor along both sides of the pipes to make a frame." },
            { title: "Cut and fit the panels", text: "Cut the MDF to size and screw it to the battens. Leave an opening near any valves." },
            { title: "Add an access panel", text: "Fit a removable panel over the valves and joints so you can reach them later without breaking the boxing." },
            { title: "Finish", text: "Caulk the edges, prime the MDF and paint it to match the room." }
        ],
        questions: [
            { question: "Why do I need an access panel?", answer: "Valves and joints may need maintenance. Without a panel you'd have to rip the boxing out to reach them." },
            { question: "Can I use normal MDF in a bathroom?", answer: "Use moisture-resistant MDF. Normal MDF swells up when it gets damp." }
        ],
        comments: [
            { name: "Dee", date: "2 Nov 2026", text: "My bathroom looks so much tidier. The access panel is a smart idea." },
            { name: "Harry", date: "24 Oct 2026", text: "Tip: paint the MDF edges too, they soak up moisture otherwise." }
        ]
    },

    "kitchen-worktop": {
        title: "Cut and fit a new kitchen worktop",
        category: "Kitchen",
        author: "ChiselAndCraft",
        date: "1 Oct 2026",
        updated: "20 Oct 2026",
        difficulty: "Advanced",
        time: "6 Hours",
        price: 300,
        image: "img/hero-finished-project.jpg",
        alt: "New wooden kitchen worktop",
        helpful: 35,
        calculator: { label: "Worktop length", unit: "m", amount: 3 },
        materials: [
            { name: "Solid oak worktop (3m)", price: 210, scales: true },
            { name: "Worktop oil", price: 18, scales: false },
            { name: "Fine-cut circular saw blade", price: 20, scales: false },
            { name: "Clamps", price: 20, scales: false },
            { name: "Fixing brackets and screws", price: 8, scales: false },
            { name: "Kitchen silicone", price: 6, scales: false },
            { name: "Worktop jointing strip", price: 18, scales: true }
        ],
        steps: [
            { title: "Remove the old worktop", text: "Disconnect the sink and hob if needed, undo the fixings from underneath and lift the old worktop off." },
            { title: "Measure and mark", text: "Measure the cabinets and walls carefully, as walls are rarely straight. Mark the cut on the worktop with masking tape." },
            { title: "Cut to size", text: "Clamp the worktop and a straight guide, then cut with a fine-tooth blade, finished side down for a circular saw." },
            { title: "Oil all sides", text: "Oil the worktop on every side, including underneath and cut ends, so it doesn't warp." },
            { title: "Fix in place", text: "Screw it to the cabinets from underneath using slotted brackets that let the wood move, then seal along the wall with silicone." }
        ],
        questions: [
            { question: "Can I cut the sink hole myself?", answer: "Yes, with a jigsaw and the template that comes with the sink. Drill a hole in each corner to start the cut." },
            { question: "How often should I oil an oak worktop?", answer: "Every few days for the first couple of weeks, then every few months, or whenever water stops beading on the surface." }
        ],
        comments: [
            { name: "Imran", date: "15 Oct 2026", text: "Oiling the underside was something I'd never have thought of. Great guide." },
            { name: "Kate", date: "6 Oct 2026", text: "Hardest part was carrying it in. It's heavy! Get a friend to help." }
        ]
    },

    "fitted-wardrobe": {
        title: "Build a fitted wardrobe into an alcove",
        category: "Storage",
        author: "ChiselAndCraft",
        date: "22 Aug 2026",
        updated: "14 Nov 2026",
        difficulty: "Intermediate",
        time: "2 Days",
        price: 480,
        image: "img/alcove-shelving.jpg",
        alt: "Built-in wardrobe in an alcove",
        helpful: 67,
        calculator: { label: "Alcove width", unit: "m", amount: 1.2 },
        materials: [
            { name: "MDF sheets", price: 150, scales: true },
            { name: "Pair of wardrobe doors", price: 160, scales: true },
            { name: "Hinges and handles", price: 35, scales: false },
            { name: "Clothes rail and shelf", price: 25, scales: true },
            { name: "Timber battens and fixings", price: 30, scales: true },
            { name: "Primer and paint", price: 50, scales: false },
            { name: "Caulk and filler", price: 10, scales: false },
            { name: "Clamps", price: 20, scales: false }
        ],
        steps: [
            { title: "Measure and plan", text: "Measure the alcove at the top, middle and bottom. Sketch where the rail, shelves and doors will go." },
            { title: "Fix the frame", text: "Screw battens to the walls, floor and ceiling to form a frame the panels can attach to." },
            { title: "Fit the panels", text: "Cut the MDF to size and fix the top panel and front frame to the battens." },
            { title: "Add the inside", text: "Fit a shelf at the top and the clothes rail underneath, about 5cm below the shelf." },
            { title: "Hang the doors", text: "Fit the hinges, hang the doors and adjust until the gaps are even." },
            { title: "Finish", text: "Fill and caulk every joint, prime and paint, then add the handles." }
        ],
        questions: [
            { question: "How deep does a wardrobe need to be?", answer: "At least 60cm so hangers fit without catching on the doors." },
            { question: "Can I use sliding doors instead?", answer: "Yes. Sliding doors are great if there isn't much space in front of the alcove, but the track needs a perfectly level top." }
        ],
        comments: [
            { name: "Laura P", date: "12 Nov 2026", text: "Massive project but so worth it. Fraction of the price of a fitted one." },
            { name: "Dev", date: "2 Sep 2026", text: "Caulking the joints makes it look built-in rather than added on." }
        ]
    },

    "retile-bathroom-floor": {
        title: "Retile a bathroom floor",
        category: "Flooring",
        author: "TileTidyTom",
        date: "30 Sep 2026",
        updated: "16 Oct 2026",
        difficulty: "Advanced",
        time: "2 Days",
        price: 380,
        image: "img/shower-regrout.jpg",
        alt: "Newly tiled bathroom floor",
        helpful: 30,
        calculator: { label: "Floor area", unit: "m²", amount: 5 },
        materials: [
            { name: "Floor tiles (5m²)", price: 175, scales: true },
            { name: "Flexible floor tile adhesive", price: 40, scales: true },
            { name: "Floor grout", price: 18, scales: true },
            { name: "Tile backer board", price: 60, scales: true },
            { name: "Self-levelling compound", price: 25, scales: true },
            { name: "Wet tile cutter hire", price: 35, scales: false },
            { name: "Trowel and spacers", price: 12, scales: false },
            { name: "Knee pads", price: 15, scales: false }
        ],
        steps: [
            { title: "Strip the old floor", text: "Remove the old flooring, and the toilet if needed. Turn off the water and cap the pipe first." },
            { title: "Prepare the base", text: "Screw down tile backer board over timber floors, and use self-levelling compound to fill any dips." },
            { title: "Set out from the centre", text: "Find the middle of the room and dry-lay a row of tiles each way so the cuts at the edges are even." },
            { title: "Lay the tiles", text: "Spread adhesive in small areas and lay tiles with spacers, checking each one is level with its neighbours." },
            { title: "Cut the edges", text: "Use the wet cutter for edge tiles and around the toilet and pipes." },
            { title: "Grout", text: "After 24 hours, remove the spacers, grout the joints and refit the toilet." }
        ],
        questions: [
            { question: "Can I tile straight onto floorboards?", answer: "No. Floorboards flex and will crack the tiles. Cover them with backer board or exterior-grade plywood first." },
            { question: "Where should I start tiling?", answer: "Start at the point furthest from the door, so you don't tile yourself into a corner." }
        ],
        comments: [
            { name: "Georgia", date: "14 Oct 2026", text: "Hiring a wet cutter made the edge cuts so much easier." },
            { name: "Tom R", date: "5 Oct 2026", text: "Knee pads. Trust me, buy the knee pads." }
        ]
    },

    "garden-deck": {
        title: "Build a timber deck for the garden",
        category: "Garden",
        author: "DeckedOutDave",
        date: "15 Aug 2026",
        updated: "10 Nov 2026",
        difficulty: "Advanced",
        time: "2 Days",
        price: 650,
        image: "img/raised-bed.jpeg",
        alt: "Timber garden deck",
        helpful: 73,
        calculator: { label: "Deck area", unit: "m²", amount: 9 },
        materials: [
            { name: "Decking boards", price: 300, scales: true },
            { name: "Joists and bearers", price: 150, scales: true },
            { name: "Adjustable deck pedestals", price: 60, scales: true },
            { name: "Weed membrane", price: 10, scales: true },
            { name: "Gravel", price: 15, scales: true },
            { name: "Deck screws", price: 35, scales: true },
            { name: "Decking oil", price: 40, scales: true },
            { name: "Mitre saw hire", price: 40, scales: false }
        ],
        steps: [
            { title: "Plan and mark out", text: "Decide on the size and mark it out with pegs and string. Check whether you need planning permission if the deck is more than 30cm off the ground." },
            { title: "Prepare the ground", text: "Remove turf, level the ground, then lay weed membrane with a layer of gravel on top." },
            { title: "Build the frame", text: "Set the pedestals, lay the bearers on top and fix joists across them every 40cm. Check it's level in every direction." },
            { title: "Lay the boards", text: "Screw the boards across the joists, leaving a 5mm gap between each one for drainage." },
            { title: "Finish and protect", text: "Trim the board ends straight, sand any rough edges and apply decking oil." }
        ],
        questions: [
            { question: "Do I need planning permission?", answer: "Usually not, as long as the deck is under 30cm high and covers less than half the garden. Check with your council if you're unsure." },
            { question: "Should the deck slope?", answer: "A very slight slope away from the house, about 1cm per metre, helps rain run off." }
        ],
        comments: [
            { name: "Paula", date: "8 Nov 2026", text: "Our new favourite place in summer. Pedestals made levelling on a bumpy lawn easy." },
            { name: "Ricky", date: "29 Aug 2026", text: "Pre-drill near the board ends or they'll split. Learned that on board one!" }
        ]
    }
};
