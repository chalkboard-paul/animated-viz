/* League place after each of the 38 matchweeks, 2025/26.
   pos/pts/gd arrays are matchweek 1 at index 0. */
const TABLES = {"Brighton":{"pos":[8,18,11,13,14,10,12,10,13,10,11,6,5,7,8,10,9,13,14,10,11,12,12,13,14,14,14,11,14,12,10,9,9,6,8,7,7,8],"gd":[0,-2,-1,-2,-2,0,0,1,-1,2,2,3,5,4,4,2,2,1,1,3,3,3,2,2,1,0,2,3,2,3,4,6,6,9,7,10,9,6],"pts":[1,1,4,4,5,8,9,12,12,15,16,19,22,22,23,23,24,24,25,28,29,30,30,31,31,31,34,37,37,40,43,46,47,50,50,53,53,53]},"Crystal Palace":{"pos":[12,14,8,9,5,3,6,8,10,9,10,5,9,5,4,5,8,9,10,14,13,13,15,15,13,13,13,14,13,14,14,14,13,13,15,15,15,15],"gd":[0,0,3,3,4,5,4,4,3,5,5,7,6,7,8,5,2,1,1,-1,-1,-2,-4,-4,-3,-4,-3,-4,-2,-2,-5,-4,-4,-6,-9,-9,-9,-10],"pts":[1,2,5,6,9,12,12,13,13,16,17,20,20,23,26,26,26,26,27,27,28,28,28,29,32,32,35,35,38,39,39,42,43,43,43,44,45,45]},"Aston Villa":{"pos":[10,17,19,19,18,16,13,11,8,11,6,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,4,4],"gd":[0,-1,-4,-4,-4,-2,-1,0,1,-1,3,4,5,6,7,8,9,10,7,9,9,8,10,9,9,10,10,8,5,3,5,5,6,5,4,4,6,7],"pts":[1,1,1,2,3,6,9,12,15,15,18,21,24,27,30,33,36,39,39,42,43,43,46,46,47,50,51,51,51,51,54,55,58,58,58,59,62,65]},"Sunderland":{"pos":[2,7,6,7,7,5,9,7,4,4,4,7,6,6,9,8,6,7,7,8,10,9,11,8,9,11,12,12,11,13,11,10,11,12,12,12,10,7],"gd":[3,1,2,2,2,3,1,3,4,4,4,3,4,4,1,2,2,2,2,2,-1,0,-2,1,-2,-3,-5,-5,-4,-5,-4,-3,-4,-9,-9,-9,-7,-6],"pts":[3,3,6,7,8,11,11,14,17,18,19,19,22,23,23,26,27,28,29,30,30,33,33,36,36,36,36,37,40,40,43,46,46,46,47,48,51,54]},"Arsenal":{"pos":[6,1,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1],"gd":[1,6,5,8,8,9,11,12,13,15,15,18,18,20,19,20,21,22,25,26,26,26,25,29,32,32,35,36,37,39,39,38,37,38,41,42,43,44],"pts":[3,6,6,9,10,13,16,19,22,25,26,29,30,33,33,36,39,42,45,48,49,50,50,53,56,57,60,63,66,69,70,70,70,73,76,79,82,85]},"Liverpool":{"pos":[4,3,1,1,1,1,2,4,7,3,8,12,8,9,10,7,5,4,4,4,4,4,6,6,6,6,6,5,6,5,5,5,5,4,4,4,5,5],"gd":[2,3,4,5,6,5,4,3,2,4,1,-2,0,0,0,2,3,4,4,4,4,4,3,6,5,6,7,10,9,9,8,10,11,13,12,12,10,10],"pts":[3,6,9,12,15,15,15,15,15,18,18,18,21,22,23,26,29,32,33,34,35,36,36,39,39,42,45,48,48,49,49,52,55,58,58,59,59,60]},"Leeds United":{"pos":[7,12,12,16,12,12,15,16,15,16,16,18,18,17,16,17,16,16,16,16,16,16,16,16,16,15,15,15,15,15,15,15,15,15,14,14,14,14],"gd":[1,-4,-4,-5,-3,-3,-4,-6,-5,-8,-10,-11,-12,-10,-10,-10,-7,-7,-7,-7,-8,-7,-7,-11,-9,-9,-9,-10,-11,-11,-11,-10,-7,-7,-5,-5,-4,-7],"pts":[3,3,4,4,7,8,8,8,11,11,11,11,11,14,15,16,19,20,21,22,22,25,26,26,29,30,31,31,31,32,33,36,39,40,43,44,47,47]},"Newcastle":{"pos":[13,15,17,10,13,15,11,14,12,13,14,14,13,12,12,12,11,14,13,9,6,8,9,11,12,10,11,13,12,9,12,13,14,14,13,13,11,12],"gd":[0,-1,-1,0,0,-1,1,0,1,-1,-3,-2,1,1,2,1,1,0,2,4,5,5,3,0,-1,0,-1,-2,-1,0,-1,-2,-3,-4,-2,-2,0,-2],"pts":[1,1,2,5,6,6,9,9,12,12,12,15,18,19,22,22,23,23,26,29,32,33,33,33,33,36,36,36,39,42,42,42,42,42,45,46,49,49]},"Brentford":{"pos":[17,10,15,12,17,13,16,13,11,12,12,13,10,13,14,15,12,8,9,7,5,7,8,7,7,7,7,7,7,7,7,7,7,9,7,8,9,9],"gd":[-2,-1,-2,-2,-4,-2,-3,-1,0,-2,0,-1,1,-1,-3,-3,-1,2,2,4,7,5,3,4,5,5,3,4,4,4,4,4,4,3,6,3,3,3],"pts":[0,3,3,4,4,7,7,10,13,13,16,16,19,19,19,20,23,26,27,30,33,33,33,36,39,40,40,43,44,45,46,47,48,48,51,51,52,53]},"West Ham":{"pos":[19,20,16,18,19,19,19,19,19,18,18,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,17,17,17,18,18,18,18],"gd":[-3,-7,-4,-7,-8,-8,-10,-12,-13,-11,-10,-10,-12,-12,-12,-13,-16,-17,-17,-20,-21,-20,-18,-19,-17,-17,-17,-20,-19,-19,-21,-17,-17,-16,-19,-20,-22,-19],"pts":[0,0,3,3,3,4,4,4,4,7,10,11,11,12,13,13,13,13,14,14,14,17,20,20,23,24,25,25,28,29,29,32,33,36,36,36,36,39]},"Fulham":{"pos":[9,13,18,11,8,11,14,15,17,15,15,15,15,15,15,14,13,10,11,11,9,11,7,9,10,12,10,9,10,11,9,12,12,10,11,11,13,11],"gd":[0,0,-2,-1,1,-1,-3,-4,-5,-2,-4,-3,-2,-3,-4,-3,-2,-1,-1,-1,0,-1,0,-1,-2,-5,-3,-2,-3,-3,-1,-3,-3,-2,-5,-6,-6,-4],"pts":[1,2,2,5,8,8,8,8,8,11,11,14,17,17,17,20,23,26,27,28,31,31,34,34,34,34,37,40,40,41,44,44,45,48,48,48,49,52]},"Burnley":{"pos":[18,11,14,17,16,18,18,17,16,17,17,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19],"gd":[-3,-1,-2,-3,-3,-7,-8,-6,-5,-7,-8,-10,-12,-13,-14,-15,-15,-15,-17,-19,-19,-19,-19,-22,-24,-23,-23,-24,-26,-26,-28,-30,-33,-34,-36,-36,-37,-37],"pts":[0,3,3,3,4,4,4,7,10,10,10,10,10,10,10,10,11,12,12,12,13,14,15,15,15,18,19,19,19,20,20,20,20,20,20,21,21,22]},"Tottenham":{"pos":[3,2,4,3,3,4,3,6,3,6,5,9,12,11,11,11,14,11,12,13,14,14,14,14,15,16,16,16,16,16,17,18,18,18,17,17,17,17],"gd":[3,5,4,7,7,7,8,7,10,9,9,6,5,5,7,4,3,4,4,4,3,2,2,2,0,-1,-4,-5,-7,-7,-10,-11,-11,-10,-9,-9,-10,-9],"pts":[3,6,6,9,10,11,14,14,17,17,18,18,18,19,22,22,22,25,26,27,27,27,28,29,29,29,29,29,29,30,30,30,31,34,37,38,38,41]},"Chelsea":{"pos":[11,4,2,5,6,8,7,5,9,7,3,2,3,4,5,4,4,5,5,5,8,6,5,5,5,5,5,6,5,6,6,6,6,8,9,9,8,10],"gd":[0,4,6,6,5,3,4,7,6,7,10,12,12,10,10,12,12,11,11,11,10,12,14,15,17,17,17,16,19,18,15,12,11,8,6,6,7,6],"pts":[1,4,7,8,8,8,11,14,14,17,20,23,24,24,25,28,29,29,30,31,31,34,37,40,43,44,45,45,48,48,48,48,48,48,48,49,52,52]},"Everton":{"pos":[14,8,5,6,10,9,8,12,14,14,13,11,14,10,7,9,10,12,8,12,12,10,10,10,8,8,9,8,8,8,8,8,10,11,10,10,12,13],"gd":[-1,1,2,2,1,1,2,0,-3,-3,-1,0,-3,-2,1,-1,-2,-2,0,-2,-2,-1,-1,-1,0,-1,-2,-1,1,-1,2,2,1,0,0,0,-2,-3],"pts":[0,3,6,7,7,8,11,11,11,12,15,18,18,21,24,24,24,25,28,28,29,32,33,34,37,37,37,40,43,43,46,47,47,47,48,49,49,49]},"Manchester United":{"pos":[15,16,9,14,11,14,10,9,6,8,7,10,7,8,6,6,7,6,6,6,7,5,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3],"gd":[-1,-1,0,-3,-2,-4,-2,-1,1,1,1,0,1,1,4,4,3,4,4,4,4,6,7,8,10,10,11,12,11,13,13,12,13,14,15,15,16,19],"pts":[0,1,4,4,7,7,10,13,16,17,18,18,21,22,25,26,26,29,30,31,32,35,38,41,44,45,48,51,51,54,55,55,58,61,64,65,68,71]},"Bournemouth":{"pos":[16,9,7,4,4,6,4,3,2,5,9,8,11,14,13,13,15,15,15,15,15,15,13,12,11,9,8,10,9,10,13,11,8,7,6,6,6,6],"gd":[-2,-1,0,1,1,1,3,3,5,3,-1,-1,-2,-3,-3,-3,-3,-6,-6,-7,-6,-6,-5,-3,-3,-2,-2,-2,-2,-2,-2,-1,0,0,3,4,4,4],"pts":[0,3,6,9,10,11,14,15,18,18,18,19,19,19,20,21,22,22,23,23,26,27,30,33,34,37,38,39,40,41,42,45,48,49,52,55,56,57]},"Wolverhampton":{"pos":[20,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"gd":[-4,-5,-6,-7,-9,-9,-9,-11,-12,-15,-18,-20,-21,-22,-25,-26,-28,-29,-29,-26,-26,-26,-28,-30,-32,-32,-33,-31,-30,-30,-30,-34,-37,-38,-38,-41,-41,-41],"pts":[0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,3,6,7,8,8,8,8,9,9,12,15,16,17,17,17,17,18,18,19,20]},"Nottingham Forest":{"pos":[5,5,10,15,15,17,17,18,18,19,19,16,16,16,17,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,16,16,16,16,16,16,16,16],"gd":[2,2,-1,-4,-4,-5,-7,-10,-12,-12,-10,-7,-9,-8,-11,-8,-9,-10,-12,-14,-13,-13,-11,-11,-13,-13,-14,-15,-15,-15,-12,-12,-9,-4,-2,-2,-3,-3],"pts":[3,4,4,4,5,5,5,5,5,6,9,12,12,15,15,18,18,18,18,18,21,22,25,26,26,27,27,27,28,29,32,33,36,39,42,43,43,44]},"Manchester City":{"pos":[1,6,13,8,9,7,5,2,5,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2],"gd":[4,2,1,4,4,8,9,11,10,12,15,14,15,16,19,22,25,26,26,26,26,24,26,26,27,30,31,32,32,32,35,38,39,40,40,43,43,42],"pts":[3,3,3,6,7,10,13,16,16,19,22,22,25,28,31,34,37,40,41,42,43,43,46,47,50,53,56,59,60,61,64,67,70,73,74,77,78,78]}};

const CLUBS = [
  { key: "Arsenal", name: "Arsenal", color: "#EF0107", on: "#ffffff" },
  { key: "Aston Villa", name: "Aston Villa", color: "#670E36", on: "#ffffff" },
  { key: "Bournemouth", name: "Bournemouth", color: "#B50E12", on: "#ffffff" },
  { key: "Brentford", name: "Brentford", color: "#E30613", on: "#ffffff" },
  { key: "Brighton", name: "Brighton & Hove Albion", color: "#0057B8", on: "#ffffff" },
  { key: "Burnley", name: "Burnley", color: "#6C1D45", on: "#ffffff" },
  { key: "Chelsea", name: "Chelsea", color: "#034694", on: "#ffffff" },
  { key: "Crystal Palace", name: "Crystal Palace", color: "#1B458F", on: "#ffffff" },
  { key: "Everton", name: "Everton", color: "#003399", on: "#ffffff" },
  { key: "Fulham", name: "Fulham", color: "#111111", on: "#ffffff" },
  { key: "Leeds United", name: "Leeds United", color: "#FFCD00", on: "#1c1917", under: "#7A5E00" },
  { key: "Liverpool", name: "Liverpool", color: "#C8102E", on: "#ffffff" },
  { key: "Manchester City", name: "Manchester City", color: "#6CABDD", on: "#10202C" },
  { key: "Manchester United", name: "Manchester United", color: "#DA020E", on: "#ffffff" },
  { key: "Newcastle", name: "Newcastle United", color: "#241F20", on: "#ffffff" },
  { key: "Nottingham Forest", name: "Nottingham Forest", color: "#DD0000", on: "#ffffff" },
  { key: "Sunderland", name: "Sunderland", color: "#EB172B", on: "#ffffff" },
  { key: "Tottenham", name: "Tottenham Hotspur", color: "#132257", on: "#ffffff" },
  { key: "West Ham", name: "West Ham United", color: "#7A263A", on: "#ffffff" },
  { key: "Wolverhampton", name: "Wolverhampton Wanderers", color: "#FDB913", on: "#1c1917", under: "#8A6A12" },
];

const WEEKS = 38;
const WINDOW = 3;
const STEP_MS = 350;
const ZOOM_MS = 1500;

const chartEl = document.getElementById("chart");
const tipEl = document.getElementById("tip");
const view = {
  points: [],
  revealed: [],
  domain: [1, WINDOW],
  x: null,
  y: null,
  margin: null,
  playing: false,
};

let club = CLUBS.find((item) => item.key === "Brentford");
let runToken = 0;

function ordinal(n) {
  const value = Math.round(n);
  const mod100 = value % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${value}th`;
  switch (value % 10) {
    case 1: return `${value}st`;
    case 2: return `${value}nd`;
    case 3: return `${value}rd`;
    default: return `${value}th`;
  }
}

function formatGd(gd) {
  const value = Math.round(gd);
  return value > 0 ? `+${value}` : String(value);
}

function rowsFor(key) {
  const table = TABLES[key];
  return table.pos.map((pos, index) => ({
    week: index + 1,
    pos,
    pts: table.pts[index],
    gd: table.gd[index],
  }));
}

/* Weeks 1–3 share one frame. After that the axis is only the latest three weeks. */
function windowDomain(week) {
  if (week <= WINDOW) return [1, WINDOW];
  return [week - (WINDOW - 1), week];
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function checkTables() {
  if (CLUBS.length !== 20) throw new Error("Expected 20 clubs");
  CLUBS.forEach((item) => {
    const table = TABLES[item.key];
    if (!table || table.pos.length !== WEEKS || table.pts.length !== WEEKS) {
      throw new Error(`Missing table for ${item.key}`);
    }
  });
  for (let week = 0; week < WEEKS; week += 1) {
    const places = CLUBS.map((item) => TABLES[item.key].pos[week]).sort((a, b) => a - b);
    places.forEach((place, index) => {
      if (place !== index + 1) throw new Error(`Matchweek ${week + 1} is missing place ${index + 1}`);
    });
  }
  const brentford = TABLES.Brentford;
  if (brentford.pos[0] !== 17 || brentford.pos[20] !== 5 || brentford.pos[37] !== 9 || brentford.pts[37] !== 53) {
    throw new Error("Brentford season check failed");
  }
}

function applyClub() {
  document.documentElement.style.setProperty("--team", club.color);
  document.documentElement.style.setProperty("--on-team", club.on);
  document.getElementById("team-name").textContent = club.name;
  document.title = `${club.name} · Premier League 2025/26`;
  const theme = document.querySelector('meta[name="theme-color"]');
  if (theme) theme.setAttribute("content", club.color);
  chartEl.setAttribute(
    "aria-label",
    `${club.name}. Animated league position for the 2025/26 season.`
  );
}

function setPosition(pos) {
  document.getElementById("position").textContent = pos == null ? "\u2013" : ordinal(pos);
}

function setDetail(text) {
  document.getElementById("detail").textContent = text;
}

function setViewLabel(text) {
  document.getElementById("view-label").textContent = text;
}

function hideTip() {
  tipEl.hidden = true;
}

function showTip(row) {
  if (!view.x || !view.y || !view.margin) return;
  const plotX = view.margin.left + view.x(row.week);
  const plotY = view.margin.top + view.y(row.pos);
  tipEl.hidden = false;
  tipEl.textContent = `MW ${row.week} · ${ordinal(row.pos)} · ${row.pts} pts`;
  const left = chartEl.offsetLeft + plotX;
  const top = chartEl.offsetTop + plotY;
  const bounds = chartEl.parentElement.clientWidth;
  tipEl.style.left = `${Math.max(54, Math.min(bounds - 54, left))}px`;
  tipEl.style.top = `${top}px`;
  tipEl.style.transform = plotY < 36
    ? "translate(-50%, 12px)"
    : "translate(-50%, calc(-100% - 10px))";
}

function draw(points, domain) {
  const width = chartEl.clientWidth;
  const height = chartEl.clientHeight;
  if (width < 40 || height < 40) return;

  const margin = {
    top: 16,
    right: width < 520 ? 10 : 16,
    bottom: 36,
    left: width < 520 ? 30 : 36,
  };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;
  const xPad = 8;
  const x = d3.scaleLinear().domain(domain).range([xPad, innerW - xPad]);
  const y = d3.scaleLinear().domain([0.5, 20.5]).range([0, innerH]);

  view.points = points;
  view.domain = domain;
  view.x = x;
  view.y = y;
  view.margin = margin;

  let svg = d3.select(chartEl).select("svg");
  if (svg.empty()) {
    svg = d3.select(chartEl).append("svg");
    const defs = svg.append("defs");
    defs.append("clipPath").attr("id", "plot-clip").append("rect");
    const gradient = defs.append("linearGradient")
      .attr("id", "area-fill")
      .attr("gradientUnits", "userSpaceOnUse");
    gradient.append("stop");
    gradient.append("stop");
    const plot = svg.append("g").attr("class", "plot");
    plot.append("g").attr("class", "zones");
    plot.append("g").attr("class", "grid");
     plot.append("g").attr("class", "x-grid");
    plot.append("path").attr("class", "area");
    plot.append("path").attr("class", "line-under");
    plot.append("path").attr("class", "line");
    const marker = svg.append("g").attr("class", "marker");
    marker.append("circle").attr("class", "halo");
    marker.append("circle").attr("class", "dot");
    svg.append("g").attr("class", "x-axis");
    svg.append("g").attr("class", "y-axis");
    svg.append("rect").attr("class", "overlay").attr("fill", "transparent");
  }

  svg.attr("width", width).attr("height", height).attr("viewBox", `0 0 ${width} ${height}`);
  svg.select("#plot-clip rect").attr("width", innerW).attr("height", innerH);
  svg.select("#area-fill")
    .attr("x1", 0)
    .attr("x2", 0)
    .attr("y1", margin.top)
    .attr("y2", margin.top + innerH);
  svg.selectAll("#area-fill stop")
    .data([
      { offset: "0%", opacity: 0.22 },
      { offset: "100%", opacity: 0.02 },
    ])
    .attr("offset", (d) => d.offset)
    .attr("stop-color", club.color)
    .attr("stop-opacity", (d) => d.opacity);

  const plot = svg.select(".plot")
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .attr("clip-path", "url(#plot-clip)");

  const boundaries = [
    { label: "Top four", position: 4.5, color: "#2F6B3B" },
    { label: "Relegation", position: 17.5, color: "#A83232" },
  ];

  const zoneGroups = plot.select(".zones")
    .selectAll("g.zone")
    .data(boundaries, (d) => d.label)
    .join((enter) => {
      const group = enter.append("g").attr("class", "zone");
      group.append("line");
      group.append("text");
      return group;
    });

  zoneGroups.select("line")
    .attr("x1", 0)
    .attr("x2", innerW)
    .attr("y1", (d) => y(d.position))
    .attr("y2", (d) => y(d.position))
    .attr("stroke", (d) => d.color)
    .attr("stroke-width", 1.5)
    .attr("stroke-dasharray", "2 4")
    .attr("stroke-linecap", "round");

  zoneGroups.select("text")
    .attr("x", innerW - 4)
    .attr("y", (d) => y(d.position) + (d.position < 10 ? -6 : 14))
    .attr("text-anchor", "end")
    .attr("fill", (d) => d.color)
    .text((d) => d.label);
   
  const yTicks = innerH >= 380 ? d3.range(1, 21) : [1, 5, 10, 15, 20];
  plot.select(".grid")
    .selectAll("line")
    .data(yTicks)
    .join("line")
    .attr("x1", 0)
    .attr("x2", innerW)
    .attr("y1", (d) => y(d))
    .attr("y2", (d) => y(d))
    .attr("stroke", (d) => (d === 4 || d === 17 ? "#e6dfd6" : "#f4f0ea"));

  const verticalGridOpacity = Math.max(
    0,
    Math.min(1, (8 - (domain[1] - domain[0])) / 6)
  );
  const gridWeeks = verticalGridOpacity > 0
    ? d3.range(
      Math.ceil(domain[0] - 1e-6),
      Math.floor(domain[1] + 1e-6) + 1
    )
    : [];

  plot.select(".x-grid")
    .attr("opacity", verticalGridOpacity)
    .selectAll("line")
    .data(gridWeeks)
    .join("line")
    .attr("x1", (week) => x(week))
    .attr("x2", (week) => x(week))
    .attr("y1", 0)
    .attr("y2", innerH)
    .attr("stroke", "#e7e2da")
    .attr("stroke-width", 1);

  const line = d3.line()
    .x((d) => x(d.week))
    .y((d) => y(d.pos))
    .curve(d3.curveLinear);
  const area = d3.area()
    .x((d) => x(d.week))
    .y0(y(20.5))
    .y1((d) => y(d.pos))
    .curve(d3.curveLinear);

  plot.select(".area")
    .attr("fill", "url(#area-fill)")
    .attr("d", points.length > 1 ? area(points) : null);
  plot.select(".line-under")
    .attr("fill", "none")
    .attr("stroke", club.under || "none")
    .attr("stroke-width", 6)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("d", club.under && points.length ? line(points) : null);
  plot.select(".line")
    .attr("fill", "none")
    .attr("stroke", club.color)
    .attr("stroke-width", 2.75)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("d", points.length ? line(points) : null);

  const last = points[points.length - 1];
  const marker = svg.select(".marker")
    .attr("transform", last
      ? `translate(${margin.left + x(last.week)},${margin.top + y(last.pos)})`
      : "translate(-20,-20)")
    .attr("opacity", last ? 1 : 0);
  marker.select(".halo")
    .attr("r", 11)
    .attr("fill", club.color)
    .attr("opacity", 0.18);
  marker.select(".dot")
    .attr("r", 5)
    .attr("fill", club.color)
    .attr("stroke", club.under ? "#1c1917" : "#ffffff")
    .attr("stroke-width", club.under ? 1.5 : 2);

  const span = domain[1] - domain[0];
  const xTicks = span > 8
    ? [1, 5, 10, 15, 20, 25, 30, 35, 38]
    : d3.range(Math.ceil(domain[0] - 1e-6), Math.floor(domain[1] + 1e-6) + 1);

  svg.select(".x-axis")
    .attr("transform", `translate(${margin.left},${margin.top + innerH})`)
    .call(
      d3.axisBottom(x)
        .tickValues(xTicks)
        .tickSize(0)
        .tickPadding(10)
        .tickFormat((d) => (span <= 8 ? `MW ${d}` : d))
    );
  svg.select(".y-axis")
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .call(d3.axisLeft(y).tickValues(yTicks).tickSize(0).tickPadding(8).tickFormat(d3.format("d")));
  svg.selectAll(".x-axis text, .y-axis text").attr("fill", "#78716c");

  svg.select(".overlay")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("width", innerW)
    .attr("height", innerH)
    .style("cursor", view.playing ? "default" : "crosshair")
    .on("pointermove", onPointer)
    .on("pointerleave", hideTip);
}

function onPointer(event) {
  if (view.playing || !view.revealed.length || !view.x) return;
  const [mx] = d3.pointer(event, event.currentTarget);
  const week = view.x.invert(mx - view.margin.left);
  let best = null;
  view.revealed.forEach((row) => {
    if (row.week < view.domain[0] - 0.35 || row.week > view.domain[1] + 0.35) return;
    if (!best || Math.abs(row.week - week) < Math.abs(best.week - week)) best = row;
  });
  if (!best) {
    hideTip();
    return;
  }
  showTip(best);
}

function transitionView(duration, tween) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };
    d3.select(chartEl)
      .transition("season")
      .duration(duration)
      .ease(d3.easeCubicInOut)
      .tween("frame", tween)
      .on("end", finish)
      .on("interrupt", finish);
  });
}

function framePoints(target, t) {
  if (target.length === 1) return target.slice();
  const prev = target[target.length - 2];
  const next = target[target.length - 1];
  const head = target.slice(0, -1);
  head.push({
    week: prev.week + (next.week - prev.week) * t,
    pos: prev.pos + (next.pos - prev.pos) * t,
    pts: prev.pts + (next.pts - prev.pts) * t,
    gd: prev.gd + (next.gd - prev.gd) * t,
  });
  return head;
}

async function play(token) {
  const series = rowsFor(club.key);
  view.playing = true;
  view.revealed = [];
  hideTip();
  setPosition(null);
  setDetail("Position after each matchweek");
  setViewLabel("Opening matchweeks");
  draw([], [1, WINDOW]);

  for (let week = 1; week <= WEEKS; week += 1) {
    if (token !== runToken) return;
    const target = series.slice(0, week);
    const fromDomain = week === 1 ? [1, WINDOW] : windowDomain(week - 1);
    const toDomain = windowDomain(week);
    await transitionView(week === 1 ? 280 : STEP_MS, () => {
      const domainTween = d3.interpolateArray(fromDomain, toDomain);
      return (t) => {
        if (token !== runToken) return;
        draw(framePoints(target, t), domainTween(t));
      };
    });
    if (token !== runToken) return;
    view.revealed = target;
    const row = target[target.length - 1];
    setPosition(row.pos);
    setDetail(`Matchweek ${week} of ${WEEKS} · ${row.pts} points`);
    setViewLabel(week < WINDOW ? "Opening matchweeks" : "Rolling 3 matchweeks");
  }

  if (token !== runToken) return;
  await wait(650);
  if (token !== runToken) return;

  setViewLabel("Full season");
  setDetail("Opening the full season");
  await transitionView(ZOOM_MS, () => {
    const domainTween = d3.interpolateArray([WEEKS - (WINDOW - 1), WEEKS], [1, WEEKS]);
    return (t) => {
      if (token !== runToken) return;
      draw(series, domainTween(t));
    };
  });
  if (token !== runToken) return;

  view.playing = false;
  view.revealed = series;
  const last = series[series.length - 1];
  setPosition(last.pos);
  setDetail(`${last.pts} points · goal difference ${formatGd(last.gd)}`);
  setViewLabel("Full season");
  chartEl.setAttribute(
    "aria-label",
    `${club.name} finished the 2025/26 Premier League ${ordinal(last.pos)} with ${last.pts} points.`
  );
  document.getElementById("live").textContent = `${club.name} finished ${ordinal(last.pos)}, ${last.pts} points.`;
  draw(series, [1, WEEKS]);
}

function showFinal() {
  const series = rowsFor(club.key);
  const last = series[series.length - 1];
  view.playing = false;
  view.revealed = series;
  hideTip();
  setPosition(last.pos);
  setDetail(`${last.pts} points · goal difference ${formatGd(last.gd)}`);
  setViewLabel("Full season");
  chartEl.setAttribute(
    "aria-label",
    `${club.name} finished the 2025/26 Premier League ${ordinal(last.pos)} with ${last.pts} points.`
  );
  draw(series, [1, WEEKS]);
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function replay() {
  runToken += 1;
  d3.select(chartEl).interrupt("season");
  const token = runToken;
  if (prefersReducedMotion()) {
    showFinal();
    return;
  }
  play(token);
}

function renderTeamList() {
  const list = document.getElementById("team-list");
  const ranked = CLUBS.slice().sort(
    (a, b) => TABLES[a.key].pos[WEEKS - 1] - TABLES[b.key].pos[WEEKS - 1]
  );
  list.replaceChildren();
  ranked.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "team-option";
    button.setAttribute("aria-pressed", item.key === club.key ? "true" : "false");

    const dot = document.createElement("span");
    dot.className = "club-dot";
    dot.style.background = item.color;

    const name = document.createElement("span");
    name.className = "team-option-name";
    name.textContent = item.name;

    const place = document.createElement("span");
    place.className = "team-option-pos";
    place.textContent = ordinal(TABLES[item.key].pos[WEEKS - 1]);

    button.append(dot, name, place);
    button.addEventListener("click", () => {
      club = item;
      applyClub();
      document.getElementById("picker").close();
      replay();
    });
    list.appendChild(button);
  });
}

function boot() {
  if (typeof d3 === "undefined") {
    setDetail("This chart needs D3, which did not load. Check your connection and reload.");
    return;
  }
  try {
    checkTables();
  } catch (error) {
    setDetail("The season table could not be read.");
    return;
  }

  applyClub();
  document.getElementById("replay").addEventListener("click", replay);
  document.getElementById("change-team").addEventListener("click", () => {
    renderTeamList();
    const dialog = document.getElementById("picker");
    dialog.showModal();
    const selected = dialog.querySelector('[aria-pressed="true"]');
    if (selected) selected.focus();
  });
  document.getElementById("close-picker").addEventListener("click", () => {
    document.getElementById("picker").close();
  });

  const observer = new ResizeObserver(() => {
    if (view.x) draw(view.points, view.domain);
  });
  observer.observe(chartEl);
  replay();
}

boot();
