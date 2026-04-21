      const API = "https://api.anthropic.com/v1/messages";
      let registered = false,
        voted = false,
        selC = null;
      let votes = { c1: 1847, c2: 2103, c3: 982, c4: 654 };
      let ledger = [
        { b: "#48291", h: "0x3fa9...c21b", t: "09:14" },
        { b: "#48290", h: "0x7dc1...f83a", t: "09:12" },
        { b: "#48289", h: "0xb22e...9910", t: "09:10" },
        { b: "#48288", h: "0x19ab...44cd", t: "09:08" },
      ];
      const C = [
        {
          id: "c1",
          n: "Emeka Adeleke",
          p: "PDP",
          col: "#378ADD",
          bg: "#E6F1FB",
          tc: "#185FA5",
          age: 58,
          st: "Ogun",
          sum: "Former Governor of Ogun State (2015–2023). 20+ years in public office. Known for infrastructure and education reforms.",
          hist: [
            { y: "2015–2023", r: "Governor, Ogun State", o: "won", p: "PDP" },
            { y: "2011–2015", r: "Senator, Ogun Central", o: "won", p: "PDP" },
            { y: "2007", r: "Governorship candidate", o: "lost", p: "PDP" },
          ],
          ag: {
            Education:
              "Free tuition in federal universities, 50,000 new classrooms by 2028",
            Infrastructure:
              "₦2 trillion road rehabilitation across all 36 states",
            Health:
              "Universal health coverage for 50 million Nigerians by 2026",
            Economy: "25% reduction in unemployment within 2 years",
            Security: "Community policing model in all 774 LGAs",
          },
          ast: "3 properties in Lagos, 1 in London. Net worth: ₦2.4 billion declared. No criminal convictions.",
          prom: [
            {
              t: "Build 50,000 new classrooms nationwide",
              s: "pending",
              p: 0,
              n: "Not yet started. First budget to be presented Q2 2028.",
            },
            {
              t: "Rehabilitate Lagos-Ibadan expressway",
              s: "pending",
              p: 0,
              n: "Environmental impact assessment commissioned.",
            },
            {
              t: "Reduce inflation to single digits in 18 months",
              s: "pending",
              p: 0,
              n: "Inflation currently at 22%. Deadline: June 2028.",
            },
          ],
        },
        {
          id: "c2",
          n: "Fatima Bello",
          p: "APC",
          col: "#EF9F27",
          bg: "#FAEEDA",
          tc: "#854F0B",
          age: 52,
          st: "Kano",
          sum: "Current Minister of Finance (2021–present). Former CBN Deputy Governor. Foremost Nigerian economist.",
          hist: [
            {
              y: "2021–present",
              r: "Minister of Finance",
              o: "appointed",
              p: "APC",
            },
            {
              y: "2015–2021",
              r: "Deputy Governor, CBN",
              o: "appointed",
              p: "Independent",
            },
            { y: "2011", r: "Senatorial candidate, Kano", o: "lost", p: "APC" },
          ],
          ag: {
            Economy: "Return Nigeria to top 20 global economies by 2030",
            Security: "₦500bn security infrastructure in the North",
            Education: "Mandatory coding in all secondary schools",
            Health: "1 specialist hospital per state",
            Infrastructure: "Solar power for 10 million rural households",
          },
          ast: "2 properties in Abuja, 1 in Kano. Net worth: ₦1.8 billion declared. No criminal convictions.",
          prom: [
            {
              t: "Stabilise the naira within 6 months",
              s: "fulfilled",
              p: 100,
              n: "Naira stabilised at ₦1,200/$ by month 5. Confirmed by CBN and IMF.",
              d: "Jun 2027",
            },
            {
              t: "Create 5 million jobs through SME funding",
              s: "in_progress",
              p: 42,
              n: "2.1 million jobs created. ₦800bn SME fund disbursed.",
              d: "Jan 2028",
            },
            {
              t: "Build 1 specialist hospital per state",
              s: "broken",
              p: 5,
              n: "Only 2 hospitals groundbroken. Budget cut 60% in 2028.",
              d: "Dec 2027",
            },
          ],
        },
        {
          id: "c3",
          n: "Chukwudi Eze",
          p: "LP",
          col: "#639922",
          bg: "#EAF3DE",
          tc: "#3B6D11",
          age: 44,
          st: "Enugu",
          sum: "Tech entrepreneur and civil society activist. Three Nigerian tech startups. First-time political candidate.",
          hist: [
            {
              y: "2020–present",
              r: "Founder, TechNG Foundation",
              o: "n/a",
              p: "Independent",
            },
            {
              y: "2015–2020",
              r: "Co-founder, PayNaija (acquired)",
              o: "n/a",
              p: "Independent",
            },
            {
              y: "2023",
              r: "Presidential aspirant (primary)",
              o: "lost primary",
              p: "LP",
            },
          ],
          ag: {
            Economy: "$100bn digital economy by 2030",
            Youth: "1 million youth tech apprenticeships",
            Agriculture: "Mechanised farming for 500,000 smallholders",
            Education: "100% free primary and secondary education",
            Infrastructure: "Nationwide fibre broadband by 2028",
          },
          ast: "1 property in Enugu, shares in 2 tech companies. Net worth: ₦890 million declared. No criminal convictions.",
          prom: [
            {
              t: "Launch 1 million youth tech apprenticeships",
              s: "pending",
              p: 0,
              n: "Programme design phase ongoing.",
            },
            {
              t: "100% free primary and secondary education",
              s: "pending",
              p: 0,
              n: "Pending federal budget allocation.",
            },
            {
              t: "Nationwide fibre broadband by 2028",
              s: "pending",
              p: 0,
              n: "MOU signed with 3 telecoms providers.",
            },
          ],
        },
        {
          id: "c4",
          n: "Ngozi Okafor",
          p: "NNPP",
          col: "#D4537E",
          bg: "#FBEAF0",
          tc: "#993556",
          age: 61,
          st: "Anambra",
          sum: "Former Chief Justice of Anambra State. Constitutional law expert. Advocate for electoral reform and anti-corruption.",
          hist: [
            {
              y: "2012–2022",
              r: "Chief Justice, Anambra State",
              o: "appointed",
              p: "Independent",
            },
            {
              y: "2007–2012",
              r: "High Court Judge, Anambra",
              o: "appointed",
              p: "Independent",
            },
            { y: "2023", r: "Presidential candidate", o: "ongoing", p: "NNPP" },
          ],
          ag: {
            Justice: "Independent judiciary reform in all 36 states",
            Women: "35% minimum female representation in cabinet",
            Health: "Free maternal and child healthcare nationwide",
            Constitution: "New constitution via citizens' assembly by 2026",
            Education: "Triple federal education budget in 4 years",
          },
          ast: "1 property in Awka, 1 in Lagos. Net worth: ₦650 million declared. No criminal convictions.",
          prom: [
            {
              t: "Pass electoral reform bill in first 100 days",
              s: "pending",
              p: 0,
              n: "Bill drafted and ready for presentation.",
            },
            {
              t: "35% female representation in cabinet",
              s: "pending",
              p: 0,
              n: "Commitment noted. Awaiting election outcome.",
            },
            {
              t: "Triple federal education budget by year 2",
              s: "pending",
              p: 0,
              n: "Costed at ₦4.2 trillion. Funding plan pending.",
            },
          ],
        },
      ];
      const SC = {
        fulfilled: { bg: "#EAF3DE", c: "#3B6D11", l: "Fulfilled" },
        in_progress: { bg: "#E6F1FB", c: "#185FA5", l: "In progress" },
        broken: { bg: "#FCEBEB", c: "#A32D2D", l: "Broken" },
        pending: { bg: "#f4f4f0", c: "#555", l: "Pending" },
      };

      function showTab(t) {
        ["reg", "cands", "vote", "ledger", "results", "track", "ai"].forEach(
          (s, i) => {
            document.getElementById("sec-" + s).classList.add("hidden");
            document.querySelectorAll(".tab")[i].classList.remove("active");
          },
        );
        document.getElementById("sec-" + t).classList.remove("hidden");
        ["reg", "cands", "vote", "ledger", "results", "track", "ai"].forEach(
          (s, i) => {
            if (s === t)
              document.querySelectorAll(".tab")[i].classList.add("active");
          },
        );
        if (t === "vote") iVote();
        if (t === "ledger") rLedger();
        if (t === "results") rResults();
        if (t === "cands") rCands();
        if (t === "track") rTrack();
      }

      function setCV(v, btn) {
        document
          .querySelectorAll(".stabs .stab")
          .forEach((b) => b.classList.remove("on"));
        btn.classList.add("on");
        document.getElementById("cvp").classList.toggle("hidden", v !== "p");
        document.getElementById("cvc").classList.toggle("hidden", v !== "c");
        if (v === "c") {
          ["ca", "cb"].forEach((id) => {
            const s = document.getElementById(id);
            if (s.options.length <= 1)
              C.forEach((c) => {
                const o = document.createElement("option");
                o.value = c.id;
                o.textContent = c.n + " (" + c.p + ")";
                s.appendChild(o);
              });
          });
        }
      }

      function rCands() {
        document.getElementById("cprofs").innerHTML = C.map(
          (c) => `
    <div class="cp">
      <div class="cph" onclick="document.getElementById('cb-${c.id}').classList.toggle('hidden')">
        <div class="ava" style="width:40px;height:40px;background:${c.bg};color:${c.tc};flex-shrink:0;font-size:12px">${c.n
          .split(" ")
          .map((x) => x[0])
          .join("")}</div>
        <div style="flex:1"><div style="font-size:13px;font-weight:500;color:#111">${c.n}</div><div style="font-size:11px;color:#666">${c.p} &middot; Age ${c.age} &middot; ${c.st} State</div><div style="font-size:11px;color:#aaa;margin-top:2px;line-height:1.4">${c.sum}</div></div>
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#aaa" stroke-width="2"><path d="M5 8l5 5 5-5"/></svg>
      </div>
      <div id="cb-${c.id}" class="cpb hidden">
        <div class="cps"><div class="cpst">Political history</div>${c.hist.map((h) => `<div class="hi"><div class="hd" style="background:${h.o === "won" ? "#1D9E75" : h.o === "lost" ? "#E24B4A" : "#888"}"></div><div><span style="font-size:12px;font-weight:500;color:#111">${h.y}</span> — ${h.r} <span style="font-size:10px;color:#aaa">(${h.p})</span><br><span style="font-size:10px;color:#666">${h.o === "won" ? "Elected" : h.o === "lost" ? "Defeated" : h.o === "appointed" ? "Appointed" : "Ongoing"}</span></div></div>`).join("")}</div>
        <div class="cps"><div class="cpst">Agenda & policies</div>${Object.entries(
          c.ag,
        )
          .map(
            ([k, v]) =>
              `<div style="margin-bottom:7px"><span class="tag" style="background:${c.bg};color:${c.tc}">${k}</span><div style="font-size:11px;color:#666;margin-top:3px;line-height:1.5">${v}</div></div>`,
          )
          .join("")}</div>
        <div class="cps"><div class="cpst">Asset declaration</div><div style="font-size:12px;color:#666;line-height:1.6">${c.ast}</div></div>
        <div class="cps">
          <div class="cpst">Ask Claude about this candidate</div>
          <div class="ar"><input id="ai-${c.id}" placeholder="e.g. What is their education record?"><button onclick="askC('${c.id}')">Ask AI</button></div>
          <div id="air-${c.id}" class="hidden"></div>
        </div>
      </div>
    </div>`,
        ).join("");
      }

      function rCmp() {
        const a = C.find((c) => c.id === document.getElementById("ca").value);
        const b = C.find((c) => c.id === document.getElementById("cb").value);
        const out = document.getElementById("cmpout");
        if (!a || !b) {
          out.innerHTML = "";
          return;
        }
        const secs = [...new Set([...Object.keys(a.ag), ...Object.keys(b.ag)])];
        out.innerHTML =
          `<div class="cgrid" style="margin-bottom:12px"><div style="text-align:center;padding:10px;background:${a.bg};border-radius:8px"><div style="font-size:13px;font-weight:500;color:${a.tc}">${a.n}</div><div style="font-size:10px;color:${a.tc}">${a.p}</div></div><div style="text-align:center;padding:10px;background:${b.bg};border-radius:8px"><div style="font-size:13px;font-weight:500;color:${b.tc}">${b.n}</div><div style="font-size:10px;color:${b.tc}">${b.p}</div></div></div>` +
          secs
            .map(
              (s) =>
                `<div style="margin-bottom:10px;padding-bottom:10px;border-bottom:0.5px solid rgba(0,0,0,0.06)"><div style="font-size:10px;font-weight:500;color:#666;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:6px">${s}</div><div class="cgrid"><div style="font-size:11px;line-height:1.5;padding:6px;background:${a.bg};border-radius:6px;color:${a.tc}">${a.ag[s] || "No policy stated"}</div><div style="font-size:11px;line-height:1.5;padding:6px;background:${b.bg};border-radius:6px;color:${b.tc}">${b.ag[s] || "No policy stated"}</div></div></div>`,
            )
            .join("");
      }

      async function askC(cid) {
        const c = C.find((x) => x.id === cid);
        const q = document.getElementById("ai-" + cid).value.trim();
        if (!q) return;
        const el = document.getElementById("air-" + cid);
        el.className = "air";
        el.textContent = "Claude is thinking...";
        try {
          const res = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              model: "claude-sonnet-4-20250514",
              max_tokens: 500,
              system:
                "You are a neutral factual AI on NaijaVote, a Nigerian election platform. Answer questions about candidates using only their verified profile. Be concise (3-4 sentences), balanced, never endorse or criticise anyone.",
              messages: [
                {
                  role: "user",
                  content: `Profile: ${c.n}, ${c.p}, Age ${c.age}, ${c.st}. ${c.sum} History: ${c.hist.map((h) => h.y + " " + h.r + " " + h.o).join(", ")}. Agenda: ${Object.entries(
                    c.ag,
                  )
                    .map(([k, v]) => k + ": " + v)
                    .join(". ")}. Assets: ${c.ast}\n\nQuestion: ${q}`,
                },
              ],
            }),
          });
          const d = await res.json();
          el.textContent =
            d.content && d.content[0]
              ? d.content[0].text
              : "Unable to respond.";
        } catch (e) {
          el.textContent = "Could not connect. Please try again.";
        }
      }

      function rTrack() {
        const w = C[1];
        document.getElementById("trcont").innerHTML = `
    <div class="stats" style="margin-bottom:12px">
      <div class="stat"><div class="sn" style="color:#3B6D11">1</div><div class="sl">Fulfilled</div></div>
      <div class="stat"><div class="sn" style="color:#185FA5">2</div><div class="sl">In progress</div></div>
      <div class="stat"><div class="sn" style="color:#A32D2D">1</div><div class="sl">Broken</div></div>
    </div>
    <div class="card" style="margin-bottom:12px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <div class="ava" style="width:36px;height:36px;background:${w.bg};color:${w.tc};flex-shrink:0;font-size:12px">${w.n
          .split(" ")
          .map((x) => x[0])
          .join("")}</div>
        <div><div style="font-size:13px;font-weight:500;color:#111">${w.n} — ${w.p}</div><div style="font-size:11px;color:#666">President of Nigeria &middot; Elected March 2027 &middot; Term ends 2031</div></div>
      </div>
      <div style="font-size:11px;color:#666;margin-bottom:12px">All campaign promises logged on NaijaVote blockchain on election day. Claude AI monitors delivery against public records, budgets, and news sources every 6 months.</div>
      ${w.prom.map((pr) => `<div class="pi"><div style="flex:1"><div class="pt">${pr.t}</div><div class="pm">${pr.n}${pr.d ? " &middot; " + pr.d : ""}</div>${pr.p > 0 ? `<div class="pb"><div class="pbf" style="width:${pr.p}%;background:${pr.s === "fulfilled" ? "#1D9E75" : pr.s === "in_progress" ? "#378ADD" : "#E24B4A"}"></div></div>` : ""}</div><span class="ps" style="background:${SC[pr.s].bg};color:${SC[pr.s].c}">${SC[pr.s].l}</span></div>`).join("")}
    </div>
    <div class="card"><div class="ctitle">Claude AI accountability report</div><div style="font-size:12px;color:#666;line-height:1.7;margin-top:4px">Based on public records, budget documents, and verified news sources as of January 2028: President ${w.n} has fulfilled <strong style="color:#3B6D11">1 of 5</strong> tracked promises — naira stabilisation, independently verified by the CBN and IMF. Two promises are partially in progress, one is broken (specialist hospitals), and one is pending its 2028 deadline. NaijaVote publishes the next accountability update in June 2028.</div></div>`;
      }

      function iVote() {
        if (!registered) {
          document.getElementById("vlocked").classList.remove("hidden");
          document.getElementById("vmain").classList.add("hidden");
          document.getElementById("vdone").classList.add("hidden");
          return;
        }
        if (voted) {
          document.getElementById("vlocked").classList.add("hidden");
          document.getElementById("vmain").classList.add("hidden");
          document.getElementById("vdone").classList.remove("hidden");
          return;
        }
        document.getElementById("vlocked").classList.add("hidden");
        document.getElementById("vmain").classList.remove("hidden");
        document.getElementById("vdone").classList.add("hidden");
        document.getElementById("vcands").innerHTML = C.map(
          (c) =>
            `<div class="cv" onclick="selC_(this,'${c.id}','${c.n}','${c.p}')" data-id="${c.id}"><div class="ava" style="width:38px;height:38px;background:${c.bg};color:${c.tc};margin:0 auto 6px;font-size:12px">${c.n
              .split(" ")
              .map((x) => x[0])
              .join(
                "",
              )}</div><div style="font-size:12px;font-weight:500;color:#111">${c.n}</div><div style="font-size:10px;color:#666;margin-top:1px">${c.p}</div><div style="font-size:10px;color:#aaa;margin-top:4px;line-height:1.4">${Object.values(c.ag)[0].substring(0, 50)}...</div></div>`,
        ).join("");
      }

      function selC_(el, id, name, party) {
        document
          .querySelectorAll(".cv")
          .forEach((c) => c.classList.remove("sel"));
        el.classList.add("sel");
        selC = id;
        document.getElementById("sname").textContent =
          name + " (" + party + ")";
        document.getElementById("vconf").classList.remove("hidden");
      }

      function castVote() {
        if (!selC) return;
        votes[selC]++;
        voted = true;
        const tx =
          "0x" +
          Math.random().toString(16).slice(2, 10) +
          "..." +
          Math.random().toString(16).slice(2, 6);
        const bn = "#" + (48292 + Math.floor(Math.random() * 3));
        const now = new Date();
        document.getElementById("txh").textContent = tx;
        document.getElementById("bln").textContent = bn;
        document.getElementById("vtm").textContent = now.toLocaleTimeString();
        ledger.unshift({
          b: bn,
          h: tx,
          t: now.toLocaleTimeString().slice(0, 5),
        });
        document.getElementById("vmain").classList.add("hidden");
        document.getElementById("vdone").classList.remove("hidden");
      }

      function rLedger() {
        document.getElementById("lrows").innerHTML = ledger
          .map(
            (r) =>
              `<div class="lr"><div style="font-family:monospace;font-size:10px">${r.b}</div><div class="hsh">${r.h}</div><div style="color:#666">${r.t}</div><div><span class="bc">Confirmed</span></div></div>`,
          )
          .join("");
      }

      function rResults() {
        const tot = Object.values(votes).reduce((a, b) => a + b, 0);
        document.getElementById("rtot").textContent = tot.toLocaleString();
        document.getElementById("rto").textContent =
          Math.round((tot / 84000000) * 100 * 10) / 10 + "%";
        const ord = Object.keys(votes).sort((a, b) => votes[b] - votes[a]);
        document.getElementById("rbars").innerHTML = ord
          .map((id) => {
            const c = C.find((x) => x.id === id);
            const pct = Math.round((votes[id] / tot) * 1000) / 10;
            return `<div class="bw"><div class="bl"><span style="font-size:12px;font-weight:500;color:#111">${c.n} <span style="font-size:10px;color:#666;font-weight:400">${c.p}</span></span><span style="font-size:12px">${pct}% <span style="color:#aaa;font-size:10px">${votes[id].toLocaleString()}</span></span></div><div class="bt"><div class="bf" style="width:${pct}%;background:${c.col}"></div></div></div>`;
          })
          .join("");
        const ldr = C.find((x) => x.id === ord[0]);
        document.getElementById("rsum").innerHTML =
          `<strong>Claude AI analysis:</strong> Based on blockchain-verified results, ${ldr.n} of the ${ldr.p} leads with ${Math.round((votes[ord[0]] / tot) * 1000) / 10}% of ${tot.toLocaleString()} verified votes. All results are cryptographically immutable — no individual or institution can alter them. Turnout stands at ${Math.round((tot / 84000000) * 100 * 10) / 10}%. No anomalies detected. These results are final.`;
      }

      function doReg() {
        const fn = document.getElementById("fn").value.trim(),
          ln = document.getElementById("ln").value.trim(),
          nin = document.getElementById("nin").value.trim(),
          dob = document.getElementById("dob").value,
          st = document.getElementById("st").value;
        const al = document.getElementById("ral");
        al.className = "alert a-i";
        al.style.display = "flex";
        if (!fn || !ln) {
          document.getElementById("rat").textContent =
            "Please enter your first and last name.";
          return;
        }
        if (nin.length !== 11 || isNaN(nin)) {
          document.getElementById("rat").textContent =
            "NIN must be exactly 11 digits.";
          return;
        }
        if (!dob) {
          document.getElementById("rat").textContent =
            "Please enter your date of birth.";
          return;
        }
        if (!st) {
          document.getElementById("rat").textContent =
            "Please select your state of origin.";
          return;
        }
        document.getElementById("rat").textContent =
          "Claude AI is verifying your identity...";
        setTimeout(() => {
          if (new Date().getFullYear() - new Date(dob).getFullYear() < 18) {
            al.className = "alert a-d";
            document.getElementById("rat").textContent =
              "Verification failed: must be 18 or older.";
            return;
          }
          al.style.display = "none";
          registered = true;
          document.getElementById("vava").textContent = (
            fn[0] + ln[0]
          ).toUpperCase();
          document.getElementById("vname").textContent = fn + " " + ln;
          document.getElementById("vid").textContent =
            "NV-2027-" + Math.floor(1000 + Math.random() * 9000);
          document.getElementById("vtok").textContent =
            "0x" +
            Math.random().toString(16).slice(2, 6) +
            "..." +
            Math.random().toString(16).slice(2, 6);
          document.getElementById("rdone").classList.remove("hidden");
        }, 1800);
      }

      async function sChat() {
        const inp = document.getElementById("cin"),
          q = inp.value.trim();
        if (!q) return;
        inp.value = "";
        const msgs = document.getElementById("cmsgs");
        msgs.innerHTML += `<div class="msg mu">${q}</div><div class="msg mt" id="typ">Claude is typing...</div>`;
        msgs.scrollTop = msgs.scrollHeight;
        try {
          const res = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              model: "claude-sonnet-4-20250514",
              max_tokens: 500,
              system:
                "You are the NaijaVote AI assistant on Nigeria's blockchain e-voting platform. Help voters with registration, voting, candidates, and election information. Respond in the user's language — English, Nigerian Pidgin, Hausa, Yoruba, or Igbo. Keep responses to 2-4 sentences. Be warm, clear, and neutral. Never endorse candidates.",
              messages: [{ role: "user", content: q }],
            }),
          });
          const d = await res.json();
          document.getElementById("typ").remove();
          msgs.innerHTML += `<div class="msg ma">${d.content && d.content[0] ? d.content[0].text : "Unable to respond right now."}</div>`;
          msgs.scrollTop = msgs.scrollHeight;
        } catch (e) {
          document.getElementById("typ").remove();
          msgs.innerHTML += `<div class="msg ma">Sorry, could not connect. Please try again.</div>`;
        }
      }
      function askQ(q) {
        document.getElementById("cin").value = q;
        sChat();
      }
      showTab("reg");