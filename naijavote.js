      const APIURL = "https://api.anthropic.com/v1/messages";
      let registered = false,
        voted = false,
        selectedCandidate = null,
        selectedEl = null;
      let votes = { c1: 1847, c2: 2103, c3: 982, c4: 654 };
      let ledgerData = [
        {
          block: "#48291",
          hash: "0x3fa9...c21b",
          time: "09:14",
          status: "enc",
        },
        {
          block: "#48290",
          hash: "0x7dc1...f83a",
          time: "09:12",
          status: "enc",
        },
        {
          block: "#48289",
          hash: "0xb22e...9910",
          time: "09:10",
          status: "enc",
        },
        {
          block: "#48288",
          hash: "0x19ab...44cd",
          time: "09:08",
          status: "enc",
        },
      ];
      const candidates = {
        c1: { name: "Emeka Adeleke", party: "PDP", color: "#378ADD" },
        c2: { name: "Fatima Bello", party: "APC", color: "#EF9F27" },
        c3: { name: "Chukwudi Eze", party: "LP", color: "#639922" },
        c4: { name: "Ngozi Okafor", party: "NNPP", color: "#D4537E" },
      };

      function showTab(t) {
        ["reg", "vote", "ledger", "results", "ai"].forEach((s) => {
          document.getElementById("sec-" + s).classList.add("section-hidden");
          document.getElementById("tab-" + s).classList.remove("active");
        });
        document.getElementById("sec-" + t).classList.remove("section-hidden");
        document.getElementById("tab-" + t).classList.add("active");
        if (t === "vote") {
          if (!registered) {
            document
              .getElementById("vote-locked")
              .classList.remove("section-hidden");
            document
              .getElementById("vote-main")
              .classList.add("section-hidden");
            document
              .getElementById("vote-done")
              .classList.add("section-hidden");
          } else if (voted) {
            document
              .getElementById("vote-locked")
              .classList.add("section-hidden");
              
            document
              .getElementById("vote-main")
              .classList.add("section-hidden");
            document
              .getElementById("vote-done")
              .classList.remove("section-hidden");
          } else {
            document
              .getElementById("vote-locked")
              .classList.add("section-hidden");
            document
              .getElementById("vote-main")
              .classList.remove("section-hidden");
            document
              .getElementById("vote-done")
              .classList.add("section-hidden");
          }
        }
        if (t === "ledger") renderLedger();
        if (t === "results") renderResults();
      }

      function registerVoter() {
        const fn = document.getElementById("r-fname").value.trim();
        const ln = document.getElementById("r-lname").value.trim();
        const nin = document.getElementById("r-nin").value.trim();
        const dob = document.getElementById("r-dob").value;
        const state = document.getElementById("r-state").value;
        const al = document.getElementById("reg-alert");
        al.className = "alert alert-info";
        al.style.display = "flex";
        if (!fn || !ln) {
          document.getElementById("reg-alert-text").textContent =
            "Please enter your first and last name.";
          return;
        }
        if (nin.length !== 11 || isNaN(nin)) {
          document.getElementById("reg-alert-text").textContent =
            "NIN must be exactly 11 digits.";
          return;
        }
        if (!dob) {
          document.getElementById("reg-alert-text").textContent =
            "Please enter your date of birth.";
          return;
        }
        if (!state) {
          document.getElementById("reg-alert-text").textContent =
            "Please select your state of origin.";
          return;
        }
        document.getElementById("reg-alert-text").textContent =
          "Claude AI is verifying your identity...";
        setTimeout(() => {
          const age = new Date().getFullYear() - new Date(dob).getFullYear();
          if (age < 18) {
            al.className = "alert alert-danger";
            document.getElementById("reg-alert-text").textContent =
              "Verification failed: voter must be 18 years or older.";
            return;
          }
          al.style.display = "none";
          registered = true;
          const initials = (fn[0] + ln[0]).toUpperCase();
          const vid = "NV-2026-" + Math.floor(1000 + Math.random() * 9000);
          const tok =
            "0x" +
            Math.random().toString(16).slice(2, 6) +
            "..." +
            Math.random().toString(16).slice(2, 6);
          document.getElementById("voter-initials").textContent = initials;
          document.getElementById("voter-name").textContent = fn + " " + ln;
          document.getElementById("voter-id").textContent = vid;
          document.getElementById("voter-token").textContent = tok;
          document
            .getElementById("reg-success")
            .classList.remove("section-hidden");
          document.getElementById("tab-vote").classList.add("done");
        }, 1800);
      }

      function selectCandidate(el, name, party) {
        if (selectedEl) selectedEl.classList.remove("selected");
        el.classList.add("selected");
        selectedEl = el;
        selectedCandidate = el.dataset.id;
        document.getElementById("selected-name").textContent =
          name + " (" + party + ")";
        document
          .getElementById("vote-confirm")
          .classList.remove("section-hidden");
      }

      function castVote() {
        if (!selectedCandidate) return;
        votes[selectedCandidate]++;
        voted = true;
        const txh =
          "0x" +
          Math.random().toString(16).slice(2, 10) +
          "..." +
          Math.random().toString(16).slice(2, 6);
        const bn = "#" + (48292 + Math.floor(Math.random() * 3));
        const now = new Date();
        document.getElementById("tx-hash").textContent = txh;
        document.getElementById("block-num").textContent = bn;
        document.getElementById("vote-time").textContent =
          now.toLocaleTimeString();
        ledgerData.unshift({
          block: bn,
          hash: txh,
          time: now.toLocaleTimeString().slice(0, 5),
          status: "enc",
        });
        document.getElementById("vote-main").classList.add("section-hidden");
        document.getElementById("vote-done").classList.remove("section-hidden");
      }

      function renderLedger() {
        const el = document.getElementById("ledger-rows");
        el.innerHTML = ledgerData
          .map(
            (r) =>
              `<div class="ledger-row"><div style="font-family:monospace;font-size:11px">${r.block}</div><div class="hash">${r.hash}</div><div style="color:#666">${r.time}</div><div><span class="${r.status === "enc" ? "badge-enc" : "badge-pend"}">${r.status === "enc" ? "Confirmed" : "Pending"}</span></div></div>`,
          )
          .join("");
      }

      function renderResults() {
        const total = Object.values(votes).reduce((a, b) => a + b, 0);
        document.getElementById("res-total").textContent =
          total.toLocaleString();
        document.getElementById("res-turnout").textContent =
          Math.round((total / 84000000) * 100 * 10) / 10 + "%";
        const order = Object.keys(votes).sort((a, b) => votes[b] - votes[a]);
        document.getElementById("results-bars").innerHTML = order
          .map((id) => {
            const c = candidates[id];
            const pct = Math.round((votes[id] / total) * 1000) / 10;
            return `<div class="bar-wrap"><div class="bar-label"><span style="font-size:13px;font-weight:500;color:#111">${c.name} <span style="font-size:11px;color:#666;font-weight:400">${c.party}</span></span><span style="font-size:13px;color:#111">${pct}% &nbsp;<span style="color:#999;font-size:11px">${votes[id].toLocaleString()} votes</span></span></div><div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${c.color}"></div></div></div>`;
          })
          .join("");
        const leader = candidates[order[0]];
        document.getElementById("ai-summary").innerHTML =
          `<strong>Claude AI analysis:</strong> Based on blockchain-verified results, ${leader.name} of the ${leader.party} is currently leading with ${Math.round((votes[order[0]] / total) * 1000) / 10}% of the vote. All ${total.toLocaleString()} votes recorded are cryptographically verified and immutable. No anomalies have been detected in the result data. Voter turnout stands at ${Math.round((total / 84000000) * 100 * 10) / 10}% of registered voters — a significant improvement from previous elections. Results are final and cannot be altered by any individual or institution.`;
      }

      async function sendChat() {
        const inp = document.getElementById("chat-in");
        const q = inp.value.trim();
        if (!q) return;
        inp.value = "";
        const msgs = document.getElementById("chat-msgs");
        msgs.innerHTML += `<div class="msg msg-user">${q}</div>`;
        msgs.innerHTML += `<div class="msg msg-typing" id="typing-ind">Claude is typing...</div>`;
        msgs.scrollTop = msgs.scrollHeight;
        try {
          const res = await fetch(APIURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              model: "claude-sonnet-4-20250514",
              max_tokens: 1000,
              system: `You are the NaijaVote AI assistant — a helpful, friendly chatbot embedded in NaijaVote, a blockchain-powered e-voting platform for Nigerian elections. You help citizens understand how to register, how to vote, how their vote is kept safe using blockchain technology, and answer questions about the election. You can respond in English, Nigerian Pidgin, Hausa, Yoruba, or Igbo depending on what language the user writes in. Keep responses concise (2-4 sentences). Be warm, encouraging, and accessible. Never discuss vote choices or endorse candidates.`,
              messages: [{ role: "user", content: q }],
            }),
          });
          const data = await res.json();
          const reply =
            data.content && data.content[0]
              ? data.content[0].text
              : "I am unable to respond right now. Please try again.";
          document.getElementById("typing-ind").remove();
          msgs.innerHTML += `<div class="msg msg-ai">${reply}</div>`;
          msgs.scrollTop = msgs.scrollHeight;
        } catch (e) {
          document.getElementById("typing-ind").remove();
          msgs.innerHTML += `<div class="msg msg-ai">Sorry, I could not connect right now. Please check your connection and try again.</div>`;
          msgs.scrollTop = msgs.scrollHeight;
        }
      }

      function askQuick(q) {
        document.getElementById("chat-in").value = q;
        sendChat();
      }
      showTab("reg");