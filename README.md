# Awesome Free Electronics ⚡

![Resources](https://img.shields.io/badge/resources-751-blue) ![License: CC0](https://img.shields.io/badge/license-CC0-green) ![Free](https://img.shields.io/badge/100%25-free%20%26%20open--source-brightgreen)

A curated list of **free and open-source** electronics tools, simulators, calculators, blogs, YouTube channels, courses, free assets and project-based-learning (PBL) projects, from basic electronics to analog, digital, PCB design, embedded systems, IoT, VLSI, FPGA, robotics, PLC, RF, power electronics and more.

> **Rule:** no freemium and no paid tiers. Tools that are free forever but closed-source are tagged `free (proprietary)`.

## Contents

- [🔌 Basics & Analog Electronics](#basics--analog-electronics) (70)
- [🧮 Digital Electronics, FPGA & VLSI](#digital-electronics-fpga--vlsi) (69)
- [🟩 PCB Design](#pcb-design) (55)
- [📟 Embedded Systems & IoT](#embedded-systems--iot) (80)
- [🤖 Robotics, PLC, Drones & Motor Control](#robotics-plc-drones--motor-control) (81)
- [📡 RF, SDR, Antennas & DSP](#rf-sdr-antennas--dsp) (55)
- [🔋 Power Electronics, Solar, Batteries & Test Equipment](#power-electronics-solar-batteries--test-equipment) (55)
- [🧪 Semiconductors, Audio, Automotive, Biomedical, TinyML & More](#semiconductors-audio-automotive-biomedical-tinyml--more) (64)
- [🧾 Calculators & Reference Tools](#calculators--reference-tools) (48)
- [🗂️ PCB Community Projects & Free Assets](#pcb-community-projects--free-assets) (60)
- [📺 YouTube, Blogs, Courses, Communities & AI-Built Tools](#youtube-blogs-courses-communities--ai-built-tools) (63)
- [🆕 Latest Additions](#latest-additions) (51)
- [Contributing](#contributing)
- [License](#license)


## Basics & Analog Electronics

| Name | Description | Tags |
|---|---|---|
| [Falstad CircuitJS (Circuit Simulator)](https://www.falstad.com/circuit/circuitjs.html) | Animated in-browser circuit simulator (GPLv2) that visualises current and voltage live, with hundreds of built-in example circuits. | `simulator` `basics` `analog` `open-source` `tool` `browser` |
| [ngspice](https://ngspice.sourceforge.io/) | Open-source mixed-signal SPICE engine (Berkeley Spice3f5 lineage) that reads PSPICE/LTspice models and powers KiCad, Qucs-S and others. | `simulator` `spice` `analog` `open-source` `tool` |
| [Qucs-S (Qucs with SPICE)](https://ra3xdh.github.io/) | Qt-based schematic GUI that drives free kernels (ngspice, Xyce, Qucsator) for DC, AC, transient and S-parameter simulation. | `simulator` `spice` `analog` `open-source` `tool` |
| [Xyce (Sandia National Labs)](https://github.com/Xyce/Xyce) | Open-source, SPICE-compatible, parallel analog circuit simulator for DC, transient, AC and noise analyses. | `simulator` `spice` `analog` `open-source` `tool` `github` |
| [PySpice](https://pyspice.fabrice-salvaire.fr/releases/latest/index.html) | GPLv3 Python module that drives ngspice/Xyce and returns results as NumPy arrays, ideal for scripted circuit experiments. | `simulator` `spice` `python` `open-source` `tool` |
| [KiCad SPICE Simulation](https://www.kicad.org/discover/spice/) | KiCad's schematic editor integrates ngspice for AC, DC, operating-point and transient simulation with probe-to-plot. | `simulator` `spice` `eda` `open-source` `tool` |
| [Oregano](https://github.com/drahnr/oregano) | GPL schematic capture and simulation app for Linux that uses ngspice or Gnucap as its engine. | `simulator` `spice` `open-source` `tool` `linux` |
| [GeckoCIRCUITS](https://github.com/geckocircuits/GeckoCIRCUITS) | GPLv3 fast circuit simulator from ETH Zurich optimised for power electronics with control and thermal modelling. | `simulator` `power-electronics` `analog` `open-source` `tool` `github` |
| [SimulIDE](https://simulide.com/p) | AGPLv3 real-time simulator for analog/digital circuits and microcontrollers (PIC, AVR, Arduino) aimed at students and hobbyists. | `simulator` `analog` `digital` `microcontroller` `open-source` `tool` |
| [LTspice (Analog Devices)](https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html) | Free, unlimited SPICE simulator with schematic capture and waveform viewer, widely used in industry for analog and SMPS design. | `simulator` `spice` `analog` `free (proprietary)` `tool` |
| [EEcircuit](https://github.com/eelab-dev/EEcircuit) | Browser-based ngspice compiled to WebAssembly; netlists and results stay local, with fast WebGL plotting and CSV export. | `simulator` `spice` `browser` `open-source` `tool` `github` |
| [Velxio Circuit Simulator](https://velxio.dev/circuit-simulator/) | AGPLv3 browser simulator running real ngspice in WebAssembly, able to co-simulate with Arduino/ESP32/Pico firmware; no account needed. | `simulator` `spice` `browser` `analog` `open-source` `tool` |
| [Spinning Numbers + Circuit Sandbox](https://spinningnumbers.org/) | Free EE lessons (charge to natural/forced response) by a former Khan Academy author, with the in-browser Circuit Sandbox simulator. | `basics` `course` `simulator` `free` `browser` |
| [PhET Circuit Construction Kit: DC](https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc) | University of Colorado HTML5 sim for building series/parallel circuits and measuring with virtual voltmeters and ammeters. | `basics` `physics-sim` `simulator` `free` `browser` |
| [PhET Circuit Construction Kit: AC](https://phet.colorado.edu/en/simulations/circuit-construction-kit-ac) | Free sim adding capacitors, inductors and AC sources to explore RC, RL and RLC behaviour visually. | `basics` `analog` `physics-sim` `simulator` `free` `browser` |
| [Tinkercad Circuits](https://www.tinkercad.com/circuits) | Autodesk's free browser breadboard simulator with multimeter, oscilloscope and Arduino/micro:bit code simulation (free account required). | `basics` `simulator` `arduino` `free (proprietary)` `browser` |
| [EasyEDA](https://easyeda.com/) | Free web/desktop EDA suite with ngspice-based simulation, schematic capture and PCB layout. | `simulator` `eda` `spice` `free (proprietary)` `browser` |
| [Lessons in Electric Circuits (Tony Kuphaldt)](https://www.ibiblio.org/kuphaldt/electricCircuits/) | Six-volume open textbook (DC, AC, Semiconductors, Digital, Reference, Experiments) under a Creative Commons/Design Science licence. | `book` `basics` `analog` `open-source` `free` |
| [All About Circuits Textbook](https://www.allaboutcircuits.com/textbook) | Web-formatted, community-updated edition of Lessons in Electric Circuits covering DC to semiconductors. | `book` `basics` `analog` `free` |
| [Semiconductor Devices: Theory and Application (Fiore)](https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/Semiconductor_Devices_-_Theory_and_Application_(Fiore)) | CC BY-NC-SA open textbook on diodes, BJTs, JFETs and MOSFETs with biasing and small-signal amplifier design. | `book` `analog` `semiconductors` `open-source` `free` |
| [Operational Amplifiers & Linear ICs (Fiore)](https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/Operational_Amplifiers_and_Linear_Integrated_Circuits_-_Theory_and_Application_(Fiore)) | Open textbook progressing from op-amp building blocks to filters, oscillators and A/D-D/A conversion. | `book` `analog` `op-amp` `open-source` `free` |
| [AC Electrical Circuit Analysis (Fiore)](https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/AC_Electrical_Circuit_Analysis%3A_A_Practical_Approach_(Fiore)) | Open textbook on phasors, impedance and series-parallel RLC analysis, companion to the DC volume. | `book` `basics` `ac` `open-source` `free` |
| [DC Electrical Circuit Analysis (Fiore)](https://open.umn.edu/opentextbooks/textbooks/dc-electrical-circuit-analysis-a-practical-approach-fiore) | Peer-reviewed open textbook on DC circuit theory through capacitors, inductors and magnetic circuits, in PDF/ODF. | `book` `basics` `dc` `open-source` `free` |
| [Jim Fiore Free Books & Lab Manuals (MVCC)](https://www2.mvcc.edu/users/faculty/jfiore/freebooks.html) | Hub of Creative Commons textbooks and lab manuals (DC, AC, semiconductors, op-amps) in PDF, ODT and HTML. | `book` `lab-manual` `basics` `analog` `open-source` `free` |
| [Electronics (Wikibooks)](https://en.wikibooks.org/wiki/Electronics) | CC BY-SA collaborative textbook covering DC/AC circuits, analog circuits and semiconductor basics. | `book` `basics` `analog` `open-source` `free` |
| [Analogue Electronics (Wikibooks)](https://en.wikibooks.org/wiki/Analogue_Electronics) | Open book on diodes, op-amps, BJTs and FETs as amplifiers and switches, building toward complex circuits. | `book` `analog` `open-source` `free` |
| [Op Amps for Everyone (TI, ed. Ron Mancini)](https://web.mit.edu/6.101/www/reference/op_amps_everyone.pdf) | Texas Instruments' classic free op-amp design reference (SLOD006B) from ideal equations to noise and layout. | `book` `analog` `op-amp` `free (proprietary)` |
| [Real Analog: Circuits 1 (Digilent)](https://digilent.com/reference/learn/courses/real-analog/start) | Free 12-chapter circuits textbook with hands-on design projects, op-amp chapter and lab exercises. | `book` `course` `basics` `analog` `free` |
| [Ultimate Electronics (CircuitLab textbook)](https://ultimateelectronicsbook.com/) | Free interactive online electronics textbook with embedded simulations; note the CircuitLab simulator itself is freemium. | `book` `basics` `analog` `free (proprietary)` |
| [MIT OCW 6.002 Circuits and Electronics](https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007) | Full MIT course with lecture videos, notes, problem sets and exams on lumped circuits, amplifiers and first/second-order networks. | `course` `basics` `analog` `free` `open-courseware` |
| [MIT OCW 6.101 Introductory Analog Electronics Lab](https://ocw.mit.edu/courses/6-101-introductory-analog-electronics-laboratory-spring-2007/) | Lab course with six projects on diodes, BJTs, JFETs and op-amps, emphasising design and debugging. | `course` `analog` `lab` `pbl-project` `free` `open-courseware` |
| [Khan Academy – Electrical Engineering](https://www.khanacademy.org/science/electrical-engineering) | Free nonprofit course covering circuit analysis, amplifiers, semiconductor devices and signals. | `course` `basics` `analog` `free` |
| [NPTEL Analog Electronic Circuits (IIT Kharagpur, Prof. Pradip Mandal)](https://nptel.ac.in/courses/108105158) | Free IIT course on BJT and MOSFET analog building blocks taught in parallel; optional paid proctored exam for certificate. | `course` `analog` `free` `india` |
| [NPTEL Analog Electronic Circuit (IIT Delhi, Prof. Shouribrata Chatterjee)](https://nptel.ac.in/courses/108102112) | Free MOS-based course aimed at designing an op-amp from first principles; certificate exam is optional and paid. | `course` `analog` `op-amp` `free` `india` |
| [NPTEL Analog Electronic Circuits (IIT Madras, Prof. Shanthi Pavan)](https://nptel.ac.in/courses/108106188) | Free lectures deriving analog circuits ground-up from first principles; optional paid certification. | `course` `analog` `free` `india` |
| [NPTEL Basic Electrical Circuits (IIT Hyderabad)](https://onlinecourses.nptel.ac.in/noc23_ee81/preview) | Free 12-week course on circuit elements, analysis techniques, theorems and op-amp negative feedback. | `course` `basics` `free` `india` |
| [NPTEL Analog Circuits and Systems through SPICE Simulation (IIT Kharagpur)](https://nptel.ac.in/courses/117105147) | Free course teaching analog circuit concepts through SPICE simulation exercises. | `course` `analog` `simulator` `spice` `free` `india` |
| [OpenLearn – An introduction to electronics](https://www.open.edu/openlearn/science-maths-technology/an-introduction-electronics) | Free Open University course using circuit design/simulation software to teach voltage, current, components and filtering. | `course` `basics` `free` |
| [TI Precision Labs – Op Amps](https://www.ti.com/video/series/precision-labs/ti-precision-labs-op-amps.html) | Free 60+ video analog curriculum with quizzes and SPICE labs on offset, bandwidth, noise and stability (optional paid EVM). | `course` `analog` `op-amp` `free (proprietary)` |
| [Analog Devices Electronics I & II Lab Activities](https://wiki.analog.com/university/labs/electronics) | Open lab write-ups (diodes, BJTs, MOS, op-amps, filters, oscillators) free for non-commercial education; designed for ADALM1000/2000 boards. | `course` `analog` `lab` `pbl-project` `open-source` |
| [Electronics Tutorials (electronics-tutorials.ws)](https://www.electronics-tutorials.ws/) | Free ad-supported tutorials on DC/AC theory, diodes, transistors, op-amps, filters and power electronics. | `blog` `basics` `analog` `free (proprietary)` |
| [Learn About Electronics](https://www.learnabout-electronics.org/) | Step-by-step modules on circuits, AC theory, semiconductors, amplifiers, oscillators and power supplies, plus free PDF handouts. | `blog` `basics` `analog` `free` |
| [Electronics Club](https://electronicsclub.info/) | Beginner-oriented reference on components and simple projects, also handy as a quick lookup. | `blog` `basics` `pbl-project` `free` |
| [SparkFun Learn – Where Do I Start?](https://learn.sparkfun.com/tutorials/where-do-i-start/all) | Free beginner tutorials on circuits, schematics, soldering and theory with project examples. | `blog` `basics` `tutorial` `free` |
| [Elliott Sound Products – Articles](https://sound-au.com/articles/index.htm) | Long-running free articles on opamps, transistors, 555 timers, filters and measurement by Rod Elliott. | `blog` `analog` `audio` `free` |
| [Afrotechmods](https://www.youtube.com/user/Afrotechmods) | Straight-to-the-point component and circuit tutorials from a professional electronics engineer. | `youtube` `basics` `free` |
| [w2aew](https://www.youtube.com/@w2aew) | Tutorials on basic electronics, circuit design and analysis, and oscilloscope technique by a Tektronix FAE. | `youtube` `basics` `analog` `test-measurement` `free` |
| [EEVblog](https://www.youtube.com/user/EEVblog) | Dave Jones' long-running channel with electronics tutorials, design walkthroughs and test-gear deep dives. | `youtube` `basics` `analog` `free` |
| [GreatScott! – Electronic Basics](https://www.youtube.com/playlist?list=PLAROrg3NQn7cyu01HpOv5BWo217XWBZu0) | 68-video playlist explaining components and core concepts such as LEDs and current-limiting resistors. | `youtube` `basics` `free` |
| [FesZ Electronics](https://www.youtube.com/@FesZElectronics) | Calm, methodical analog/RF tutorials that compare LTspice simulation with real measurements. | `youtube` `analog` `simulator` `free` |
| [FesZ – LTspice Tutorial Series](https://www.youtube.com/playlist?list=PLT84nve2j1g_wgGcm0Bv3K4RSl2Jdjsey) | 42-episode LTspice course from getting started to AC analysis, dependent sources and filters. | `youtube` `simulator` `spice` `analog` `free` |
| [Neso Academy – Analog Electronics](https://www.youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS) | 158-lecture series from semiconductor physics through BJTs, op-amps and power amplifiers; no prerequisites. | `youtube` `analog` `course` `free` |
| [ALL ABOUT ELECTRONICS](https://www.youtube.com/c/ALLABOUTELECTRONICS/playlists?app=desktop) | Theory-plus-solved-problem playlists on BJTs, op-amps, network analysis and analog electronics. | `youtube` `basics` `analog` `free` |
| [Behzad Razavi – Electronics 1 & 2 Lectures](https://www.youtube.com/playlist?list=PLyYrySVqmyVPzvVlPW-TTzHhNWg1J_0LU) | Full UCLA lecture series from Prof. Razavi on carriers, PN junctions, diodes, BJTs, MOSFETs and amplifier stages. | `youtube` `analog` `course` `free` |
| [MIT 6.002 Circuits and Electronics (YouTube)](https://www.youtube.com/playlist?list=PL9F74AFA03AA06A11) | 26 recorded lectures by Prof. Anant Agarwal accompanying the MIT OCW course. | `youtube` `basics` `analog` `course` `free` |
| [ElectroBOOM](https://www.youtube.com/@ElectroBOOM) | Humorous but educational videos explaining electrical concepts, safety and common pitfalls. | `youtube` `basics` `safety` `free` |
| [Lessons in Electric Circuits Vol. VI – Experiments](https://www.ibiblio.org/kuphaldt/electricCircuits/Exper/EXP.pdf) | Free experiment book with hands-on builds such as transistor amplifiers and 555 timer circuits. | `pbl-project` `book` `basics` `analog` `open-source` |
| [Audio Amp (open-source teaching kit)](https://audioamp.github.io/) | TAPR open-hardware audio kit teaching op-amp and transistor stages, oscilloscope use and PCB soldering. | `pbl-project` `analog` `audio` `open-source` `hardware` |
| [Op Amp Discovery Board](https://github.com/rick-ecircuit/op-amp-discovery-prototyping-board) | Open hybrid breadboard/PCB trainer for exploring 20+ classic op-amp circuits with on-board supply and signal source. | `pbl-project` `analog` `op-amp` `open-source` `github` |
| [shabaz123/discrete_amps](https://github.com/shabaz123/discrete_amps) | Discrete transistor amplifier designs with KiCad schematics/PCBs and KiCad SPICE simulation workbooks. | `pbl-project` `analog` `audio` `simulator` `open-source` `github` |
| [prydin/classab-amp – 50 W Class AB Amplifier](https://github.com/prydin/classab-amp) | Learning-oriented class AB power amp project with KiCad layout and LTspice simulations. | `pbl-project` `analog` `audio` `spice` `open-source` `github` |
| [Krishnarjunmitra/Analog-Projects](https://github.com/Krishnarjunmitra/Analog-Projects) | LTspice project collection from single-stage amplifiers and current mirrors to op-amps, data converters and PLLs. | `pbl-project` `analog` `spice` `github` |
| [LOCKDOWN – Open-Source Analog Lock-In Amplifier](https://hackaday.io/project/190799-lockdown-an-open-source-analog-lock-in-amplifier) | Advanced Hackaday.io build using nine op-amps, Sallen-Key filters and analog multipliers to recover tiny signals. | `pbl-project` `analog` `op-amp` `open-source` `hackaday` |
| [Elliott Sound Products – Project Index](https://sound-au.com/projects.htm) | Hundreds of free, simulated/tested audio and analog project write-ups (preamps, power amps, filters, meters). | `pbl-project` `analog` `audio` `free` |
| [555 Timer Circuits](https://www.555-timer-circuits.com/) | Explains 555 internals and operating modes, then offers dozens of buildable beginner circuits. | `pbl-project` `basics` `analog` `free` |
| [KiCad/ngspice Simulation Examples (ngspice maintainer)](https://forum.kicad.info/t/simulation-examples-for-kicad-eeschema-ngspice/34443) | Downloadable KiCad + ngspice example projects for audio amplifiers, oscillators and power supplies. | `pbl-project` `simulator` `spice` `open-source` |
| [kitspace/awesome-electronics](https://github.com/kitspace/awesome-electronics) | CC0 curated list of learning resources, tools, blogs, forums and videos for electronic engineers and hobbyists. | `awesome-list` `basics` `analog` `open-source` `github` |
| [ajaymnk/open-electronics](https://github.com/ajaymnk/open-electronics) | Curated list of books, communities, software, courses and websites for electronics enthusiasts. | `awesome-list` `basics` `github` |
| [victorbouvet/Roadmap](https://github.com/victorbouvet/Roadmap) | An electronics engineering student's resource roadmap with focus on analog design, semiconductors and RF. | `awesome-list` `analog` `github` |
| [Reddit – Best resources to learn analog electronics](https://www.reddit.com/r/ElectroBOOM/comments/1rey6zq/best_resources_to_learn_analog_electronics) | Community thread recommending EEVblog, FesZ, electronics-tutorials.ws and other free analog learning resources. | `community` `reddit` `analog` `free` |

<sub>[⬆ back to top](#contents)</sub>

## Digital Electronics, FPGA & VLSI

| Name | Description | Tags |
|---|---|---|
| [Logisim-evolution](https://github.com/logisim-evolution/logisim-evolution) | Educational GUI tool for designing and simulating digital logic circuits, with VHDL export and FPGA support. | `digital-electronics` `simulator` `tool` `open-source` |
| [Digital (hneemann)](https://github.com/hneemann/Digital) | Easy-to-use digital logic designer and simulator for teaching, with Verilog/VHDL export and FPGA board support. | `digital-electronics` `simulator` `tool` `open-source` |
| [CircuitVerse](https://circuitverse.org/) | Free browser-based digital circuit simulator with a community of shareable circuits and learning material. | `digital-electronics` `simulator` `tool` `open-source` |
| [DigitalJS Online](https://digitaljs.tilk.eu/) | Web-based simulator that synthesizes Verilog with Yosys and visualizes the resulting circuit interactively. | `digital-electronics` `fpga` `simulator` `tool` `open-source` |
| [Nandgame](https://nandgame.com/) | Free browser puzzle game where you build a working computer starting from NAND gates. | `digital-electronics` `computer-architecture` `course` `open-source` |
| [nand2tetris](https://www.nand2tetris.org/) | Free project-based course and materials for building a full computer system from NAND gates up to an OS. | `computer-architecture` `digital-electronics` `course` `book` |
| [Putting the You in CPU (cpu.land)](https://cpu.land/) | Free illustrated long-form explainer on how CPUs actually run programs, from syscalls to multitasking. | `computer-architecture` `blog` `book` |
| [MIT OCW 6.004 Computation Structures](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/) | Free MIT course covering digital logic, sequential circuits, and building a RISC processor. | `computer-architecture` `digital-electronics` `course` |
| [ETH Zurich Digital Design and Computer Architecture (Onur Mutlu)](https://safari.ethz.ch/digitaltechnik/spring2024/doku.php) | Free university course with recorded lectures, slides, and labs on digital design and computer architecture. | `computer-architecture` `digital-electronics` `course` |
| [Onur Mutlu Lectures](https://www.youtube.com/@OnurMutluLectures) | YouTube channel with full free lecture series on digital design and advanced computer architecture. | `computer-architecture` `youtube` |
| [Ben Eater](https://www.youtube.com/@BenEater) | YouTube channel building an 8-bit breadboard computer and 6502 computer from scratch with clear explanations. | `digital-electronics` `computer-architecture` `youtube` |
| [Ben Eater 8-bit Computer](https://eater.net/8bit) | Free schematics and video series for building a programmable 8-bit computer on breadboards. | `computer-architecture` `digital-electronics` `pbl-project` |
| [HDLBits](https://hdlbits.01xz.net/) | Free in-browser Verilog practice problems with automatic simulation-based checking. | `fpga` `digital-electronics` `course` |
| [ChipVerify](https://www.chipverify.com/) | Free tutorials on Verilog, SystemVerilog, UVM, and digital verification concepts. | `vlsi` `fpga` `course` `blog` |
| [ASIC World](https://www.asic-world.com/) | Long-running free tutorial site for Verilog, VHDL, SystemVerilog, and digital design basics. | `vlsi` `fpga` `course` |
| [FPGA Designs with Verilog and SystemVerilog](https://verilogguide.readthedocs.io/) | Free open guide to FPGA design with Verilog/SystemVerilog, including worked examples. | `fpga` `book` `open-source` |
| [ZipCPU Blog](https://zipcpu.com/) | In-depth blog on FPGA design, formal verification, and building a soft CPU by Dan Gisselquist. | `fpga` `blog` |
| [fpga4fun](https://www.fpga4fun.com/) | Classic free site of FPGA tutorials and small projects such as serial interfaces, VGA, and music boxes. | `fpga` `blog` `pbl-project` |
| [Project F](https://projectf.io/) | Free FPGA tutorials and open-source designs covering graphics, maths, and hardware fundamentals. | `fpga` `blog` `pbl-project` `open-source` |
| [Lushay Labs Learn](https://learn.lushaylabs.com/) | Free step-by-step tutorial series on FPGA development with open-source toolchains on Tang Nano boards. | `fpga` `course` `pbl-project` |
| [learn-fpga (Bruno Levy)](https://github.com/BrunoLevy/learn-fpga) | Tutorials building a RISC-V processor step by step on small FPGAs using open-source tools. | `fpga` `computer-architecture` `pbl-project` `open-source` |
| [Nandland](https://www.youtube.com/@Nandland) | YouTube channel with beginner-friendly FPGA, Verilog, and VHDL tutorials. | `fpga` `youtube` |
| [Zero to ASIC (Matt Venn) YouTube](https://www.youtube.com/@ZeroToASICcourse) | Free YouTube videos on open-source ASIC design, Tiny Tapeout, and chip fabrication. | `vlsi` `youtube` |
| [EDA Playground](https://www.edaplayground.com/) | Free browser-based environment to run Verilog/VHDL/SystemVerilog simulations with many simulators (registration required). | `fpga` `vlsi` `simulator` `tool` `free (proprietary)` |
| [Yosys](https://github.com/YosysHQ/yosys) | Open-source framework for Verilog RTL synthesis targeting FPGAs and ASICs. | `fpga` `vlsi` `tool` `open-source` |
| [nextpnr](https://github.com/YosysHQ/nextpnr) | Portable open-source FPGA place-and-route tool for iCE40, ECP5, Gowin, and other families. | `fpga` `tool` `open-source` |
| [OSS CAD Suite](https://github.com/YosysHQ/oss-cad-suite-build) | Prebuilt nightly bundle of open-source EDA tools (Yosys, nextpnr, Verilator, GTKWave, etc.) for all major OSes. | `fpga` `vlsi` `tool` `open-source` |
| [Project IceStorm](https://github.com/YosysHQ/icestorm) | Reverse-engineered bitstream documentation and tools for Lattice iCE40 FPGAs. | `fpga` `tool` `open-source` |
| [Project Trellis](https://github.com/YosysHQ/prjtrellis) | Documentation and tools enabling a fully open bitstream flow for Lattice ECP5 FPGAs. | `fpga` `tool` `open-source` |
| [Project Apicula](https://github.com/YosysHQ/apicula) | Open-source bitstream documentation and tools for Gowin FPGAs such as those on Tang Nano boards. | `fpga` `tool` `open-source` |
| [F4PGA](https://github.com/f4pga/f4pga) | Open-source FPGA toolchain project (formerly SymbiFlow) targeting Xilinx 7-series and other devices. | `fpga` `tool` `open-source` |
| [SymbiYosys (sby)](https://github.com/YosysHQ/sby) | Front-end driver for Yosys-based formal hardware verification flows. | `fpga` `vlsi` `tool` `open-source` |
| [Verilator](https://github.com/verilator/verilator) | Fast open-source Verilog/SystemVerilog simulator that compiles designs to C++ models. | `fpga` `vlsi` `simulator` `tool` `open-source` |
| [Icarus Verilog](https://github.com/steveicarus/iverilog) | Open-source Verilog compiler and event-driven simulator. | `fpga` `vlsi` `simulator` `tool` `open-source` |
| [GHDL](https://github.com/ghdl/ghdl) | Open-source VHDL analyzer, compiler, and simulator, with Yosys synthesis plugin. | `fpga` `vlsi` `simulator` `tool` `open-source` |
| [GTKWave](https://github.com/gtkwave/gtkwave) | Fully featured open-source waveform viewer for VCD, FST, and other dump formats. | `fpga` `vlsi` `tool` `open-source` |
| [Surfer](https://surfer-project.org/) | Modern, extensible open-source waveform viewer that runs natively or in the browser. | `fpga` `vlsi` `tool` `open-source` |
| [Verible](https://github.com/chipsalliance/verible) | SystemVerilog parser, linter, and formatter suite from CHIPS Alliance. | `fpga` `vlsi` `tool` `open-source` |
| [cocotb](https://www.cocotb.org/) | Python-based coroutine testbench framework for verifying VHDL and Verilog designs. | `fpga` `vlsi` `tool` `open-source` |
| [Amaranth HDL](https://github.com/amaranth-lang/amaranth) | Modern Python-based hardware description language and toolchain. | `fpga` `vlsi` `tool` `open-source` |
| [SpinalHDL](https://github.com/SpinalHDL/SpinalHDL) | Scala-based hardware description language that generates Verilog/VHDL. | `fpga` `vlsi` `tool` `open-source` |
| [Chisel](https://www.chisel-lang.org/) | Scala-embedded hardware construction language used for RISC-V cores like Rocket. | `fpga` `vlsi` `tool` `open-source` |
| [LiteX](https://github.com/enjoy-digital/litex) | Python framework for building FPGA SoCs with CPUs, DRAM, Ethernet, and other cores. | `fpga` `tool` `open-source` |
| [OpenROAD](https://github.com/The-OpenROAD-Project/OpenROAD) | Open-source RTL-to-GDSII physical design engine for floorplanning, placement, CTS, and routing. | `vlsi` `tool` `open-source` |
| [OpenROAD Flow Scripts](https://github.com/The-OpenROAD-Project/OpenROAD-flow-scripts) | Ready-to-run RTL-to-GDS flow built on OpenROAD for several open PDKs. | `vlsi` `tool` `open-source` |
| [OpenLane](https://github.com/The-OpenROAD-Project/OpenLane) | Automated RTL-to-GDSII ASIC flow combining Yosys, OpenROAD, Magic, KLayout, and more. | `vlsi` `tool` `open-source` |
| [Magic VLSI](http://opencircuitdesign.com/magic/) | Open-source VLSI layout editor with DRC and parasitic extraction. | `vlsi` `tool` `open-source` |
| [KLayout](https://www.klayout.de/) | Open-source GDS/OASIS layout viewer and editor with DRC/LVS scripting. | `vlsi` `tool` `open-source` |
| [Xschem](https://xschem.sourceforge.io/stefan/index.html) | Open-source schematic capture tool for analog and mixed-signal IC design. | `vlsi` `tool` `open-source` |
| [Netgen](https://github.com/RTimothyEdwards/netgen) | Open-source netlist comparison (LVS) tool used in open ASIC flows. | `vlsi` `tool` `open-source` |
| [SkyWater SKY130 PDK](https://github.com/google/skywater-pdk) | Open-source 130 nm process design kit enabling free, manufacturable chip design. | `vlsi` `tool` `open-source` |
| [GlobalFoundries GF180MCU PDK](https://github.com/google/gf180mcu-pdk) | Open-source 180 nm process design kit from GlobalFoundries and Google. | `vlsi` `tool` `open-source` |
| [IHP SG13G2 Open PDK](https://github.com/IHP-GmbH/IHP-Open-PDK) | Open-source 130 nm BiCMOS process design kit from IHP. | `vlsi` `tool` `open-source` |
| [Caravel Harness](https://github.com/efabless/caravel) | Open-source SoC harness for placing user projects on open-PDK shuttle chips. | `vlsi` `pbl-project` `open-source` |
| [Tiny Tapeout](https://tinytapeout.com/) | Educational project with free guides and templates for designing a small digital chip on open PDKs (fabrication slots cost money). | `vlsi` `course` `pbl-project` `open-source` |
| [PicoRV32](https://github.com/YosysHQ/picorv32) | Size-optimized open-source RISC-V CPU core in Verilog. | `computer-architecture` `fpga` `pbl-project` `open-source` |
| [SERV](https://github.com/olofk/serv) | Award-winning bit-serial RISC-V CPU, one of the smallest open cores. | `computer-architecture` `fpga` `pbl-project` `open-source` |
| [NEORV32](https://github.com/stnolting/neorv32) | Customizable, well-documented RISC-V microcontroller SoC in VHDL. | `computer-architecture` `fpga` `pbl-project` `open-source` |
| [VexRiscv](https://github.com/SpinalHDL/VexRiscv) | FPGA-friendly, configurable RISC-V CPU written in SpinalHDL. | `computer-architecture` `fpga` `pbl-project` `open-source` |
| [Ibex](https://github.com/lowRISC/ibex) | Production-quality 32-bit RISC-V core in SystemVerilog maintained by lowRISC. | `computer-architecture` `vlsi` `pbl-project` `open-source` |
| [ZipCPU](https://github.com/ZipCPU/zipcpu) | Open-source 32-bit soft CPU designed for FPGAs, with formal proofs. | `computer-architecture` `fpga` `pbl-project` `open-source` |
| [awesome-opensource-hardware](https://github.com/aolofsson/awesome-opensource-hardware) | Curated list of open-source silicon-proven hardware designs and EDA tools. | `vlsi` `fpga` `open-source` |
| [awesome-opensource-asic-resources](https://github.com/mattvenn/awesome-opensource-asic-resources) | Curated list of open-source ASIC tools, PDKs, and learning resources. | `vlsi` `open-source` |
| [awesome-fpga](https://github.com/Vitorian/awesome-fpga) | Curated list of FPGA boards, cores, toolchains, and tutorials. | `fpga` `open-source` |
| [WaveDrom](https://wavedrom.com/) | Open-source tool for rendering digital timing diagrams from text descriptions. | `digital-electronics` `tool` `open-source` |
| [r/FPGA](https://www.reddit.com/r/FPGA/) | Active Reddit community for FPGA design questions, projects, and career advice. | `fpga` `community` |
| [r/chipdesign](https://www.reddit.com/r/chipdesign/) | Reddit community for ASIC/VLSI design discussion, including analog and digital IC design. | `vlsi` `community` |
| [AMD Vivado ML Standard Edition](https://www.amd.com/en/products/software/adaptive-socs-and-fpgas/vivado.html) | Vendor FPGA design suite whose Standard edition is free for supported AMD/Xilinx devices. | `fpga` `tool` `free (proprietary)` |
| [Intel Quartus Prime Lite](https://www.intel.com/content/www/us/en/software-kit/quartus-prime-lite.html) | Vendor FPGA design suite whose Lite edition is free for supported Intel/Altera devices. | `fpga` `tool` `free (proprietary)` |

<sub>[⬆ back to top](#contents)</sub>

## PCB Design

| Name | Description | Tags |
|---|---|---|
| [KiCad EDA](https://www.kicad.org/) | Full-featured GPL cross-platform suite for schematic capture, PCB layout, 3D viewing and Gerber output with no feature limits. | `pcb` `tool` `open-source` `eda` |
| [LibrePCB](https://librepcb.org/) | Beginner-friendly GPL schematic and PCB editor with a strongly curated, unified part library system. | `pcb` `tool` `open-source` `eda` |
| [Horizon EDA](https://horizon-eda.org/) | GPL EDA package with a pool-based part library and a fast interactive router, aimed at professional workflows. | `pcb` `tool` `open-source` `eda` |
| [Fritzing (source code)](https://github.com/fritzing/fritzing-app) | Breadboard-to-PCB tool whose source is GPLv3 and free to build, but official ready-made installers on fritzing.org require a payment (about $12 personal). | `pcb` `tool` `open-source` `eda` `beginner` |
| [gEDA Project](http://www.geda-project.org/) | Long-running GPL suite of schematic, netlist and PCB tools for Linux/Unix users. | `pcb` `tool` `open-source` `eda` |
| [pcb-rnd](http://repo.hu/projects/pcb-rnd/) | Actively maintained GPL modular PCB editor descended from gEDA PCB, with many import/export formats. | `pcb` `tool` `open-source` `eda` |
| [FreeCAD](https://www.freecad.org/) | LGPL parametric 3D CAD for designing enclosures and checking mechanical fit around PCBs. | `pcb` `tool` `open-source` `mechanical` |
| [KiCad StepUp (FreeCAD workbench)](https://github.com/easyw/kicadStepUpMod) | FreeCAD workbench that syncs KiCad board outlines and 3D models to STEP for ECAD-MCAD collaboration. | `pcb` `tool` `open-source` `mechanical` |
| [atopile](https://atopile.io/) | MIT-licensed language and compiler for describing circuits as code, with reusable modules that build KiCad layouts. | `pcb` `tool` `open-source` `code-based-design` |
| [SKiDL](https://github.com/devbisme/skidl) | Python library to describe circuit netlists in code and export them to KiCad and other tools. | `pcb` `tool` `open-source` `code-based-design` `python` |
| [tscircuit](https://github.com/tscircuit/tscircuit) | MIT-licensed TypeScript/React framework for designing schematics and PCBs as code with autorouting and Gerber export. | `pcb` `tool` `open-source` `code-based-design` |
| [InteractiveHtmlBom](https://github.com/openscopeproject/InteractiveHtmlBom) | KiCad plugin that generates an interactive HTML BOM highlighting each part on the board for hand assembly. | `pcb` `tool` `open-source` `assembly` |
| [KiBot](https://github.com/INTI-CMNB/KiBot) | Automates KiCad fabrication outputs (Gerbers, BOMs, PDFs, 3D renders) from a single YAML config, CI-friendly. | `pcb` `tool` `open-source` `automation` |
| [KiCanvas](https://kicanvas.org/) | MIT-licensed in-browser viewer for KiCad schematics and boards, handy for sharing designs from GitHub. | `pcb` `tool` `open-source` `viewer` |
| [KiKit](https://github.com/yaqwsx/KiKit) | KiCad toolkit for panelization, fab-ready output and multi-board projects. | `pcb` `tool` `open-source` `fabrication` |
| [PcbDraw](https://github.com/yaqwsx/PcbDraw) | Converts KiCad boards into clean 2D drawings and pinout diagrams for documentation. | `pcb` `tool` `open-source` `documentation` |
| [kicad-jlcpcb-tools](https://github.com/Bouni/kicad-jlcpcb-tools) | KiCad plugin to assign LCSC parts and produce JLCPCB-ready BOM and placement files. | `pcb` `tool` `open-source` `fabrication` |
| [Import-LIB-KiCad-Plugin](https://github.com/Steffen-W/Import-LIB-KiCad-Plugin) | KiCad plugin that imports downloaded symbol/footprint ZIPs from part-library sites in one step. | `pcb` `tool` `open-source` `library` |
| [pcb2blender](https://github.com/30350n/pcb2blender) | Exports KiCad boards to Blender for photorealistic renders, useful for content creation. | `pcb` `tool` `open-source` `rendering` |
| [Freerouting](https://github.com/freerouting/freerouting) | GPL autorouter that works with KiCad and other EDA tools via Specctra DSN files. | `pcb` `tool` `open-source` `autorouter` |
| [gerbv](https://gerbv.github.io/) | GPL Gerber and Excellon drill file viewer for checking fabrication outputs before ordering. | `pcb` `tool` `open-source` `viewer` |
| [tracespace](https://tracespace.io/) | Open-source in-browser Gerber viewer that renders board previews from your fab files. | `pcb` `tool` `open-source` `viewer` |
| [Saturn PCB Toolkit](https://saturnpcb.com/saturn-pcb-toolkit/) | Freeware Windows calculator suite for trace current (IPC-2152), via current, impedance, crosstalk and more. | `pcb` `tool` `calculator` `free (proprietary)` |
| [Sierra Circuits PCB Tools](https://www.protoexpress.com/tools/) | Free online calculators for impedance, trace width, via design and stack-ups from a PCB fab house. | `pcb` `tool` `calculator` `free (proprietary)` |
| [JLCPCB Impedance Calculator](https://jlcpcb.com/impedance) | Free online controlled-impedance calculator using JLCPCB's real stack-ups. | `pcb` `tool` `calculator` `free (proprietary)` |
| [KiCad Official Symbol Library](https://gitlab.com/kicad/libraries/kicad-symbols) | Official CC-BY-SA KiCad schematic symbol library maintained by the KiCad librarians. | `pcb` `library` `open-source` |
| [KiCad Official Footprint Library](https://gitlab.com/kicad/libraries/kicad-footprints) | Official KiCad footprint library following the KiCad Library Conventions. | `pcb` `library` `open-source` |
| [KiCad Official 3D Models](https://gitlab.com/kicad/libraries/kicad-packages3D) | Official STEP/WRL 3D models matching KiCad footprints for 3D views and MCAD export. | `pcb` `library` `open-source` |
| [SparkFun KiCad Libraries](https://github.com/sparkfun/SparkFun-KiCad-Libraries) | SparkFun's open KiCad symbols and footprints for parts used across their open-hardware boards. | `pcb` `library` `open-source` |
| [Digi-Key KiCad Library](https://github.com/Digi-Key/digikey-kicad-library) | Atomic KiCad symbol/footprint library tied to Digi-Key part numbers. | `pcb` `library` `open-source` |
| [Espressif KiCad Libraries](https://github.com/espressif/kicad-libraries) | Official Espressif KiCad symbols, footprints and 3D models for ESP32 chips and modules. | `pcb` `library` `open-source` |
| [Fritzing Parts](https://github.com/fritzing/fritzing-parts) | CC-BY-SA core parts library used by Fritzing. | `pcb` `library` `open-source` |
| [PCB Cupid – KiCad for Beginners](https://learn.pcbcupid.com/pcb-design/design/kicad/introduction-on-kicad) | Free step-by-step online KiCad lessons from schematic to layout for beginners. | `pcb` `course` `free (proprietary)` `kicad` `beginner` |
| [KiCad Documentation](https://docs.kicad.org/) | Official KiCad manuals for every editor and tool, free and openly licensed. | `pcb` `course` `open-source` `kicad` `docs` |
| [Getting Started in KiCad](https://docs.kicad.org/9.0/en/getting_started_in_kicad/getting_started_in_kicad.html) | Official KiCad tutorial that walks through a complete first board from schematic to Gerbers. | `pcb` `course` `open-source` `kicad` `beginner` |
| [Phil's Lab](https://www.youtube.com/@PhilsLab) | In-depth KiCad and mixed-signal hardware design tutorials, from STM32 boards to high-speed layout. | `pcb` `youtube` `learning` |
| [Robert Feranec](https://www.youtube.com/@RobertFeranec) | Free PCB layout, high-speed design and expert interview videos with designers like Rick Hartley. | `pcb` `youtube` `learning` |
| [EEVblog](https://www.youtube.com/@EEVblog) | Dave Jones' electronics engineering videos covering design, debugging, teardowns and PCB tips. | `pcb` `youtube` `learning` |
| [Contextual Electronics (YouTube)](https://www.youtube.com/@ContextualElectronics) | Free KiCad walkthroughs and hardware design streams by Chris Gammell (the paid membership site is separate). | `pcb` `youtube` `learning` `kicad` |
| [Zach Peterson](https://www.youtube.com/@ZachPeterson) | Free videos on PCB layout, signal integrity, EMI and design-for-manufacturing. | `pcb` `youtube` `learning` |
| [Sierra Circuits PCB Design Guides](https://www.protoexpress.com/pcb-design-guides/) | Free downloadable eBooks on DFM, HDI, high-speed, stack-up, impedance and EMI design (email form). | `pcb` `blog` `free (proprietary)` `ebook` |
| [Sierra Circuits Knowledge Base](https://www.protoexpress.com/kb/pcb-design-resources/) | Free articles on layout rules, DFM/DFA mistakes and KiCad guides from a PCB fab house. | `pcb` `blog` `free (proprietary)` |
| [Hardware Design with RP2040](https://datasheets.raspberrypi.com/rp2040/hardware-design-with-rp2040.pdf) | Free Raspberry Pi guide walking through a minimal RP2040 board design with KiCad files. | `pcb` `course` `free (proprietary)` `reference-design` |
| [KiCad Forum](https://forum.kicad.info/) | Official KiCad community forum for layout questions, library help and design reviews. | `pcb` `community` `open-source` `kicad` |
| [EEVblog Forum](https://www.eevblog.com/forum/) | Large free engineering forum with dedicated PCB/EDA and project sections. | `pcb` `community` `learning` |
| [r/PrintedCircuitBoard](https://www.reddit.com/r/PrintedCircuitBoard/) | Reddit community for free schematic and layout reviews before you order boards. | `pcb` `community` `design-review` |
| [awesome-kicad](https://github.com/joanbono/awesome-kicad) | Curated list of KiCad plugins, libraries, scripts and resources. | `pcb` `awesome-list` `open-source` `kicad` |
| [Hack Club Hackpad](https://github.com/hackclub/hackpad) | Beginner open-hardware project: design your own macropad PCB in KiCad with guided docs. | `pcb` `pbl-project` `open-source` `beginner` |
| [Hack Club OnBoard](https://github.com/hackclub/OnBoard) | Repository of student-designed open PCB projects with guides for designing a first board. | `pcb` `pbl-project` `open-source` |
| [Corne Keyboard (crkbd)](https://github.com/foostan/crkbd) | Open-source split keyboard with full KiCad PCB files, a popular intermediate build. | `pcb` `pbl-project` `open-source` |
| [Ploopy Classic Trackball](https://github.com/ploopyco/classic-trackball) | Open-hardware trackball with KiCad PCB, 3D-printable case and firmware. | `pcb` `pbl-project` `open-source` |
| [LumenPnP](https://github.com/opulo-inc/lumenpnp) | Open-source desktop pick-and-place machine with PCBs, mechanical CAD and docs. | `pcb` `pbl-project` `open-source` `fabrication` |
| [HackRF One](https://github.com/greatscottgadgets/hackrf) | Open-source software-defined radio with complete KiCad hardware design files, an advanced RF reference. | `pcb` `pbl-project` `open-source` `rf` |
| [OSHWA Certified Projects](https://certification.oshwa.org/list.html) | Directory of certified open-source hardware projects with links to their design files. | `pcb` `pbl-project` `open-source` `directory` |
| [Hackaday.io](https://hackaday.io/) | Free platform with thousands of documented hardware builds for project ideas and design files. | `pcb` `pbl-project` `community` |

<sub>[⬆ back to top](#contents)</sub>

## Embedded Systems & IoT

| Name | Description | Tags |
|---|---|---|
| [Rust Embedded Working Group (GitHub)](https://github.com/rust-embedded) | Official Rust Embedded WG organization hosting cortex-m, embedded-hal, svd2rust, the Embedded Rust Book and other core crates. | `embedded` `rust` `open-source` `community` |
| [freeCodeCamp – Embedded Systems Firmware Basics Handbook](https://www.freecodecamp.org/news/learn-embedded-systems-firmware-basics-handbook-for-devs/) | Free long-form handbook covering microcontroller firmware fundamentals such as registers, GPIO, interrupts, timers and peripherals for developers new to embedded. | `embedded` `firmware` `c` `course` `book` |
| [freeCodeCamp – Learn C with Dr. Chuck (K&R)](https://www.freecodecamp.org/news/learn-c-programming-classic-book-dr-chuck/) | Free video course by Dr. Charles Severance walking through the classic K&R 'The C Programming Language' book, the foundation for firmware work. | `embedded` `c` `course` `book` `youtube` |
| [ParlezVousTech – I2C vs SPI vs UART Compared](https://www.parlezvoustech.com/en/comparaison-protocoles-communication-i2c-spi-uart/) | Free article comparing the I2C, SPI and UART serial protocols in wiring, speed, addressing and typical use cases. | `embedded` `protocols` `i2c` `spi` `uart` `blog` |
| [PlayEmbedded – ARM Cortex Clock Tree 101](https://playembedded.org/blog/arm-cortex-clock-tree-101/) | Free tutorial explaining how the clock tree (oscillators, PLLs, prescalers) of ARM Cortex-M microcontrollers like STM32 works and how to configure it. | `embedded` `arm-cortex` `stm32` `blog` |
| [Learn Arduino – Interactive 3D Lessons](https://learn-arduino-red.vercel.app/) | Free interactive site with 16 beginner lessons where you wire LEDs, buttons, sensors, motors and servos on a 3D Arduino board and run the code. | `embedded` `arduino` `course` `simulator` |
| [esp-idf-ssd1306 BalloonDemo (nopnop2002)](https://github.com/nopnop2002/esp-idf-ssd1306/tree/master/BalloonDemo) | Open-source ESP-IDF demo that animates balloons on an SSD1306 OLED, part of a full I2C/SPI SSD1306 driver repo for ESP32. | `embedded` `esp32` `esp-idf` `display` `pbl-project` `open-source` |
| [μDrive (Microdrive)](https://github.com/justimepassnow/Microdrive) | OSHWA-certified open hardware/firmware project (MIT, CERN-OHL-P) that turns a plain DC motor into a PID closed-loop smart servo with a single-wire UART bus and Web Serial dashboard. | `embedded` `robotics` `micropython` `motor-control` `pbl-project` `open-source` |
| [Zephyr Project](https://www.zephyrproject.org/) | Linux Foundation open-source RTOS supporting hundreds of boards with a full networking, Bluetooth and device-driver stack. | `embedded` `rtos` `iot` `open-source` |
| [FreeRTOS](https://www.freertos.org/) | MIT-licensed real-time kernel for microcontrollers with free documentation, tutorials and the 'Mastering the FreeRTOS Kernel' book. | `embedded` `rtos` `c` `open-source` |
| [Apache NuttX](https://nuttx.apache.org/) | Apache-licensed POSIX-compliant RTOS that scales from 8-bit to 64-bit microcontrollers and powers PX4 drones. | `embedded` `rtos` `posix` `open-source` |
| [RIOT OS](https://www.riot-os.org/) | Open-source operating system for low-power IoT devices with IPv6/6LoWPAN networking and multi-threading. | `embedded` `rtos` `iot` `open-source` |
| [ChibiOS](https://www.chibios.org/) | Compact open-source RTOS and HAL (ChibiOS/RT and ChibiOS/HAL) widely used on STM32, with free docs and articles on PlayEmbedded. | `embedded` `rtos` `stm32` `open-source` |
| [RT-Thread](https://github.com/RT-Thread/rt-thread) | Apache-2.0 IoT-focused RTOS with a component/package ecosystem and support for many ARM Cortex-M and RISC-V chips. | `embedded` `rtos` `iot` `open-source` |
| [Tock OS](https://www.tockos.org/) | Secure embedded operating system written in Rust for Cortex-M and RISC-V that isolates untrusted applications. | `embedded` `rtos` `rust` `security` `open-source` |
| [RTIC (Real-Time Interrupt-driven Concurrency)](https://rtic.rs/) | Open-source Rust framework for building statically scheduled, interrupt-driven concurrent firmware on Cortex-M. | `embedded` `rust` `rtos` `open-source` |
| [Embassy](https://embassy.dev/) | Open-source async Rust framework with HALs for STM32, nRF and RP2040/RP2350 plus networking, USB and BLE support. | `embedded` `rust` `async` `open-source` |
| [The Embedded Rust Book](https://docs.rust-embedded.org/book/) | Free official book teaching embedded Rust on Cortex-M microcontrollers, from setup to peripherals, concurrency and interop with C. | `embedded` `rust` `arm-cortex` `book` |
| [Discovery Book (Embedded Rust)](https://docs.rust-embedded.org/discovery/) | Free hands-on beginner book teaching microcontroller programming in Rust with the micro:bit board. | `embedded` `rust` `course` `book` |
| [Awesome Embedded Rust](https://github.com/rust-embedded/awesome-embedded-rust) | Curated list of embedded Rust HALs, board support crates, drivers, tools and learning resources. | `embedded` `rust` `awesome-list` `open-source` |
| [The Rust on ESP Book](https://docs.esp-rs.org/book/) | Free official guide to developing Rust firmware for Espressif ESP32 chips, both bare-metal (no_std) and on ESP-IDF (std). | `embedded` `rust` `esp32` `book` |
| [esp-rs (GitHub)](https://github.com/esp-rs) | Community organization with esp-hal, esp-wifi, espflash and other open-source crates for Rust on ESP32. | `embedded` `rust` `esp32` `open-source` |
| [rp-hal](https://github.com/rp-rs/rp-hal) | Open-source Rust HAL and board support crates for the Raspberry Pi RP2040 and RP2350 microcontrollers. | `embedded` `rust` `rp2040` `open-source` |
| [stm32f4xx-hal](https://github.com/stm32-rs/stm32f4xx-hal) | Open-source Rust embedded-hal implementation for STM32F4 microcontrollers such as the popular 'Black Pill' boards. | `embedded` `rust` `stm32` `open-source` |
| [defmt](https://github.com/knurling-rs/defmt) | Highly efficient deferred-formatting logging framework for resource-constrained embedded Rust devices. | `embedded` `rust` `tool` `open-source` |
| [probe-rs](https://probe.rs/) | Open-source toolkit for flashing and debugging ARM and RISC-V microcontrollers through common debug probes, with VS Code integration. | `embedded` `rust` `debugging` `tool` `open-source` |
| [OpenOCD](https://openocd.org/) | Open On-Chip Debugger for flashing and debugging microcontrollers over JTAG/SWD with GDB. | `embedded` `debugging` `arm-cortex` `tool` `open-source` |
| [Black Magic Probe](https://github.com/blackmagic-debug/blackmagic) | Open-source JTAG/SWD debug probe firmware with an embedded GDB server, runnable on low-cost boards. | `embedded` `debugging` `hardware` `tool` `open-source` |
| [GDB – GNU Debugger](https://www.gnu.org/software/gdb/) | Free GNU debugger used with OpenOCD, probe-rs or QEMU to step through and inspect firmware. | `embedded` `debugging` `tool` `open-source` |
| [Arm GNU Toolchain](https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads) | Free GCC-based cross-compiler toolchain (arm-none-eabi) for building bare-metal ARM Cortex firmware. | `embedded` `arm-cortex` `c` `tool` `open-source` |
| [sigrok / PulseView](https://sigrok.org/) | Open-source signal analysis suite supporting many cheap logic analyzers with protocol decoders for I2C, SPI, UART and more. | `embedded` `debugging` `logic-analyzer` `tool` `open-source` |
| [Renode](https://renode.io/) | Open-source framework that simulates complete embedded systems and networks of MCUs to run unmodified firmware for testing and CI. | `embedded` `simulator` `iot` `tool` `open-source` |
| [QEMU](https://www.qemu.org/) | Open-source machine emulator that can emulate ARM Cortex-M boards for testing firmware without hardware. | `embedded` `simulator` `arm-cortex` `tool` `open-source` |
| [SimulIDE](https://simulide.com/) | GPL open-source real-time circuit simulator that runs AVR, Arduino and PIC firmware alongside the schematic (source code freely available). | `embedded` `simulator` `arduino` `tool` `open-source` |
| [ESP-IDF](https://github.com/espressif/esp-idf) | Espressif's official Apache-2.0 IoT development framework for ESP32 chips, built on FreeRTOS. | `embedded` `esp32` `iot` `sdk` `open-source` |
| [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/) | Free official documentation covering ESP-IDF setup, APIs, Wi-Fi, BLE and peripherals for ESP32. | `embedded` `esp32` `docs` `book` |
| [Arduino-ESP32 Core](https://github.com/espressif/arduino-esp32) | Official open-source Arduino core that lets you program ESP32 chips with the Arduino API and IDE. | `embedded` `esp32` `arduino` `open-source` |
| [Arduino IDE](https://www.arduino.cc/en/software) | Free, open-source official IDE for writing and uploading sketches to Arduino and many compatible boards. | `embedded` `arduino` `tool` `open-source` |
| [PlatformIO](https://platformio.org/) | Open-source cross-platform build system and VS Code IDE extension supporting 1,500+ boards and many frameworks. | `embedded` `tool` `open-source` |
| [Raspberry Pi Pico SDK](https://github.com/raspberrypi/pico-sdk) | Official BSD-licensed C/C++ SDK for programming RP2040 and RP2350 microcontrollers. | `embedded` `rp2040` `c` `sdk` `open-source` |
| [Raspberry Pi Pico Examples](https://github.com/raspberrypi/pico-examples) | Official collection of example programs for the Pico SDK covering GPIO, PIO, ADC, I2C, SPI, USB and wireless. | `embedded` `rp2040` `c` `pbl-project` `open-source` |
| [STM32CubeF4](https://github.com/STMicroelectronics/STM32CubeF4) | STMicroelectronics' official open-source HAL/LL drivers, CMSIS and middleware with examples for STM32F4 MCUs. | `embedded` `stm32` `c` `sdk` `open-source` |
| [libopencm3](https://github.com/libopencm3/libopencm3) | Open-source low-level firmware library for ARM Cortex-M microcontrollers from ST, NXP, TI and others. | `embedded` `arm-cortex` `stm32` `c` `open-source` |
| [Bare Metal Programming Guide](https://github.com/cpq/bare-metal-programming-guide) | Free step-by-step guide to programming an STM32 microcontroller from scratch using only GCC and a datasheet, no frameworks. | `embedded` `arm-cortex` `stm32` `c` `course` `open-source` |
| [MicroPython](https://micropython.org/) | Lean open-source Python 3 implementation that runs on microcontrollers like ESP32, RP2040 and STM32. | `embedded` `python` `esp32` `rp2040` `open-source` |
| [CircuitPython](https://circuitpython.org/) | Adafruit's beginner-friendly open-source Python for microcontrollers with drag-and-drop code editing. | `embedded` `python` `education` `open-source` |
| [LVGL](https://github.com/lvgl/lvgl) | MIT-licensed embedded graphics library for building GUIs on small displays with any MCU. | `embedded` `graphics` `display` `open-source` |
| [MCUboot](https://github.com/mcu-tools/mcuboot) | Open-source secure bootloader for 32-bit MCUs supporting signed images and over-the-air firmware updates. | `embedded` `bootloader` `security` `open-source` |
| [Interrupt (by Memfault)](https://interrupt.memfault.com/blog/) | Free in-depth blog on professional firmware engineering topics like debugging, build systems, Rust, RTOS and testing. | `embedded` `firmware` `blog` |
| [Embedded Artistry](https://embeddedartistry.com/) | Embedded software blog with many free articles, field notes and curated reading lists on firmware architecture and practices. | `embedded` `firmware` `blog` |
| [Beningo Embedded Group Blog](https://www.beningo.com/blog/) | Free articles by Jacob Beningo on modern embedded software, RTOS, architecture and DevOps for firmware. | `embedded` `firmware` `blog` |
| [Embedded.fm Podcast](https://www.embedded.fm/) | Free podcast about embedded systems, hardware and engineering careers hosted by Elecia and Christopher White. | `embedded` `podcast` `community` |
| [Random Nerd Tutorials](https://randomnerdtutorials.com/) | Hundreds of free step-by-step ESP32, ESP8266, Arduino and Raspberry Pi project tutorials. | `embedded` `esp32` `arduino` `iot` `blog` `pbl-project` |
| [Adafruit Learning System](https://learn.adafruit.com/) | Thousands of free project guides and tutorials for Arduino, CircuitPython and electronics. | `embedded` `arduino` `circuitpython` `pbl-project` `course` |
| [Jonathan Valvano's Embedded Systems Resources (UT Austin)](https://users.ece.utexas.edu/~valvano/) | Free course materials, labs, starter code and e-book chapters from UT Austin's 'Embedded Systems – Shape the World' author. | `embedded` `arm-cortex` `course` `book` |
| [Modern Embedded Systems Programming (Miro Samek)](https://www.state-machine.com/video-course) | Free video course on YouTube covering embedded C on ARM Cortex-M from basics through RTOS, state machines and active objects. | `embedded` `arm-cortex` `rtos` `course` `youtube` |
| [Low Byte Productions (YouTube)](https://www.youtube.com/@LowByteProductions) | Free YouTube channel with deep-dive series on bare-metal programming, bootloaders and low-level systems. | `embedded` `arm-cortex` `youtube` |
| [Shawn Hymel (YouTube)](https://www.youtube.com/@ShawnHymel) | Free tutorials on embedded systems, FreeRTOS, Zephyr, edge AI and electronics. | `embedded` `rtos` `tinyml` `youtube` |
| [DigiKey (YouTube)](https://www.youtube.com/@DigiKey) | Free video series including 'Introduction to RTOS' and 'Introduction to Zephyr' plus many maker tutorials. | `embedded` `rtos` `zephyr` `youtube` |
| [ControllersTech (YouTube)](https://www.youtube.com/@ControllersTech) | Free STM32 tutorials covering HAL, peripherals, FreeRTOS and interfacing sensors and displays. | `embedded` `stm32` `youtube` |
| [Andreas Spiess (YouTube)](https://www.youtube.com/@AndreasSpiess) | Free videos testing ESP32, LoRa, sensors and IoT gear with practical maker projects. | `embedded` `esp32` `iot` `lora` `youtube` |
| [The Rusty Bits (YouTube)](https://www.youtube.com/@TheRustyBits) | Free YouTube tutorials on embedded Rust, from basics to Embassy and real microcontroller projects. | `embedded` `rust` `youtube` |
| [Node-RED](https://nodered.org/) | Open-source flow-based low-code tool for wiring together devices, APIs and MQTT in IoT applications. | `iot` `automation` `tool` `open-source` |
| [ESPHome](https://esphome.io/) | Open-source system that builds custom ESP32/ESP8266 firmware from simple YAML configs, integrating with Home Assistant. | `iot` `esp32` `home-automation` `tool` `open-source` |
| [Home Assistant](https://www.home-assistant.io/) | Open-source local home automation platform integrating thousands of devices and services. | `iot` `home-automation` `open-source` |
| [Tasmota](https://tasmota.github.io/docs/) | Open-source alternative firmware for ESP8266/ESP32 smart devices with MQTT, web UI and local control. | `iot` `esp32` `home-automation` `firmware` `open-source` |
| [ThingsBoard Community Edition](https://thingsboard.io/) | Apache-2.0 IoT platform (Community Edition) for device management, data collection, rule engine and dashboards. | `iot` `platform` `dashboard` `open-source` |
| [Eclipse Mosquitto](https://mosquitto.org/) | Lightweight open-source MQTT broker for connecting IoT devices and services. | `iot` `mqtt` `tool` `open-source` |
| [Grafana OSS](https://grafana.com/oss/grafana/) | Open-source (AGPL) visualization platform for building dashboards from IoT sensor data and time-series databases. | `iot` `dashboard` `tool` `open-source` |
| [InfluxDB OSS](https://github.com/influxdata/influxdb) | Open-source time-series database commonly used to store IoT telemetry. | `iot` `database` `time-series` `open-source` |
| [The Things Network Docs](https://www.thethingsnetwork.org/docs/) | Free documentation on LoRaWAN, gateways and devices for the community-run The Things Network. | `iot` `lora` `lorawan` `docs` |
| [The Things Stack (LoRaWAN Stack)](https://github.com/TheThingsNetwork/lorawan-stack) | Open-source LoRaWAN network server stack behind The Things Network, self-hostable. | `iot` `lora` `lorawan` `open-source` |
| [ChirpStack](https://www.chirpstack.io/) | Open-source LoRaWAN network server for running your own private LoRa network. | `iot` `lora` `lorawan` `open-source` |
| [RadioLib](https://github.com/jgromes/RadioLib) | Open-source Arduino library supporting LoRa, FSK and many other radio modules and protocols. | `iot` `lora` `arduino` `open-source` |
| [Meshtastic](https://meshtastic.org/) | Open-source off-grid LoRa mesh messaging firmware for ESP32 and nRF52 boards. | `iot` `lora` `esp32` `pbl-project` `open-source` |
| [InfiniTime](https://github.com/InfiniTimeOrg/InfiniTime) | Open-source smartwatch firmware for the PineTime built on FreeRTOS and nRF52, a great real-world firmware codebase. | `embedded` `bluetooth` `freertos` `pbl-project` `open-source` |
| [QMK Firmware](https://github.com/qmk/qmk_firmware) | Open-source keyboard firmware for AVR and ARM MCUs, a popular hands-on embedded project. | `embedded` `keyboard` `c` `pbl-project` `open-source` |
| [Awesome Embedded (nhivp)](https://github.com/nhivp/Awesome-Embedded) | Curated list of embedded programming resources: MCUs, RTOSes, books, courses and tools. | `embedded` `awesome-list` `open-source` |
| [Awesome Embedded Systems (embedded-boston)](https://github.com/embedded-boston/awesome-embedded-systems) | Curated list of embedded systems articles, books, courses and tools. | `embedded` `awesome-list` `open-source` |
| [r/embedded (Reddit)](https://www.reddit.com/r/embedded/) | Active free Reddit community for embedded engineers sharing questions, career advice and resources. | `embedded` `community` |

<sub>[⬆ back to top](#contents)</sub>

## Robotics, PLC, Drones & Motor Control

| Name | Description | Tags |
|---|---|---|
| [Drone Lab (Drone Engineer)](https://drone-engineer.vercel.app/) | Free browser-based drone lab where you build a quad part by part, check thrust-to-weight and flight time, then fly it in angle/acro modes, gate races and FPV view. | `drone` `simulator` `tool` |
| [ROS 2 (Robot Operating System)](https://www.ros.org/) | Open-source middleware, drivers and tooling that form the standard software framework for building robot applications. | `robotics` `tool` `open-source` |
| [ROS 2 Documentation & Tutorials](https://docs.ros.org/en/jazzy/) | Official free ROS 2 docs with beginner-to-advanced tutorials on nodes, topics, services, launch files and tf2. | `robotics` `course` `open-source` |
| [RViz2](https://github.com/ros2/rviz) | Open-source 3D visualizer for ROS 2 sensor data, robot models, transforms and planning output. | `robotics` `tool` `open-source` |
| [ros2_control](https://control.ros.org/) | Open-source ROS 2 framework for hardware interfaces and real-time controllers driving robot joints and actuators. | `robotics` `motor-control` `tool` `open-source` |
| [Nav2 (ROS 2 Navigation)](https://docs.nav2.org/) | Open-source ROS 2 navigation stack for mapping, localization, path planning and obstacle avoidance on mobile robots. | `robotics` `tool` `open-source` |
| [micro-ROS](https://micro.ros.org/) | Open-source framework that brings ROS 2 onto microcontrollers such as ESP32, STM32 and Raspberry Pi Pico. | `robotics` `tool` `open-source` |
| [ROS-Industrial](https://rosindustrial.org/) | Open-source project extending ROS to industrial robots, PLC-connected cells and manufacturing automation. | `robotics` `plc` `tool` `open-source` |
| [MoveIt 2](https://moveit.ai/) | Open-source motion-planning framework for robot arms covering kinematics, collision checking, grasping and trajectory execution. | `robotics` `tool` `open-source` |
| [Gazebo](https://gazebosim.org/) | Open-source 3D robotics simulator with physics, sensor models and tight ROS 2, PX4 and ArduPilot integration. | `robotics` `drone` `simulator` `open-source` |
| [Webots](https://cyberbotics.com/) | Apache-licensed desktop robot simulator with a large library of robots, sensors and ROS 2 support. | `robotics` `simulator` `open-source` |
| [CoppeliaSim (Edu)](https://www.coppeliarobotics.com/) | Versatile robot simulator whose Edu edition is free for students, teachers and hobbyists (commercial use requires a paid licence). | `robotics` `simulator` `free (proprietary)` |
| [MuJoCo](https://mujoco.org/) | Open-source fast physics engine for robotics, legged locomotion and reinforcement-learning research. | `robotics` `simulator` `open-source` |
| [PyBullet](https://pybullet.org/) | Open-source Python physics simulation for robots, grasping and reinforcement learning. | `robotics` `simulator` `open-source` |
| [Drake](https://drake.mit.edu/) | MIT/TRI open-source toolbox for multibody dynamics, optimization-based planning and control of robots. | `robotics` `simulator` `tool` `open-source` |
| [PythonRobotics](https://github.com/AtsushiSakai/PythonRobotics) | Open-source collection of Python implementations of localization, SLAM, path-planning and control algorithms with animations. | `robotics` `open-source` `pbl-project` |
| [Kalman and Bayesian Filters in Python](https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python) | Free interactive Jupyter book teaching Kalman, EKF, UKF and particle filters for sensor fusion. | `robotics` `drone` `book` `open-source` |
| [Awesome Robotics (kiloreux)](https://github.com/kiloreux/awesome-robotics) | Curated GitHub list of robotics software, courses, books, papers and competitions. | `robotics` `open-source` |
| [Awesome ROS 2](https://github.com/fkromer/awesome-ros2) | Curated GitHub list of ROS 2 packages, tutorials, tools and community resources. | `robotics` `open-source` |
| [ArduPilot](https://ardupilot.org/) | Open-source autopilot firmware for multicopters, planes, rovers, boats and submarines, with full docs and SITL simulation. | `drone` `robotics` `tool` `open-source` |
| [PX4 Autopilot](https://px4.io/) | Open-source professional flight-control stack for drones and VTOLs with Gazebo simulation and MAVLink support. | `drone` `tool` `open-source` |
| [PX4 User & Developer Guide](https://docs.px4.io/main/en/) | Free official guide covering PX4 airframe assembly, tuning, simulation and flight-controller development. | `drone` `course` `open-source` |
| [Betaflight](https://betaflight.com/) | Open-source flight-controller firmware and configurator focused on FPV racing and freestyle quadcopters. | `drone` `tool` `open-source` |
| [INAV](https://github.com/iNavFlight/inav) | Open-source navigation-capable flight firmware for multirotors and fixed-wings with GPS return-to-home and waypoints. | `drone` `tool` `open-source` |
| [Rotorflight](https://www.rotorflight.org/) | Open-source flight-control firmware tailored to RC helicopters, derived from Betaflight. | `drone` `tool` `open-source` |
| [QGroundControl](https://qgroundcontrol.com/) | Open-source ground control station for configuring, mission-planning and flying PX4 and ArduPilot vehicles. | `drone` `tool` `open-source` |
| [Mission Planner](https://ardupilot.org/planner/) | Open-source Windows ground station for ArduPilot with mission planning, log analysis and parameter tuning. | `drone` `tool` `open-source` |
| [MAVLink](https://mavlink.io/) | Open lightweight messaging protocol used between drones, autopilots and ground stations, with libraries in many languages. | `drone` `tool` `open-source` |
| [MAVSDK](https://github.com/mavlink/MAVSDK) | Open-source SDK (C++, Python and more) for writing companion-computer and ground apps that control MAVLink drones. | `drone` `tool` `open-source` |
| [ExpressLRS](https://www.expresslrs.org/) | Open-source long-range, low-latency RC radio link firmware for drones and RC aircraft. | `drone` `tool` `open-source` |
| [EdgeTX](https://www.edgetx.org/) | Open-source firmware for RC transmitter radios with Lua scripting and model management. | `drone` `tool` `open-source` |
| [Bitcraze Crazyflie (open firmware)](https://www.bitcraze.io/) | Open-source firmware, Python libraries and docs for the Crazyflie nano-quadcopter research and education platform. | `drone` `open-source` `pbl-project` |
| [ROSflight](https://rosflight.org/) | Open-source lean autopilot designed for research that offloads high-level control to ROS on a companion computer. | `drone` `robotics` `tool` `open-source` |
| [Paparazzi UAV](https://github.com/paparazzi/paparazzi) | Open-source autopilot system for fixed-wing and multirotor UAVs, with ground station and simulation. | `drone` `tool` `open-source` |
| [Oscar Liang](https://oscarliang.com/) | Free in-depth blog guides on building, configuring and tuning FPV drones with Betaflight, ExpressLRS and EdgeTX. | `drone` `blog` |
| [OpenPLC (Autonomy Logic)](https://autonomylogic.com/) | Open-source IEC 61131-3 PLC runtime and editor that turns Arduino, ESP32 or Raspberry Pi into a soft PLC. | `plc` `tool` `open-source` |
| [OpenPLC Runtime v3 (GitHub)](https://github.com/thiagoralves/OpenPLC_v3) | Source code of the OpenPLC runtime supporting Modbus, DNP3 and ladder, ST, FBD programs. | `plc` `tool` `open-source` |
| [Beremiz](https://beremiz.org/) | Open-source integrated development environment for IEC 61131-3 PLC programming in all five languages. | `plc` `tool` `open-source` |
| [Eclipse 4diac](https://eclipse.dev/4diac/) | Open-source IEC 61499 distributed-automation IDE and runtime (FORTE) for industrial control. | `plc` `tool` `open-source` |
| [CODESYS Development System](https://store.codesys.com/) | Free-to-download IEC 61131-3 PLC IDE with built-in soft-PLC simulation (vendor runtime licences sold separately). | `plc` `tool` `simulator` `free (proprietary)` |
| [PLC Fiddle](https://www.plcfiddle.com/) | Free browser-based ladder-logic simulator for writing and testing PLC rungs without hardware. | `plc` `simulator` `tool` |
| [PyModbus](https://github.com/pymodbus-dev/pymodbus) | Open-source Python Modbus client/server for talking to PLCs and simulating industrial devices. | `plc` `tool` `open-source` |
| [libplctag](https://github.com/libplctag/libplctag) | Open-source library for reading and writing tags on Allen-Bradley and Modbus PLCs over EtherNet/IP. | `plc` `tool` `open-source` |
| [open62541](https://www.open62541.org/) | Open-source C implementation of OPC UA for connecting PLCs, SCADA and IIoT devices. | `plc` `tool` `open-source` |
| [LinuxCNC](https://linuxcnc.org/) | Open-source real-time machine controller for CNC mills, lathes, robots and motion systems. | `plc` `motor-control` `tool` `open-source` |
| [SimpleFOC](https://simplefoc.com/) | Open-source Arduino-compatible field-oriented control library and boards for BLDC and stepper motors. | `motor-control` `tool` `open-source` |
| [SimpleFOC Studio](https://github.com/simplefoc/SimpleFOCStudio) | Open-source GUI for tuning and monitoring SimpleFOC motor controllers in real time. | `motor-control` `tool` `open-source` |
| [VESC Project](https://vesc-project.com/) | Open-source BLDC/FOC electronic speed controller hardware, firmware and VESC Tool used in e-skates, e-bikes and robots. | `motor-control` `power-electronics` `tool` `open-source` |
| [VESC BLDC Firmware](https://github.com/vedderb/bldc) | Open-source VESC motor-controller firmware source with FOC, sensorless observers and current control. | `motor-control` `power-electronics` `open-source` |
| [ODrive Firmware (v3, open-source)](https://github.com/odriverobotics/ODrive) | Open-source firmware and tools for the ODrive v3 high-performance dual BLDC servo controller. | `motor-control` `robotics` `open-source` |
| [moteus](https://github.com/mjbots/moteus) | Open-source firmware and design files for the moteus brushless servo controller used in legged robots. | `motor-control` `robotics` `open-source` |
| [Falstad CircuitJS](https://www.falstad.com/circuit/) | Open-source in-browser animated circuit simulator, great for visualising buck/boost converters and inverters. | `power-electronics` `simulator` `open-source` |
| [OpenModelica](https://openmodelica.org/) | Open-source Modelica environment for multi-domain modelling of electrical drives, power systems and mechatronics. | `power-electronics` `motor-control` `robotics` `simulator` `open-source` |
| [Scilab Xcos](https://www.scilab.org/software/xcos) | Open-source block-diagram dynamic-system simulator in Scilab, a free alternative to Simulink. | `power-electronics` `motor-control` `simulator` `open-source` |
| [MIT 6.622 Power Electronics (OCW)](https://ocw.mit.edu/courses/6-622-power-electronics-spring-2023/) | Free MIT OpenCourseWare lectures, notes and problem sets on converters, magnetics and control. | `power-electronics` `course` |
| [Modern Robotics (Northwestern)](https://hades.mech.northwestern.edu/index.php/Modern_Robotics) | Free textbook PDF, video lectures and software from Lynch & Park covering kinematics, dynamics, planning and control. | `robotics` `book` `course` |
| [Modern Robotics Code Library](https://github.com/NxRLab/ModernRobotics) | Open-source Python, MATLAB and Mathematica code accompanying the Modern Robotics book. | `robotics` `open-source` |
| [MIT 6.4210 Robotic Manipulation](https://manipulation.csail.mit.edu/) | Russ Tedrake's free online course notes and Drake-based exercises on perception, planning and manipulation. | `robotics` `course` `book` |
| [MIT Underactuated Robotics](https://underactuated.mit.edu/) | Free online course notes and videos on dynamics and control of walking robots, drones and other underactuated systems. | `robotics` `course` `book` |
| [Duckietown](https://docs.duckietown.com/) | Open-source autonomous-driving education platform with free docs, software and self-paced learning materials. | `robotics` `course` `open-source` `pbl-project` |
| [Articulated Robotics](https://articulatedrobotics.xyz/) | Free tutorial site by Josh Newans walking through building a ROS 2 mobile robot from URDF to SLAM and navigation. | `robotics` `blog` `course` |
| [articubot_one](https://github.com/joshnewans/articubot_one) | Open-source ROS 2 differential-drive robot package that accompanies the Articulated Robotics build series. | `robotics` `pbl-project` `open-source` |
| [TurtleBot3 e-Manual](https://emanual.robotis.com/docs/en/platform/turtlebot3/overview/) | Free official guide to TurtleBot3 with ROS 2 SLAM, navigation and Gazebo simulation tutorials. | `robotics` `course` `open-source` |
| [linorobot2](https://github.com/linorobot/linorobot2) | Open-source ROS 2 package for building your own 2WD, 4WD or mecanum robot with micro-ROS firmware. | `robotics` `pbl-project` `open-source` |
| [OpenCat (Petoi)](https://github.com/PetoiCamp/OpenCat) | Open-source quadruped robot-pet framework for Arduino and ESP32 with gait and posture code. | `robotics` `pbl-project` `open-source` |
| [Stanford Pupper](https://github.com/stanfordroboticsclub/StanfordQuadruped) | Open-source low-cost quadruped robot design and Raspberry Pi control code from Stanford Student Robotics. | `robotics` `pbl-project` `open-source` |
| [NASA JPL Open Source Rover](https://github.com/nasa-jpl/open-source-rover) | Open-source build plans and code for a six-wheel rocker-bogie rover made from off-the-shelf parts. | `robotics` `pbl-project` `open-source` |
| [BCN3D Moveo](https://github.com/BCN3D/BCN3D-Moveo) | Open-source 3D-printable five-axis robot arm with build instructions for education. | `robotics` `pbl-project` `open-source` |
| [James Bruton (YouTube)](https://www.youtube.com/@jamesbruton) | Free videos on building ambitious open-source robots, exoskeletons and actuators from scratch. | `robotics` `motor-control` `youtube` |
| [Articulated Robotics (YouTube)](https://www.youtube.com/@ArticulatedRobotics) | Free step-by-step ROS 2 video tutorials for building and simulating a real mobile robot. | `robotics` `youtube` |
| [The Construct (YouTube)](https://www.youtube.com/@TheConstruct) | Free ROS and ROS 2 tutorial videos and live classes (the separate Academy platform is paid and not included). | `robotics` `youtube` |
| [Robotics Back-End (YouTube)](https://www.youtube.com/@roboticsbackend) | Free beginner-friendly ROS 2 and Raspberry Pi programming tutorials. | `robotics` `youtube` |
| [Joop Brokking (YouTube)](https://www.youtube.com/@JoopBrokking) | Free videos on building an Arduino quadcopter flight controller from scratch, including PID and gyro code. | `drone` `youtube` |
| [Joshua Bardwell (YouTube)](https://www.youtube.com/@JoshuaBardwell) | Free in-depth FPV drone build, Betaflight tuning and troubleshooting videos. | `drone` `youtube` |
| [Painless360 (YouTube)](https://www.youtube.com/@Painless360) | Free tutorials on INAV, ArduPilot, EdgeTX radios and RC aircraft setup. | `drone` `youtube` |
| [RealPars (YouTube)](https://www.youtube.com/@realpars) | Free animated explainer videos on PLCs, SCADA, HMIs, VFDs and industrial automation. | `plc` `youtube` |
| [PLC Guru (YouTube)](https://www.youtube.com/@PLCGuru) | Free PLC programming tutorials covering ladder logic and practical automation examples. | `plc` `youtube` |
| [PLC Professor (YouTube)](https://www.youtube.com/@plcprofessor) | Free lecture-style PLC and industrial controls videos for learners. | `plc` `youtube` |
| [Brian Douglas (YouTube)](https://www.youtube.com/@BrianDouglas) | Free intuitive videos on control theory, PID, state-space and Kalman filtering. | `motor-control` `robotics` `drone` `youtube` |
| [Steve Brunton (YouTube)](https://www.youtube.com/@SteveBrunton) | Free university-level lectures on control bootcamp, system dynamics and data-driven control. | `motor-control` `robotics` `youtube` |
| [ELECTRONOOBS (YouTube)](https://www.youtube.com/@electronoobs) | Free projects on DIY ESCs, BLDC drivers, PID drones and power electronics with schematics. | `drone` `motor-control` `power-electronics` `youtube` |

<sub>[⬆ back to top](#contents)</sub>

## RF, SDR, Antennas & DSP

| Name | Description | Tags |
|---|---|---|
| [GNU Radio](https://www.gnuradio.org/) | Free open-source toolkit with a graphical flowgraph editor for building software-defined radio and signal-processing systems. | `sdr` `dsp` `communication` `tool` `open-source` |
| [SDR++](https://www.sdrpp.org/) | Lightweight cross-platform open-source SDR receiver app supporting RTL-SDR, HackRF, Airspy and more. | `sdr` `tool` `open-source` |
| [SDRangel](https://github.com/f4exb/sdrangel) | Open-source SDR receiver/transmitter frontend with many built-in modulators, demodulators and decoders. | `sdr` `communication` `tool` `open-source` |
| [Gqrx](https://gqrx.dk/) | Open-source SDR receiver for Linux and macOS built on GNU Radio and Qt, ideal for exploring the spectrum. | `sdr` `tool` `open-source` |
| [inspectrum](https://github.com/miek/inspectrum) | Open-source tool for visually analysing captured radio signal recordings to reverse-engineer modulation and timing. | `sdr` `dsp` `tool` `open-source` |
| [Universal Radio Hacker](https://github.com/jopohl/urh) | Open-source suite for investigating and reverse-engineering unknown wireless protocols from SDR captures. | `sdr` `communication` `tool` `open-source` |
| [openEMS](https://openems.de/) | Free open-source 3D FDTD electromagnetic field solver scriptable from Octave/MATLAB or Python for antennas and RF structures. | `rf` `antenna` `simulator` `open-source` |
| [4nec2](https://www.qsl.net/4nec2/) | Free (proprietary) Windows NEC2/NEC4-based antenna modelling and optimisation tool with 3D pattern plots. | `antenna` `simulator` `tool` |
| [NEC2 resources (nec2.org)](https://www.nec2.org/) | Hub for the public-domain Numerical Electromagnetics Code (NEC2) wire-antenna simulator, its manuals and related software. | `antenna` `simulator` `open-source` |
| [scikit-rf](https://scikit-rf.org/) | Open-source Python library for RF/microwave network analysis, Touchstone files, calibration and Smith charts. | `rf` `tool` `open-source` |
| [QucsStudio](https://qucsstudio.de/) | Free (proprietary) circuit simulator with S-parameter, harmonic balance and filter/matching synthesis tools. | `rf` `simulator` `tool` |
| [Sonnet Lite](https://www.sonnetsoftware.com/products/lite/) | Free (proprietary, registration required) feature-limited planar 3D EM simulator for microstrip and PCB RF structures. | `rf` `antenna` `simulator` |
| [SPLAT!](https://www.qsl.net/kd2bd/splat.html) | Open-source RF signal propagation, loss and terrain analysis tool for planning radio links. | `rf` `communication` `tool` `open-source` |
| [NanoVNA-Saver](https://github.com/NanoVNA-Saver/nanovna-saver) | Open-source PC app for controlling NanoVNA vector network analysers, capturing sweeps and plotting Smith charts. | `rf` `antenna` `tool` `open-source` |
| [Online Smith Chart Tool](https://www.will-kelsey.com/smith_chart/) | Free (proprietary) browser-based interactive Smith chart for impedance matching with lumped and transmission-line elements. | `rf` `calculator` `tool` |
| [Microwaves101](https://www.microwaves101.com/) | Free reference site with microwave engineering encyclopedia articles and downloadable RF calculators. | `rf` `antenna` `blog` `calculator` |
| [Antenna-Theory.com](https://www.antenna-theory.com/) | Free tutorial site explaining antenna fundamentals, antenna types, measurements and impedance matching. | `antenna` `rf` `course` `blog` |
| [PySDR: A Guide to SDR and DSP using Python](https://pysdr.org/) | Free open-source textbook teaching wireless communications, DSP and SDR hands-on with Python. | `sdr` `dsp` `book` `open-source` |
| [The Scientist and Engineer's Guide to DSP](https://www.dspguide.com/) | Free full online book by Steven W. Smith covering practical digital signal processing. | `dsp` `book` |
| [Think DSP](https://greenteapress.com/wp/think-dsp/) | Free CC-licensed book by Allen Downey teaching signal processing through Python code. | `dsp` `book` `open-source` |
| [Julius O. Smith III Online Books (CCRMA)](https://ccrma.stanford.edu/~jos/) | Free online books on DFT math, digital filters, physical audio and spectral audio signal processing. | `dsp` `book` |
| [DSPRelated](https://www.dsprelated.com/) | Free community site with DSP articles, blogs, code snippets, forums and free books. | `dsp` `communication` `blog` |
| [DSPIllustrations](https://dspillustrations.com/) | Free illustrated tutorials with Python code on signals, Fourier analysis and digital communications. | `dsp` `communication` `blog` |
| [Complex to Real](https://www.complextoreal.com/) | Free intuitive tutorials on digital communications, modulation, OFDM and channel coding. | `communication` `dsp` `blog` |
| [Wireless Pi](https://www.wirelesspi.com/) | Free articles explaining wireless communication and DSP concepts with intuition and figures. | `communication` `dsp` `sdr` `blog` |
| [GNU Octave Signal Package](https://octave.sourceforge.io/signal/) | Open-source signal processing package for GNU Octave with filter design, windowing and spectral tools. | `dsp` `tool` `open-source` |
| [liquid-dsp](https://github.com/jgaeddert/liquid-dsp) | Open-source C library for digital communications and SDR DSP blocks like filters, modems and synchronisers. | `dsp` `sdr` `communication` `tool` `open-source` |
| [SoapySDR](https://github.com/pothosware/SoapySDR) | Open-source vendor-neutral SDR hardware abstraction library used by many SDR applications. | `sdr` `tool` `open-source` |
| [MIT 6.02 Digital Communication Systems](https://ocw.mit.edu/courses/6-02-introduction-to-eecs-ii-digital-communication-systems-fall-2012/) | Free MIT OCW course on digital communication, coding, modulation and networking with lecture notes. | `communication` `dsp` `course` |
| [MIT 6.450 Principles of Digital Communications I](https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/) | Free graduate-level MIT OCW course with video lectures on source coding, modulation and detection. | `communication` `course` |
| [MIT 6.341 Discrete-Time Signal Processing](https://ocw.mit.edu/courses/6-341-discrete-time-signal-processing-fall-2005/) | Free MIT OCW course covering advanced discrete-time signal processing, filter design and spectral analysis. | `dsp` `course` |
| [MIT 6.003 Signals and Systems](https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/) | Free MIT OCW course with video lectures on continuous and discrete-time signals and systems. | `dsp` `course` |
| [Software Defined Radio with HackRF (Michael Ossmann)](https://greatscottgadgets.com/sdr/) | Free video course by Michael Ossmann teaching SDR and DSP fundamentals using HackRF and GNU Radio. | `sdr` `course` `youtube` |
| [HackRF Documentation](https://hackrf.readthedocs.io/) | Official open documentation for the open-source HackRF One SDR, covering hardware, tools and firmware. | `sdr` `tool` `open-source` |
| [RTL-SDR Blog](https://www.rtl-sdr.com/) | Free blog with news, tutorials and project ideas for low-cost RTL-SDR dongles and other SDRs. | `sdr` `blog` |
| [Signal Identification Wiki](https://www.sigidwiki.com/) | Free community wiki for identifying radio signals by sound, waterfall and frequency. | `sdr` `communication` `ham-radio` `blog` |
| [WebSDR](https://www.websdr.org/) | Free (proprietary) network of web-accessible SDR receivers worldwide that you can tune from a browser. | `sdr` `ham-radio` `tool` |
| [OpenWebRX](https://www.openwebrx.de/) | Open-source multi-user web SDR receiver with built-in digital-mode decoders. | `sdr` `ham-radio` `tool` `open-source` |
| [WSJT-X](https://wsjt.sourceforge.io/) | Open-source weak-signal digital communication software for FT8, FT4, WSPR and other ham modes. | `ham-radio` `communication` `dsp` `tool` `open-source` |
| [HamStudy.org](https://hamstudy.org/) | Free web-based ham radio licence exam study and practice tool with question explanations. | `ham-radio` `course` |
| [KB6NU No-Nonsense Study Guides](https://www.kb6nu.com/study-guides/) | Free no-nonsense PDF study guides for US amateur radio Technician, General and Extra licences. | `ham-radio` `book` |
| [Iain Explains Signals, Systems, and Digital Comms](https://www.youtube.com/@iain_explains) | YouTube channel with intuitive short explanations of signals, wireless and digital communications. | `communication` `dsp` `youtube` |
| [The Signal Path](https://www.youtube.com/@TheSignalPath) | YouTube channel featuring RF/microwave test equipment teardowns, repairs and experiments. | `rf` `youtube` |
| [Andrew Zonenberg](https://www.youtube.com/@AndrewZonenberg) | YouTube channel on high-speed signal integrity, open-source test equipment and ngscopeclient. | `rf` `dsp` `youtube` |
| [Ham Radio Crash Course](https://www.youtube.com/@HamRadioCrashCourse) | YouTube channel with beginner-friendly ham radio and SDR tutorials and reviews. | `ham-radio` `sdr` `youtube` |
| [RTL-SDR Blog (YouTube)](https://www.youtube.com/@rtlsdrblog) | YouTube channel with RTL-SDR tutorials, demos and reception projects. | `sdr` `youtube` |
| [saveitforparts](https://www.youtube.com/@saveitforparts) | YouTube channel with hands-on satellite, antenna and SDR hacking projects using salvaged gear. | `sdr` `antenna` `youtube` `pbl-project` |
| [rtl_433](https://github.com/merbanan/rtl_433) | Open-source decoder for 433/868/915 MHz ISM devices like weather stations; great RTL-SDR starter project. | `sdr` `communication` `pbl-project` `open-source` |
| [dump1090 (FlightAware)](https://github.com/flightaware/dump1090) | Open-source ADS-B Mode S decoder for tracking aircraft with an RTL-SDR. | `sdr` `communication` `pbl-project` `open-source` |
| [noaa-apt](https://github.com/martinber/noaa-apt) | Open-source decoder for NOAA APT weather-satellite images received with an SDR. | `sdr` `dsp` `pbl-project` `open-source` |
| [SatDump](https://www.satdump.org/) | Open-source generic satellite data processing software for decoding weather and other satellite downlinks. | `sdr` `dsp` `pbl-project` `open-source` |
| [SatNOGS](https://www.satnogs.org/) | Open-source global network and hardware project for building satellite ground stations. | `sdr` `antenna` `communication` `pbl-project` `open-source` |
| [gr-ieee802-11](https://github.com/bastibl/gr-ieee802-11) | Open-source GNU Radio IEEE 802.11a/g/p WiFi transceiver for SDR experimentation. | `sdr` `communication` `pbl-project` `open-source` |
| [srsRAN Project](https://github.com/srsran/srsRAN_Project) | Open-source 4G/5G RAN software suite that runs on SDR hardware for cellular experiments. | `communication` `sdr` `tool` `open-source` |
| [Signal Processing Stack Exchange](https://dsp.stackexchange.com/) | Free Q&A community for signal processing, DSP and communications questions. | `dsp` `communication` `blog` |

<sub>[⬆ back to top](#contents)</sub>

## Power Electronics, Solar, Batteries & Test Equipment

| Name | Description | Tags |
|---|---|---|
| [pvlib python](https://pvlib-python.readthedocs.io/) | BSD-licensed Python library for simulating photovoltaic system performance, from solar position and irradiance to module and inverter output. | `solar` `renewable-energy` `python` `library` `open-source` |
| [NREL System Advisor Model (SAM)](https://github.com/NREL/SAM) | NREL's open-source (BSD-3) desktop tool for techno-economic modelling of PV, battery storage, wind and other renewable projects. | `solar` `renewable-energy` `battery` `simulator` `tool` `open-source` |
| [PVEducation](https://pveducation.org/) | Free interactive online textbook covering solar-cell physics, PV module characteristics and system design with live calculators. | `solar` `renewable-energy` `textbook` `tutorial` `free` |
| [Global Solar Atlas](https://globalsolaratlas.info/) | World Bank/ESMAP web map giving free solar irradiation and PV yield estimates for any location, useful for sizing PV in India and elsewhere. | `solar` `renewable-energy` `tool` `data` `free (proprietary)` |
| [OpenEMS](https://openems.io/) | Open-source modular energy management system for monitoring and controlling PV, home batteries, heat pumps and EV chargers. | `renewable-energy` `solar` `battery` `energy-management` `software` `open-source` |
| [Libre Solar](https://libre.solar/) | Open-hardware project publishing MPPT solar charge controllers, BMS boards and firmware under open licences for off-grid and DC systems. | `solar` `battery` `power-electronics` `open-hardware` `project` |
| [Libre Solar Charge Controller Firmware](https://github.com/LibreSolar/charge-controller-firmware) | Zephyr-based open-source firmware for Libre Solar MPPT and PWM solar charge controllers - a solid PBL reference for open solar chargers. | `solar` `power-electronics` `firmware` `zephyr` `open-source` `project` |
| [OpenDTU](https://github.com/tbnobody/OpenDTU) | ESP32 firmware that replaces the vendor DTU to read and limit Hoymiles/TSUN micro-inverters locally without the cloud. | `solar` `renewable-energy` `esp32` `firmware` `open-source` `project` |
| [OpenEnergyMonitor](https://openenergymonitor.org/) | Open-source energy monitors (emonPi/emonTx) and software for measuring home electricity, solar generation and heat-pump performance. | `renewable-energy` `solar` `energy-monitoring` `open-hardware` `open-source` `project` |
| [evcc](https://evcc.io/) | Open-source EV charging controller that charges your car from surplus solar power and works with many wallboxes, inverters and vehicles. | `ev` `solar` `renewable-energy` `energy-management` `software` `open-source` |
| [PyPSA](https://pypsa.org/) | Python for Power System Analysis - an open toolbox for simulating and optimising power grids with high shares of renewables and storage. | `renewable-energy` `power-systems` `python` `simulator` `open-source` |
| [NPTEL - Design of Photovoltaic Systems (IISc)](https://nptel.ac.in/courses/117108141) | Free NPTEL video course on PV cell characteristics, PV sizing, MPPT, DC-DC converter interfaces and battery charge controllers with Octave tools. | `solar` `power-electronics` `course` `video` `free` |
| [NPTEL - Electric Vehicles and Renewable Energy (IIT Madras)](https://onlinecourses.nptel.ac.in/noc21_ee112/preview) | Free 12-week NPTEL course on EV powertrains, battery storage and renewable energy in the Indian context (optional paid exam for certificate). | `ev` `renewable-energy` `battery` `course` `video` `free` |
| [foxBMS](https://foxbms.org/) | Fraunhofer IISB's free and open BMS development platform with hardware designs, firmware and documentation for large Li-ion packs. | `battery` `bms` `open-hardware` `firmware` `open-source` |
| [diyBMS v4 (ESP32)](https://github.com/stuartpittaway/diyBMSv4ESP32) | Open-source modular DIY battery management system for LiFePO4/Li-ion banks with per-cell modules and an ESP32 controller. | `battery` `bms` `esp32` `open-hardware` `open-source` `project` |
| [SimpBMS](https://github.com/Tom-evnut/SimpBMS) | Documentation and code for SimpBMS, an open BMS that reuses OEM EV battery modules (Tesla, Outlander, etc.) for conversions and storage. | `battery` `bms` `ev` `open-source` `project` |
| [Battery-Emulator](https://github.com/dalathegreat/Battery-Emulator) | Open-source ESP32 firmware that lets second-life EV battery packs talk to home solar/battery inverters. | `battery` `ev` `renewable-energy` `esp32` `firmware` `open-source` `project` |
| [PyBaMM](https://pybamm.org/) | Python Battery Mathematical Modelling - an open-source library for physics-based (DFN, SPM) battery simulations. | `battery` `python` `simulator` `library` `open-source` |
| [Battery University](https://batteryuniversity.com/) | Free educational site by Cadex explaining battery chemistries, charging, ageing and safety in plain language. | `battery` `tutorial` `reference` `free` |
| [Battery Design (batterydesign.net)](https://www.batterydesign.net/) | Free reference site on battery cell, module and pack design for EVs and storage, covering BMS, thermal management and cell data. | `battery` `ev` `bms` `reference` `tutorial` `free` |
| [OpenInverter](https://openinverter.org/) | Community and wiki for open-source EV motor inverter firmware and hardware, used to drive reclaimed Tesla, Nissan Leaf and other motors. | `ev` `power-electronics` `motor-control` `community` `open-source` |
| [stm32-sine (OpenInverter firmware)](https://github.com/jsphuebner/stm32-sine) | Open-source STM32 firmware for induction and synchronous motor inverters that powers the OpenInverter EV conversion ecosystem. | `ev` `power-electronics` `motor-control` `firmware` `stm32` `open-source` |
| [OpenEVSE](https://openevse.com/) | Open-source hardware and firmware for Level 1/2 EV charging stations, with WiFi and solar-divert support. | `ev` `charging` `open-hardware` `open-source` `project` |
| [SmartEVSE v3](https://github.com/SmartEVSE/SmartEVSE-3) | Open-source smart EV charging controller firmware with load balancing and solar-surplus charging modes. | `ev` `charging` `solar` `esp32` `firmware` `open-source` `project` |
| [SavvyCAN](https://www.savvycan.com/) | Open-source cross-platform CAN bus capture, reverse-engineering and analysis tool widely used for EV hacking. | `ev` `can-bus` `test-measurement` `tool` `open-source` |
| [NPTEL - EV: Vehicle Dynamics and Electric Motor Drives (IIT Delhi)](https://nptel.ac.in/courses/108102121) | Free NPTEL course by Prof. Amit Jain on EV vehicle dynamics, motors, PWM, power electronics and drive control. | `ev` `power-electronics` `motor-control` `course` `video` `free` |
| [TI Power Stage Designer](https://www.ti.com/tool/POWERSTAGE-DESIGNER) | Free Java tool from TI that computes voltages and currents for 21 SMPS topologies, plus loop, snubber, FET-loss and filter calculators (download needs a free myTI export approval). | `power-electronics` `power-supply` `tool` `free (proprietary)` |
| [TI WEBENCH Circuit Designer](https://www.ti.com/tool/WEBENCH-CIRCUIT-DESIGNER) | Free web tool from TI that generates and simulates complete power-supply and filter designs from your specs; saving/exporting designs needs a free myTI account. | `power-electronics` `power-supply` `tool` `browser` `free (proprietary)` |
| [MIT OCW 6.334 Power Electronics](https://ocw.mit.edu/courses/6-334-power-electronics-spring-2007/) | Free MIT OpenCourseWare graduate course on converter topologies, magnetics, control and design with lecture notes and problem sets. | `power-electronics` `course` `lecture-notes` `free` |
| [Sam Ben-Yaakov (YouTube)](https://www.youtube.com/@sambenyaakov) | Prof. Sam Ben-Yaakov's widely recommended channel of clear, intuitive lectures on converters, magnetics, control and simulation. | `power-electronics` `youtube` `video` `free` |
| [CUSP - Consortium of Universities for Sustainable Power (UMN)](https://cusp.umn.edu/) | University of Minnesota's free curriculum with video lectures, slides and problems on power electronics, drives and power systems. | `power-electronics` `power-systems` `renewable-energy` `course` `video` `free` |
| [NPTEL - Power Electronics (IIT Delhi)](https://nptel.ac.in/courses/108102145) | Free NPTEL course by Prof. G. Bhuvaneshwari covering power devices, rectifiers, DC-DC converters, inverters and applications like chargers. | `power-electronics` `course` `video` `free` |
| [NPTEL - Fundamental of Power Electronics (IISc)](https://onlinecourses.nptel.ac.in/noc21_ee01/preview) | Free NPTEL course by Prof. L. Umanand on power devices, AC-DC and DC-DC converter analysis and converter control. | `power-electronics` `course` `video` `free` |
| [NPTEL - Design of Power Electronic Converters (IIT Guwahati)](https://onlinecourses.nptel.ac.in/noc26_ee32/preview) | Free NPTEL course on practical converter hardware design - magnetics, gate drives, sensing, thermal and layout beyond textbook theory. | `power-electronics` `power-supply` `hardware-design` `course` `free` |
| [NPTEL - Advance Power Electronics and Control (IIT Roorkee)](https://nptel.ac.in/courses/108107128) | Free NPTEL course by Prof. Avik Bhattacharya on advanced converter topologies, modulation and closed-loop control. | `power-electronics` `control-systems` `course` `video` `free` |
| [OwnTech](https://www.owntech.org/) | Open-source power electronics foundation offering the SPIN controller and TWIST converter boards with Zephyr-based software for learning and research. | `power-electronics` `open-hardware` `education` `open-source` `project` |
| [OpenDPS](https://github.com/kanflo/opendps) | Open-source replacement firmware for DPS5005-series programmable power supply modules, adding remote control and new features. | `power-supply` `test-measurement` `firmware` `open-source` `project` |
| [EEZ Bench Box 3 (BB3)](https://github.com/eez-open/modular-psu) | Fully open-source modular lab chassis with programmable power-supply, DMM and I/O modules - a reference open lab power supply design. | `power-supply` `test-measurement` `open-hardware` `open-source` `project` |
| [python-control](https://python-control.readthedocs.io/) | Python Control Systems Library for transfer functions, state-space, Bode/root-locus analysis and controller design. | `control-systems` `python` `library` `open-source` |
| [Control Tutorials for MATLAB & Simulink (CTMS)](https://ctms.engin.umich.edu/CTMS/) | University of Michigan's free CC BY-SA tutorials on modelling, PID, root locus, frequency, state-space and digital control with worked examples. | `control-systems` `tutorial` `course` `free` |
| [Feedback Systems (Astrom & Murray) wiki](https://fbswiki.org/) | Companion site for Astrom and Murray's 'Feedback Systems', with free PDF editions, exercises and python-control examples. | `control-systems` `textbook` `free` |
| [Scilab](https://www.scilab.org/) | Free, open-source numerical computing environment (MATLAB alternative) with control toolboxes and the Xcos block-diagram simulator. | `control-systems` `simulator` `numerical-computing` `tool` `open-source` |
| [do-mpc](https://www.do-mpc.com/) | Open-source Python toolbox for model predictive control and moving horizon estimation of nonlinear systems. | `control-systems` `mpc` `python` `library` `open-source` |
| [ngscopeclient (ScopeHAL)](https://www.ngscopeclient.org/) | Open-source GPU-accelerated oscilloscope and test-instrument client built on libscopehal, supporting many scopes, protocol decodes and analysis. | `test-measurement` `oscilloscope` `software` `open-source` |
| [ThunderScope](https://github.com/EEVengers/ThunderScope) | Open-source 4-channel 1 GS/s PCIe/Thunderbolt oscilloscope with hardware, FPGA gateware and software released openly. | `test-measurement` `oscilloscope` `open-hardware` `open-source` |
| [PyVISA](https://pyvisa.readthedocs.io/) | Python package to control GPIB, USB, Ethernet and serial lab instruments via VISA/SCPI for bench automation. | `test-measurement` `python` `library` `automation` `open-source` |
| [PyMeasure](https://pymeasure.readthedocs.io/) | Open-source Python package with ready-made instrument drivers and a GUI framework for running measurement experiments. | `test-measurement` `python` `library` `automation` `open-source` |
| [OpenHantek6022](https://github.com/OpenHantek/OpenHantek6022) | Free open-source software for Hantek 6022 and compatible low-cost USB oscilloscopes, with FFT, math channels and XY mode. | `test-measurement` `oscilloscope` `software` `open-source` |
| [Red Pitaya documentation](https://redpitaya.readthedocs.io/) | Open documentation for the Red Pitaya FPGA board that works as oscilloscope, signal generator and spectrum analyzer, with SCPI and examples. | `test-measurement` `oscilloscope` `fpga` `documentation` `open-source` |
| [ScopeFun](https://www.scopefun.com/) | Open-source FPGA-based oscilloscope, arbitrary waveform generator and logic analyzer with open hardware and software. | `test-measurement` `oscilloscope` `open-hardware` `open-source` |
| [Scopy (Analog Devices)](https://github.com/analogdevicesinc/scopy) | ADI's open-source multifunction instrument app (scope, signal generator, logic analyzer, network analyzer) for ADALM2000 and other boards. | `test-measurement` `oscilloscope` `logic-analyzer` `software` `open-source` |
| [PSLab (Pocket Science Lab)](https://pslab.io/) | FOSSASIA's open-hardware pocket lab with oscilloscope, waveform generator, logic analyzer and power supply, plus desktop and Android apps. | `test-measurement` `oscilloscope` `open-hardware` `education` `open-source` |
| [Learn Electronics Repair (YouTube)](https://www.youtube.com/@LearnElectronicsRepair) | Free channel on fault-finding and repairing electronics, including switch-mode power supplies, chargers and lab gear. | `power-supply` `repair` `youtube` `video` `free` |
| [Julian Ilett (YouTube)](https://www.youtube.com/@JulianIlett) | Free hands-on videos testing DC-DC converters, solar chargers, batteries and power modules on the bench. | `power-electronics` `solar` `battery` `youtube` `video` `free` |
| [DIY Solar Power with Will Prowse (YouTube)](https://www.youtube.com/@WillProwse) | Free videos testing and explaining solar panels, inverters, charge controllers and LiFePO4 batteries for DIY off-grid systems. | `solar` `battery` `renewable-energy` `youtube` `video` `free` |

<sub>[⬆ back to top](#contents)</sub>

## Semiconductors, Audio, Automotive, Biomedical, TinyML & More

| Name | Description | Tags |
|---|---|---|
| [nanoHUB](https://nanohub.org/) | Purdue-led NSF platform with 500+ free in-browser nanoelectronics and device simulation tools plus lectures and courses (free account required). | `semiconductor` `simulator` `course` `tool` |
| [ABACUS – Assembly of Basic Applications for Coordinated Understanding of Semiconductors (nanoHUB)](https://nanohub.org/tools/abacus) | Free nanoHUB toolkit bundling simulators for crystal structures, band diagrams, PN junctions, BJTs and MOSFETs aimed at device-physics teaching. | `semiconductor` `simulator` `tool` |
| [MOSFET Lab (nanoHUB)](https://nanohub.org/resources/mosfet) | Free online 2D drift-diffusion MOSFET simulator on nanoHUB for exploring I-V curves, short-channel effects and doping profiles. | `semiconductor` `simulator` `tool` |
| [PV Lighthouse](https://www.pvlighthouse.com.au/) | Free (registration) web calculators such as refractive-index library, OPAL 2 and Wafer Ray Tracer for solar-cell optics and semiconductor modelling; closed source. | `semiconductor` `optoelectronics` `simulator` `tool` `free (proprietary)` |
| [DEVSIM](https://github.com/devsim/devsim) | Open-source TCAD semiconductor device simulator (Apache-2.0) with a Python interface for drift-diffusion and custom PDE device models. | `semiconductor` `simulator` `tool` `open-source` |
| [Solcore](https://github.com/qpv-research-group/solcore5) | Open-source Python library for modelling solar cells and semiconductor materials, from band structure and optics to full device IV. | `semiconductor` `optoelectronics` `simulator` `tool` `open-source` |
| [DoITPoMS – Introduction to Semiconductors (Cambridge)](https://www.doitpoms.ac.uk/tlplib/semiconductors/index.php) | Free Cambridge University teaching package (CC BY-NC-SA) on energy bands, carriers, p-n junctions, BJTs and MOSFETs. | `semiconductor` `course` |
| [MIT 6.012 Microelectronic Devices and Circuits](https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-fall-2009/) | Free MIT OpenCourseWare course with lecture notes and problem sets on semiconductor physics, diodes, BJTs, MOSFETs and amplifiers. | `semiconductor` `course` |
| [MEEP (MIT Electromagnetic Equation Propagation)](https://github.com/NanoComp/meep) | Open-source FDTD electromagnetics simulator (GPL) widely used for photonic crystals, waveguides and nanophotonics. | `optoelectronics` `simulator` `tool` `open-source` |
| [gdsfactory](https://github.com/gdsfactory/gdsfactory) | Open-source Python library for designing photonic, analog and MEMS chips with layout, simulation interfaces and verification. | `optoelectronics` `semiconductor` `tool` `open-source` |
| [RP Photonics Encyclopedia](https://www.rp-photonics.com/encyclopedia.html) | Free online encyclopedia of laser, fibre optic and photonics topics with thousands of articles by Dr. Rüdiger Paschotta. | `optoelectronics` `book` `free (proprietary)` |
| [awesome_photonics](https://github.com/joamatab/awesome_photonics) | Curated GitHub list of open-source photonics simulation, layout and design tools and learning resources. | `optoelectronics` `open-source` |
| [MIT 6.974 Fundamentals of Photonics: Quantum Electronics](https://ocw.mit.edu/courses/6-974-fundamentals-of-photonics-quantum-electronics-spring-2006/) | Free MIT OCW course on lasers, optical resonators, amplification and light-matter interaction. | `optoelectronics` `course` |
| [SparkFun Sensor Tutorials](https://learn.sparkfun.com/tutorials/tags/sensors) | Free open-licensed (CC BY-SA) tutorials and hookup guides for accelerometers, gas, distance, temperature and other sensors. | `sensors` `blog` `pbl-project` |
| [Adafruit Unified Sensor Driver](https://github.com/adafruit/Adafruit_Sensor) | Open-source Arduino abstraction layer giving a common API and SI units across dozens of Adafruit sensor drivers. | `sensors` `tool` `open-source` |
| [MIT 6.777J Design and Fabrication of MEMS](https://ocw.mit.edu/courses/6-777j-design-and-fabrication-of-microelectromechanical-devices-spring-2007/) | Free MIT OCW course on MEMS fabrication, mechanical modelling, sensing and actuation design. | `mems` `sensors` `course` |
| [MIT 2.737 Mechatronics](https://ocw.mit.edu/courses/2-737-mechatronics-fall-2014/) | Free MIT OCW graduate course with labs on electronics interfacing, power amplifiers, sensing, transducers and control of mechatronic systems. | `mechatronics` `sensors` `course` |
| [ElectroSmash](https://www.electrosmash.com/) | Free in-depth circuit analyses of classic guitar pedals and amps (Fuzz Face, Tube Screamer, ProCo RAT) plus open pedal projects. | `audio` `blog` `pbl-project` |
| [Mutable Instruments Eurorack (source)](https://github.com/pichenettes/eurorack) | Open-source hardware schematics and firmware (MIT/CC-BY-SA) for Mutable Instruments modules like Braids, Clouds, Plaits and Rings. | `audio` `open-source` `pbl-project` |
| [Mutable Instruments Documentation](https://pichenettes.github.io/mutable-instruments-documentation/) | Archived manuals and technical documentation for all Mutable Instruments synthesizer modules. | `audio` `book` `open-source` |
| [Music From Outer Space (Ray Wilson)](https://musicfromouterspace.com/) | Ray Wilson's site with free DIY synthesizer schematics, the Weird Sound Generator and analog synth project write-ups. | `audio` `pbl-project` `blog` |
| [YuSynth](https://www.yusynth.net/index_en.php) | Free schematics and build documentation for dozens of DIY analog modular synthesizer modules by Yves Usson. | `audio` `pbl-project` `blog` |
| [Elliott Sound Products](https://sound-au.com/) | Rod Elliott's long-running free library of audio amplifier, preamp, power supply and filter design articles and projects. | `audio` `blog` `pbl-project` |
| [DaisySP](https://github.com/electro-smith/DaisySP) | Open-source (MIT) C++ DSP library of oscillators, filters and effects for embedded audio on the Daisy platform and beyond. | `audio` `tool` `open-source` |
| [VCV Rack](https://github.com/VCVRack/Rack) | Open-source (GPLv3) virtual Eurorack modular synthesizer for learning patching and synth signal flow. | `audio` `simulator` `open-source` |
| [Moritz Klein (YouTube)](https://www.youtube.com/@moritzklein0) | Free YouTube series teaching analog synth design from first principles—VCOs, VCFs, mixers—on breadboards. | `audio` `youtube` |
| [SavvyCAN](https://github.com/collin80/SavvyCAN) | Open-source Qt tool for capturing, reverse-engineering and visualising CAN bus traffic with DBC support and many adapters. | `automotive` `tool` `open-source` |
| [cantools](https://github.com/cantools/cantools) | Python package to parse DBC/KCD files, encode/decode CAN messages and monitor buses. | `automotive` `tool` `open-source` |
| [python-can](https://github.com/hardbyte/python-can) | Python CAN library supporting SocketCAN, PCAN, Vector, Kvaser and many other interfaces for sending and logging frames. | `automotive` `tool` `open-source` |
| [opendbc (comma.ai)](https://github.com/commaai/opendbc) | Community open-source database of DBC files decoding CAN messages for hundreds of car models. | `automotive` `tool` `open-source` |
| [openpilot (comma.ai)](https://github.com/commaai/openpilot) | Open-source driver-assistance system providing adaptive cruise and lane centering for 300+ supported cars. | `automotive` `open-source` `pbl-project` |
| [can-utils (SocketCAN)](https://github.com/linux-can/can-utils) | Official Linux SocketCAN userspace utilities (candump, cansend, cangen) for working with CAN on Linux. | `automotive` `tool` `open-source` |
| [awesome-canbus](https://github.com/iDoka/awesome-canbus) | Curated list of open-source CAN bus hardware, software, DBC tools and learning resources. | `automotive` `open-source` |
| [Speeduino](https://github.com/speeduino/speeduino) | Open-source Arduino-based engine management system (ECU) with hardware designs and firmware. | `automotive` `open-source` `pbl-project` |
| [The Car Hacker's Handbook (Open Garages)](https://www.opengarages.org/handbook/) | Free online edition of Craig Smith's book on vehicle networks, CAN reverse engineering and automotive security. | `automotive` `book` |
| [OpenBCI Documentation](https://docs.openbci.com/) | Free docs for OpenBCI's open-source EEG/EMG/ECG biosensing boards, GUI and software SDKs. | `biomedical` `open-source` `book` |
| [OpenBCI GUI](https://github.com/OpenBCI/OpenBCI_GUI) | Open-source Processing app for streaming, visualising and recording EEG, EMG and ECG data from OpenBCI boards. | `biomedical` `tool` `open-source` |
| [HeartyPatch (ProtoCentral)](https://github.com/protocentral/protocentral_heartypatch) | Open-source hardware and firmware for an ESP32-based wearable single-lead ECG and heart-rate patch. | `biomedical` `open-source` `pbl-project` |
| [BioAmp EXG Pill (Upside Down Labs)](https://github.com/upsidedownlabs/BioAmp-EXG-Pill) | Open-source tiny biopotential amplifier board from India for recording ECG, EMG, EOG and EEG with any MCU. | `biomedical` `open-source` `pbl-project` |
| [NeuroKit2](https://github.com/neuropsychology/NeuroKit) | Open-source Python toolbox for ECG, PPG, EDA, EMG and EEG signal processing and analysis. | `biomedical` `tool` `open-source` |
| [PhysioNet](https://physionet.org/) | Free MIT-hosted repository of physiological signal databases (e.g., MIT-BIH arrhythmia) and open-source analysis software. | `biomedical` `tool` |
| [TensorFlow Lite for Microcontrollers (LiteRT Micro)](https://github.com/tensorflow/tflite-micro) | Google's open-source (Apache-2.0) inference runtime for running ML models on microcontrollers with kilobytes of RAM. | `tinyml` `tool` `open-source` |
| [HarvardX TinyML Courseware](https://github.com/tinyMLx/courseware) | Open-source slides, Colab notebooks and Arduino labs from Harvard's TinyML course series, freely reusable. | `tinyml` `course` `open-source` |
| [Harvard TinyML (Tiny Machine Learning Open Education)](https://tinyml.seas.harvard.edu/) | Harvard's TinyML education hub linking free course materials, workshops and the TinyML curriculum. | `tinyml` `course` |
| [emlearn](https://github.com/emlearn/emlearn) | Open-source tool that converts scikit-learn/Keras models into portable C code for microcontrollers. | `tinyml` `tool` `open-source` |
| [OpenMV](https://github.com/openmv/openmv) | Open-source MicroPython machine-vision camera firmware and hardware for running vision and TinyML on MCUs. | `tinyml` `sensors` `open-source` |
| [iFixit Repair Guides](https://www.ifixit.com/Guide) | Free community repair manuals (CC BY-NC-SA) with step-by-step teardown, soldering and replacement guides for thousands of devices. | `repair` `book` |
| [Adafruit Guide to Excellent Soldering](https://learn.adafruit.com/adafruit-guide-excellent-soldering) | Free illustrated tutorial covering tools, technique, common problems and desoldering. | `repair` `course` |
| [Soldering Is Easy (comic)](https://mightyohm.com/files/soldercomic/FullSolderComic_EN.pdf) | Free CC-licensed comic book by Mitch Altman, Andie Nordgren and Jeff Keyzer teaching through-hole soldering. | `repair` `book` |
| [Louis Rossmann (YouTube)](https://www.youtube.com/@rossmanngroup) | Free board-level laptop/MacBook repair videos and right-to-repair advocacy by Louis Rossmann. | `repair` `youtube` |
| [Northridge Fix (YouTube)](https://www.youtube.com/@NorthridgeFix) | Free microsoldering and console/phone board repair videos showing real diagnostics on the bench. | `repair` `youtube` |
| [Virtual Labs (vlab.co.in) – Electronics & Communications](https://www.vlab.co.in/broad-area-electronics-and-communications) | Free Ministry of Education/IIT virtual labs for analog, digital, VLSI, DSP and semiconductor physics experiments online. | `india` `simulator` `course` |
| [NPTEL (YouTube)](https://www.youtube.com/@iit) | Official NPTEL channel with thousands of free full-length IIT/IISc lecture courses across ECE subjects. | `india` `youtube` `course` |
| [GATE Overflow for GATE ECE](https://ec.gateoverflow.in/) | Free community Q&A with previous-year GATE ECE questions, solutions and subject-wise practice. | `india` `interview-prep` |
| [eSim (FOSSEE, IIT Bombay)](https://esim.fossee.in/) | Open-source EDA suite from IIT Bombay combining KiCad, Ngspice and GHDL for schematic, simulation and PCB design. | `india` `simulator` `tool` `open-source` |
| [SWAYAM](https://swayam.gov.in/) | Government of India's free MOOC platform hosting NPTEL and university electronics courses (certification exams optional and paid). | `india` `course` |
| [The Embedded New Testament](https://github.com/theEmbeddedGeorge/theEmbeddedNewTestament.github.io) | Comprehensive open GitHub knowledge base for embedded systems interview recap: C, RTOS, protocols, hardware and Linux. | `interview-prep` `open-source` |
| [TheEmbeDEADInterview](https://github.com/imsunilvaghela/TheEmbeDEADInterview) | GitHub collection of embedded C, microcontroller and OS interview questions with answers. | `interview-prep` `open-source` |
| [VLSI Interview Questions](https://github.com/UndefeatedSunny/VLSI-Interview-Questions) | Repository of digital design and Verilog interview problems for VLSI roles. | `interview-prep` `open-source` |
| [Revolution – Computer History Museum online exhibit](https://www.computerhistory.org/revolution/) | Free online exhibit tracing 2,000 years of computing including transistors, integrated circuits and memory. | `history` `blog` |
| [World Radio History](https://www.worldradiohistory.com/) | Free archive of scanned electronics magazines (Popular Electronics, Radio-Electronics, Elektor, Wireless World) and radio history. | `history` `book` |
| [CuriousMarc (YouTube)](https://www.youtube.com/@CuriousMarc) | Free videos restoring historic electronics like the Apollo Guidance Computer and vintage test gear. | `history` `repair` `youtube` |
| [Asianometry (YouTube)](https://www.youtube.com/@Asianometry) | Free deep-dive videos on semiconductor industry history, fabs, lithography and chip technology. | `history` `semiconductor` `youtube` |
| [Exploratorium Science Snacks](https://www.exploratorium.edu/snacks) | Free CC BY-NC-SA hands-on activities from San Francisco's Exploratorium, including electricity, magnetism and light experiments. | `science-education` `pbl-project` |

<sub>[⬆ back to top](#contents)</sub>

## Calculators & Reference Tools

| Name | Description | Tags |
|---|---|---|
| [DigiKey Online Conversion Calculators](https://www.digikey.com/en/resources/online-conversion-calculators) | No-login hub of 35+ calculators covering resistor colour/SMD codes, SMD capacitor codes, Ohm's law, voltage divider, LED resistor, 555 timer, RC/RL filters, trace width, battery life, AWG and dBm. | `calculator` `resistor` `filter` `pcb` `power` `rf` `free (proprietary)` |
| [All About Circuits Tools & Calculators](https://www.allaboutcircuits.com/tools/) | Searchable library of hundreds of free EE calculators (resistor colour code, op-amp and instrumentation-amp gain, filters, via current, RF and power) usable without an account. | `calculator` `resistor` `filter` `power` `rf` `pcb` `free (proprietary)` |
| [Omni Calculator – Physics (Electronics & circuits section)](https://www.omnicalculator.com/physics) | Ad-supported calculators including buck/boost/flyback converters, 555 timer, LED resistor, low/high-pass and LC filters, capacitor charge time, wire gauge and transformer sizing. | `calculator` `resistor` `filter` `power` `rf` `free (proprietary)` |
| [Mouser Conversion Calculators](https://www.mouser.com/technical-resources/conversion-calculators) | Distributor-hosted set of free calculators and unit converters for resistor codes, Ohm's law, trace width, dB/power and other everyday electronics maths. | `calculator` `resistor` `pcb` `power` `rf` `free (proprietary)` |
| [Okawa Electric Design – Filter Design and Analysis](http://sim.okawa-denshi.jp/en/Fkeisan.htm) | Index of free web tools that design RC, RLC, Sallen-Key, multiple-feedback, Twin-T and 3rd-order active filters and plot Bode, Nyquist, step and impulse responses. | `calculator` `filter` `free (proprietary)` |
| [Analog Devices Analog Filter Wizard](https://tools.analog.com/en/filterwizard/) | Browser-based active low/high/band-pass filter designer that picks real ADI op-amps and shows component tolerances and next steps, with no sign-in needed to design. | `calculator` `filter` `free (proprietary)` |
| [TI Filter Design Tool (WEBENCH, successor to FilterPro)](https://webench.ti.com/filter-design-tool/) | TI's free online multistage active filter designer that replaced the discontinued FilterPro desktop app; designing works without login, which is only needed to save designs. | `calculator` `filter` `free (proprietary)` |
| [TI Analog Engineer's Calculator](https://www.ti.com/tool/ANALOG-ENGINEER-CALC) | Free desktop calculator from TI for op-amp gain networks, standard E-series resistor/capacitor selection, ADC/noise, dB conversions and PCB/wire parameters. | `calculator` `filter` `power` `reference` `free (proprietary)` |
| [Circuit Calcs (AJ Engineering)](https://ajengineering.github.io/circuit-calcs/) | MIT-licensed single-file offline web calculator collection for power-converter, gate-drive, snubber, thermal and general electronics design (source: github.com/AJEngineering/circuit-calcs). | `calculator` `power` `resistor` `open-source` |
| [Coil32 Online Coil Calculators](https://coil32.net/) | Free web calculators for air-core, toroidal and ferrite inductors, multilayer coils and PCB spiral inductors from the author of Coil64. | `calculator` `rf` `power` `free (proprietary)` |
| [Coil64](https://github.com/radioacoustick/Coil64) | GPL desktop inductor/coil design program (Windows/Linux/macOS) for single- and multi-layer, toroidal, pot-core and PCB coils plus LC tank and Q-factor calculations. | `calculator` `rf` `power` `open-source` |
| [Toroids.info](https://toroids.info/) | Reference and winding calculator for Amidon/Micrometals iron-powder and ferrite toroid cores, giving AL values and turns for a target inductance (handy for transformers and baluns). | `calculator` `rf` `power` `reference` `free (proprietary)` |
| [Calculator.net Resistor Calculator](https://www.calculator.net/resistor-calculator.html) | Simple 3- to 6-band resistor colour code decoder plus series/parallel and wire-resistance calculators. | `calculator` `resistor` `free (proprietary)` |
| [KiloOhm.info Resistor Colour Code](https://kiloohm.info/) | Lightweight interactive resistor colour band calculator that converts between band colours and values for 4- and 5-band resistors. | `calculator` `resistor` `free (proprietary)` |
| [Hobby-Hour SMD Resistor Code Calculator](https://www.hobby-hour.com/electronics/smdcalc.php) | Decodes 3-digit, 4-digit and EIA-96 SMD resistor markings into resistance values with explanations of each scheme. | `calculator` `resistor` `free (proprietary)` |
| [S-Manuals SMD Marking Code Database](https://www.s-manuals.com/smd) | Searchable database that identifies SMD transistors, diodes and ICs from their tiny package marking codes, linking to the matching datasheets. | `calculator` `reference` `datasheet` `free (proprietary)` |
| [LED Calculator (ledcalculator.net)](https://ledcalculator.net/) | Computes current-limiting resistor values and wattage for single LEDs and series/parallel LED arrays with a wiring diagram. | `calculator` `resistor` `power` `free (proprietary)` |
| [Ohm's Law Calculator – 555 Astable Calculator](https://ohmslawcalculator.com/555-astable-calculator) | Calculates frequency, period and duty cycle of an NE555 astable oscillator from R1, R2 and C (site also hosts Ohm's law and divider calculators). | `calculator` `power` `digital` `free (proprietary)` |
| [IN3OTD Resistor Combination Calculator](https://www.qsl.net/in3otd/parallr.html) | Finds the best series/parallel combination of standard E-series resistors (E6–E96) to hit an arbitrary target value. | `calculator` `resistor` `free (proprietary)` |
| [Resistor Value and Ratio Calculator (jansson.us)](https://jansson.us/resistors.html) | Picks the nearest standard E-series values and best resistor pairs for a required ratio, ideal for dividers and op-amp gain networks. | `calculator` `resistor` `free (proprietary)` |
| [ecalc](https://github.com/rrowniak/ecalc) | GPL command-line electronics calculator that finds the closest E-series values and computes dB ratios and other quick conversions. | `calculator` `resistor` `reference` `open-source` |
| [AdvancedPCB Trace Width Calculator](https://www.advancedpcb.com/en-us/tools/trace-width-calculator/) | IPC-2221 based calculator for required internal/external trace width from current, copper weight and allowed temperature rise. | `calculator` `pcb` `free (proprietary)` |
| [SMPS.us PCB Trace Width Calculator and Equations](https://www.smps.us/pcb-calculator.html) | Trace-width calculator that shows the underlying IPC-2221 equations and notes on IPC-2152, with resistance and voltage-drop results. | `calculator` `pcb` `power` `free (proprietary)` |
| [KiCad PCB Calculator (documentation)](https://docs.kicad.org/9.0/en/pcb_calculator/pcb_calculator.html) | Guide to KiCad's bundled open-source calculator covering regulators, trace width (IPC-2221), via size/current, E-series, colour code, attenuators and transmission lines. | `calculator` `pcb` `resistor` `power` `rf` `open-source` |
| [PowerStream AWG Wire Gauge Table](https://www.powerstream.com/Wire_Size.htm) | Reference chart of AWG sizes with diameter, area, resistance per length and current ratings for chassis wiring and power transmission. | `calculator` `power` `reference` `free (proprietary)` |
| [RapidTables AWG to mm Calculator](https://www.rapidtables.com/calc/wire/awg-to-mm.html) | Converts American Wire Gauge to diameter and cross-sectional area in mm/mm² and back, with a full gauge chart. | `calculator` `power` `reference` `free (proprietary)` |
| [RapidTables Decibel (dB) Converter](https://www.rapidtables.com/electric/decibel.html) | Converts between dB, dBm, dBW, dBV and power/voltage ratios with formulas and conversion tables. | `calculator` `rf` `reference` `free (proprietary)` |
| [RapidTables Number Base Converters](https://www.rapidtables.com/convert/number/index.html) | Converters between binary, octal, decimal, hex and ASCII including two's complement and fractional values. | `calculator` `digital` `free (proprietary)` |
| [everything RF – RF Calculators](https://www.everythingrf.com/rf-calculators) | Large free set of RF calculators: frequency-to-wavelength, dBm/W, VSWR/return loss, attenuators, LC filters, impedance matching, microstrip, coax and antennas. | `calculator` `rf` `filter` `pcb` `free (proprietary)` |
| [Microwaves101 Calculators](https://www.microwaves101.com/calculators1) | Free microwave-engineering calculators and spreadsheets for transmission lines, VSWR, noise, attenuators and matching from the Microwaves101 encyclopedia. | `calculator` `rf` `free (proprietary)` |
| [SimSmith (AE6TY)](http://www.ae6ty.com/smith_charts/) | Free Java Smith-chart and matching-network simulator for desktop that models real components, lines and antenna loads. | `calculator` `rf` `free (proprietary)` |
| [SmithTool](https://github.com/DeconBear/SmithTool) | MIT-licensed Qt desktop Smith chart app with L/Pi/T matching wizard, Touchstone (.s1p/.s2p) import and SPICE netlist export. | `calculator` `rf` `open-source` |
| [Qucs-S S-Parameter Viewer & RF Synthesis Tools](https://github.com/andresmmera/qucs-s-spar-viewer) | Open-source Qucs-S companion that plots S-parameters (Smith, polar, VSWR) and synthesises RF filters, matching networks, attenuators and power combiners. | `calculator` `rf` `filter` `open-source` |
| [pyfda – Python Filter Design Analysis](https://github.com/chipmuenk/pyfda) | MIT-licensed GUI for designing and analysing FIR/IIR digital filters with fixed-point simulation and HDL export. | `calculator` `filter` `digital` `open-source` |
| [Karnaugh Map Solver](https://karnaughmapsolver.com/) | Free online K-map tool that simplifies 2–6 variable Boolean functions into minimal SOP/POS form with grouping shown. | `calculator` `digital` `free (proprietary)` |
| [dCode Boolean Expressions Calculator](https://www.dcode.fr/boolean-expressions-calculator) | Simplifies Boolean logic expressions, generates truth tables and outputs minimal DNF/CNF forms in the browser. | `calculator` `digital` `free (proprietary)` |
| [ALLDATASHEET](https://www.alldatasheet.com/) | Largest free datasheet search engine with 50M+ semiconductor datasheets searchable by part number, description or marking. | `calculator` `datasheet` `free (proprietary)` |
| [Datasheet Archive](https://www.datasheetarchive.com/) | Long-running free search engine for current and obsolete component datasheets across manufacturers. | `calculator` `datasheet` `free (proprietary)` |
| [Findchips](https://www.findchips.com/) | Free part-search engine that shows distributor stock, pricing and datasheet links for a part number in one view. | `calculator` `datasheet` `free (proprietary)` |
| [PinoutGuide (formerly pinouts.ru)](https://pinoutguide.com/) | Handbook of pinouts and wiring diagrams for connectors, cables, ports and common hardware interfaces. | `calculator` `reference` `free (proprietary)` |
| [Daycounter Engineering Calculators](https://www.daycounter.com/Calculators/) | Index of free engineering calculators spanning passive components, filters, RF/microstrip and PCB design. | `calculator` `resistor` `filter` `pcb` `rf` `power` `free (proprietary)` |
| [Electronics 2000 Calculators](https://www.electronics2000.co.uk/calc/) | Long-standing UK collection of electronics calculators (resistor/capacitor codes, Ohm's law, reactance, 555, LED, op-amp, unit conversions). | `calculator` `resistor` `filter` `power` `reference` `free (proprietary)` |
| [Random Science Tools – Electronics](https://www.random-science-tools.com/electronics/index.htm) | Simple free calculators and reference pages for resistor and capacitor codes, standard values, RC time constants and filter cut-offs. | `calculator` `resistor` `filter` `reference` `free (proprietary)` |
| [CircuitDigest Electrical & Electronics Calculators](https://circuitdigest.com/calculators) | Collection of free web calculators for everyday electronics such as resistor codes, LED resistors, voltage dividers, 555 timers and filters. | `calculator` `resistor` `filter` `power` `pcb` `free (proprietary)` |
| [Ohms Now! (F-Droid)](https://f-droid.org/en/packages/com.ktprograms.ohmsnow/) | GPL Android app that decodes 4/5/6-band resistor and ceramic capacitor codes with swipe-through E-series values. | `calculator` `android` `resistor` `open-source` |
| [Voltage Drop Calculator (F-Droid)](https://f-droid.org/en/packages/com.vonglasow.michael.voltagedrop/) | GPL Android app that computes wiring voltage drop or suggests wire gauge, length and current limits to stay within a drop limit. | `calculator` `android` `power` `open-source` |
| [Qalculate! for Android (F-Droid)](https://f-droid.org/en/packages/com.jherkenhoff.qalculate/) | GPL multi-purpose calculator with unit-aware maths, physical constants and conversions, useful for quick electronics and unit calculations on a phone. | `calculator` `android` `reference` `open-source` |
| [QTronics ToolSet](https://github.com/shampuan/QTronics-Toolset) | GPL-3.0 Linux desktop suite of electronics calculators: Ohm/Kirchhoff, colour code, LED, Zener, 555, LM317/78xx, transformer, RC time and battery charge. | `calculator` `resistor` `power` `reference` `open-source` |

<sub>[⬆ back to top](#contents)</sub>

## PCB Community Projects & Free Assets

| Name | Description | Tags |
|---|---|---|
| [OSHWLab (EasyEDA / JLCPCB)](https://oshwlab.com/) | Global EasyEDA/JLCPCB community where makers publish full schematics, PCB layouts and BOMs that can be cloned and edited for free. | `pcb-community` `open-hardware` `free (proprietary)` `project licences vary (mostly CC/GPL)` |
| [PCBWay Shared Projects](https://www.pcbway.com/project/shareproject/) | PCBWay's community gallery of shared PCB designs with Gerbers, schematics and photos that are free to download. | `pcb-community` `open-hardware` `free (proprietary)` `project licences vary` |
| [OSH Park Shared Projects](https://oshpark.com/shared_projects) | Browsable list of boards other OSH Park users have made public, each with board renders and downloadable design files. | `pcb-community` `open-hardware` `free (proprietary)` `project licences vary` |
| [Elektor Labs](https://www.elektormagazine.com/labs) | Elektor's open community lab where engineers post electronics projects, schematics and progress logs for free. | `pcb-community` `open-hardware` `free (proprietary)` `project licences vary` |
| [OpenHardware.io](https://www.openhardware.io/) | Community site (from the MySensors team) for sharing open-source hardware projects with design files and BOMs. | `pcb-community` `open-hardware` `free` `project licences vary (CERN OHL/CC/GPL)` |
| [Open Hardware Repository (CERN OHWR)](https://ohwr.org/) | CERN-hosted repository of professional-grade open hardware (timing, DAQ, FMC boards) released mostly under the CERN Open Hardware Licence. | `open-hardware` `pcb-community` `open-source` `CERN-OHL` |
| [Electronics-Lab Projects](https://www.electronics-lab.com/projects/) | Large archive of free electronics projects with schematics, PCB layouts and BOMs, many from open-hardware designers. | `pcb-community` `open-hardware` `free (proprietary)` `project licences vary` |
| [Open Electronics](https://www.open-electronics.org/) | Italian open-electronics magazine site publishing DIY projects with schematics and PCB files for Arduino and other platforms. | `open-hardware` `pcb-community` `free (proprietary)` `project licences vary` |
| [Crowd Supply (browse projects)](https://www.crowdsupply.com/browse) | Crowdfunding platform focused on open-source hardware; most project pages link to public schematics, PCB files and firmware repos. | `open-hardware` `free (proprietary)` `project licences vary` |
| [GitHub topic: open-hardware](https://github.com/topics/open-hardware) | GitHub topic page listing thousands of repositories tagged open-hardware, sortable by stars and recent activity. | `open-hardware` `pcb-community` `free` `project licences vary` |
| [GitHub topic: open-source-hardware](https://github.com/topics/open-source-hardware) | Second major GitHub topic for open-source hardware repos with complete design files and firmware. | `open-hardware` `pcb-community` `free` `project licences vary` |
| [GitHub topic: kicad-project](https://github.com/topics/kicad-project) | Repositories tagged kicad-project, a quick way to find real KiCad schematics and layouts to study or reuse. | `pcb-community` `open-hardware` `free` `project licences vary` |
| [Arduino Project Hub](https://projecthub.arduino.cc/) | Arduino's official community project gallery with code, wiring diagrams and parts lists, filterable by board and difficulty. | `pcb-community` `open-hardware` `free (proprietary)` `project licences vary` |
| [Made with KiCad](https://www.kicad.org/made-with-kicad/) | Official KiCad showcase of real products and open boards designed in KiCad, many linking to their source files. | `pcb-community` `open-hardware` `free` `project licences vary` |
| [Open Source Hardware Association (OSHWA)](https://www.oshwa.org/) | Home of the Open Source Hardware Definition, best-practice guides and the OSHWA certification programme. | `open-hardware` `free` `CC BY 4.0 (site content)` |
| [GOSH - Gathering for Open Science Hardware](https://openhardware.science/) | Global community and forum for open-source scientific instruments, with project listings and a roadmap for open science hardware. | `open-hardware` `free` `community` |
| [Journal of Open Hardware](https://openhardware.metajnl.com/) | Peer-reviewed open-access journal where every paper describes a fully documented, reproducible open hardware design. | `open-hardware` `free` `open access` `CC BY` |
| [Printables (Prusa)](https://www.printables.com/model) | Free 3D-print model library with a large set of electronics enclosures, project boxes and maker-tool models under CC licences. | `open-hardware` `3d-models` `free` `CC licences vary per model` |
| [GrabCAD Community Library](https://grabcad.com/library) | Millions of free CAD models (STEP/STL/SolidWorks) including dev boards, connectors, motors and robot parts. | `3d-models` `cad` `free (proprietary)` `licence per uploader` |
| [Thingiverse](https://www.thingiverse.com/) | Long-running 3D-print model site with many Arduino/Raspberry Pi enclosures, mounts and robot chassis under CC licences. | `3d-models` `cad` `free (proprietary)` `CC licences vary per model` |
| [Sketchfab downloadable electronics models](https://sketchfab.com/search?features=downloadable&q=arduino&type=models) | Sketchfab search filtered to downloadable models, many electronics boards and components under CC BY or CC0 for renders and videos. | `3d-models` `free (proprietary)` `CC BY / CC0 per model` |
| [FreeCAD Parts Library](https://github.com/FreeCAD/FreeCAD-library) | Community library of FreeCAD/STEP parts including electronic components, connectors and mechanical hardware. | `3d-models` `cad` `open-source` `CC BY 3.0` |
| [FreeCAD Fasteners Workbench](https://github.com/shaise/FreeCAD_FastenersWB) | FreeCAD add-on that generates standard screws, nuts, washers and standoffs for enclosure and robot designs. | `cad` `3d-models` `open-source` `LGPL-2.1` |
| [NopSCADlib](https://github.com/nophead/NopSCADlib) | OpenSCAD library of vitamins (PCBs, displays, fans, connectors, motors) plus enclosure and box generators. | `cad` `3d-models` `open-source` `GPL-3.0` |
| [BOSL2 (Belfry OpenSCAD Library v2)](https://github.com/BelfrySCAD/BOSL2) | Powerful OpenSCAD library for parametric shapes, threads, gears and joiners used in enclosures and robot parts. | `cad` `open-source` `BSD-2-Clause` |
| [Adafruit CAD Parts](https://github.com/adafruit/Adafruit_CAD_Parts) | Official Adafruit repository of 3D CAD models (STEP/Fusion) of Adafruit boards and components for enclosure design. | `3d-models` `cad` `open-source` `MIT` |
| [SparkFun 3D Models](https://github.com/sparkfun/3D_Models) | SparkFun's 3D models of its boards and parts, useful for fitting boards into enclosures and making renders. | `3d-models` `cad` `open-source` `CC BY-SA 4.0` |
| [TraceParts](https://www.traceparts.com/) | Free manufacturer CAD catalogue with millions of 2D/3D models of connectors, motors, sensors and mechanical components. | `cad` `3d-models` `free (proprietary)` `registration required` |
| [SnapEDA](https://www.snapeda.com/) | Free symbols, footprints and 3D models for KiCad, Eagle, Altium and others, searchable by manufacturer part number. | `cad` `3d-models` `free (proprietary)` `registration required` |
| [Poly Haven](https://polyhaven.com/) | CC0 HDRIs, textures and models for photoreal Blender/KiCad PCB renders and video thumbnails. | `3d-models` `stock-media` `open` `CC0` |
| [robot_descriptions.py](https://github.com/robot-descriptions/robot_descriptions.py) | Python package that loads 100+ URDF/MJCF robot descriptions (arms, quadrupeds, humanoids) with one import. | `robot-models` `open-source` `Apache-2.0 (models vary)` |
| [MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie) | DeepMind's curated collection of high-quality MuJoCo models of popular robots, arms, hands and quadrupeds. | `robot-models` `open-source` `Apache-2.0 (models vary)` |
| [Gazebo Fuel](https://app.gazebosim.org/) | Online database of free Gazebo robot models and simulation worlds you can drop straight into a sim. | `robot-models` `3d-models` `free` `licences per model (mostly CC BY 4.0)` |
| [NVIDIA Isaac Sim assets](https://docs.isaacsim.omniverse.nvidia.com/latest/assets/usd_assets_overview.html) | Free USD robot, sensor and environment assets for Isaac Sim (robots, warehouses, props) under NVIDIA's terms. | `robot-models` `3d-models` `free (proprietary)` `NVIDIA licence` |
| [example-robot-data](https://github.com/Gepetto/example-robot-data) | URDF/SRDF models of robots such as Talos, Solo, ANYmal, UR5 and Panda packaged for Pinocchio and other tools. | `robot-models` `open-source` `BSD-3-Clause` |
| [RobotLocomotion models (Drake)](https://github.com/RobotLocomotion/models) | Robot and object models used by Drake and MIT's manipulation course, including arms, grippers and YCB objects. | `robot-models` `open-source` `licences per model` |
| [ROS-Industrial Universal Robots](https://github.com/ros-industrial/universal_robot) | URDF descriptions and MoveIt configs for Universal Robots UR3/UR5/UR10 arms. | `robot-models` `open-source` `Apache-2.0 / BSD-3-Clause` |
| [Unitree ROS](https://github.com/unitreerobotics/unitree_ros) | Official URDF models and Gazebo simulation for Unitree Go1, A1, Aliengo and other quadrupeds. | `robot-models` `open-source` `BSD-3-Clause` |
| [CircuiTikZ](https://ctan.org/pkg/circuitikz) | LaTeX/TikZ package for publication-quality circuit diagrams, ideal for notes, papers and video overlays. | `schematic-drawing` `open-source` `LPPL / GPL` |
| [Schemdraw](https://schemdraw.readthedocs.io/) | Python library that draws clean circuit schematics, logic gates and timing diagrams to SVG/PNG from code. | `schematic-drawing` `open-source` `MIT` |
| [netlistsvg](https://github.com/nturley/netlistsvg) | Renders Yosys JSON netlists as SVG schematics, handy for visualising digital logic designs. | `schematic-drawing` `open-source` `MIT` |
| [draw.io (diagrams.net)](https://www.drawio.com/) | Free diagram editor with built-in electrical, logic-gate and network shape libraries for block and wiring diagrams. | `schematic-drawing` `open-source` `Apache-2.0` |
| [QElectroTech](https://qelectrotech.org/) | Desktop app for electrical, control and PLC wiring diagrams with a large symbol collection. | `schematic-drawing` `open-source` `GPL-2.0` |
| [Wikimedia Commons: Electrical symbols](https://commons.wikimedia.org/wiki/Category:Electrical_symbols) | Free SVG electrical and electronic symbols plus circuit diagrams, mostly public domain or CC BY-SA. | `schematic-drawing` `icons` `open` `public domain / CC licences` |
| [Iconify icon sets](https://icon-sets.iconify.design/) | Search 200,000+ open-source icons across 150+ sets (search 'chip', 'resistor', 'battery') with licence shown per set. | `icons` `open-source` `licences per set (MIT/Apache/CC)` |
| [Tabler Icons](https://tabler.io/icons) | 5,000+ MIT-licensed SVG icons including cpu, circuit, battery, plug and wifi symbols. | `icons` `open-source` `MIT` |
| [Google Material Symbols](https://fonts.google.com/icons) | Google's Material Symbols icon library with memory, developer-board, sensors and electrical icons. | `icons` `open-source` `Apache-2.0` |
| [Simple Icons](https://simpleicons.org/) | SVG brand logos (Arduino, Raspberry Pi, Espressif, KiCad, STM) for thumbnails and diagrams; trademarks still apply. | `icons` `open` `CC0 (brand marks trademarked)` |
| [SVG Repo (electronics)](https://www.svgrepo.com/vectors/electronics/) | Large free SVG collection with electronic component icons; each icon page states its open licence. | `icons` `free` `licences per icon (MIT/CC0/CC BY)` |
| [Kaggle electronics datasets](https://www.kaggle.com/datasets?search=electronic+components) | Kaggle search for free electronic-component and PCB image datasets for classification and detection models. | `dataset` `free (proprietary platform)` `licences per dataset` |
| [PCB Defects (Kaggle)](https://www.kaggle.com/datasets/akhatova/pcb-defects) | Annotated PCB images with six defect types (missing hole, short, open circuit, spur, mouse bite, spurious copper). | `dataset` `free` `licence on dataset page` |
| [DeepPCB](https://github.com/tangsanli5201/DeepPCB) | 1,500 paired template/test PCB images with six annotated defect types for defect detection research. | `dataset` `open-source` `MIT` |
| [Surface Defect Detection datasets](https://github.com/Charmve/Surface-Defect-Detection) | Curated list of industrial surface-defect datasets, including PCB and electronic-component defect sets. | `dataset` `open-source` `MIT (list)` |
| [Hugging Face datasets: PCB](https://huggingface.co/datasets?search=pcb) | Hugging Face Hub search for open PCB, component and circuit-schematic datasets. | `dataset` `free` `licences per dataset` |
| [LeRobot datasets](https://huggingface.co/lerobot) | Hugging Face LeRobot organisation hosting open robot-learning datasets and pretrained policies for low-cost arms. | `dataset` `robot-models` `open-source` `Apache-2.0` |
| [Pexels electronics videos](https://www.pexels.com/search/videos/electronics/) | Free stock videos and photos of circuit boards, soldering and gadgets usable in YouTube videos without attribution. | `stock-media` `free (proprietary)` `Pexels licence` |
| [Pixabay electronics videos](https://pixabay.com/videos/search/electronics/) | Free stock footage, photos and illustrations of electronics usable commercially without attribution. | `stock-media` `free (proprietary)` `Pixabay licence` |
| [Coverr](https://coverr.co/) | Free stock video clips, including technology and workspace B-roll, for commercial use. | `stock-media` `free (proprietary)` `Coverr licence` |
| [Freesound](https://freesound.org/) | Huge collaborative database of sound effects (clicks, beeps, buzzers, motors); check each sound's CC licence. | `stock-media` `free` `CC0 / CC BY / CC BY-NC per sound` |
| [Incompetech (Kevin MacLeod)](https://incompetech.com/) | Thousands of royalty-free music tracks usable with attribution under CC BY 4.0. | `stock-media` `free` `CC BY 4.0` |

<sub>[⬆ back to top](#contents)</sub>

## YouTube, Blogs, Courses, Communities & AI-Built Tools

| Name | Description | Tags |
|---|---|---|
| [NVIDIA SimReady Central (Hugging Face)](https://huggingface.co/spaces/nvidia/simready-central) | Free Hugging Face Space to search 2,500+ open SimReady OpenUSD assets (robot arms, engines, equipment) in plain English, shared on X by Caleb Fahlgren. | `ai-built-tool` `robotics` `3d-models` `simulation` `openusd` |
| [Orion Sandbox](https://orionsandbox.vercel.app/) | Free browser ESP32 simulator where you wire 41 parts on a 3D canvas, describe behaviour in plain English, and follow 30 free lessons plus a PCB studio. | `ai-built-tool` `esp32` `simulator` `iot` `pcb` |
| [Pinlight](https://pinlight.afreenorbit.tech/) | Open-source AI electronics tutor that turns datasheet PDFs into guided lessons beside a 3D Raspberry Pi 5 / Arduino Uno board. | `ai-built-tool` `datasheets` `raspberry-pi` `arduino` `open-source` |
| [Beginning Electronics (intelligent textbook)](https://dmccreary.github.io/beginning-electronics/) | Free CC-licensed textbook with 26 chapters, 16 labs and 70+ AI-assisted browser MicroSims for learning breadboard electronics. | `ai-built-tool` `course` `beginner` `breadboard` `simulator` |
| [Learning MicroPython and Physical Computing](https://dmccreary.github.io/learning-micropython/) | Free open companion textbook teaching MicroPython and physical computing on microcontrollers with hands-on projects. | `ai-built-tool` `course` `micropython` `microcontrollers` `beginner` |
| [FreeCircuitSim](https://freecircuitsim.com/) | Free, no-signup CircuitJS1-based simulator with 360+ example circuits, guided lessons and an AI circuit-explainer prompt tool. | `ai-built-tool` `simulator` `circuits` `beginner` `open-source` |
| [VoltLab](https://voltlab.tekzo.dev/) | Browser circuit builder with a real nodal solver that animates charge flow and shows voltage, current and power at every node, no account needed. | `ai-built-tool` `simulator` `circuits` `beginner` |
| [Velxio](https://velxio.dev/) | AGPL open-source browser workbench running ngspice in WebAssembly and emulating 19 microcontrollers including Arduino, ESP32 and Pico. | `ai-built-tool` `simulator` `arduino` `esp32` `spice` `open-source` |
| [resistor.dev](https://resistor.dev/) | Free browser circuit simulator built on ngspice with a 4-channel oscilloscope and component-damage simulation, shared on r/SideProject. | `ai-built-tool` `simulator` `spice` `oscilloscope` |
| [Breadboard Lab](https://github.com/trickl/breadboard-lab) | MIT-licensed browser breadboard simulator that visualises hidden connections, voltages and currents in real time. | `ai-built-tool` `breadboard` `simulator` `open-source` `beginner` |
| [SolderHub Simulator](https://simulator.solderhub.com/) | AGPL open-source drag-and-wire Arduino/ESP32 simulator with LEDs, buttons, buzzer and relay, no install or account. | `ai-built-tool` `arduino` `esp32` `simulator` `open-source` |
| [Bhilai EE Circuit Simulator](https://bhilaee-simulator.vercel.app/) | Open-source zero-dependency simulator with DC/AC/transient analysis and pre-built EE lab experiment templates. | `ai-built-tool` `simulator` `ee-labs` `oscilloscope` `open-source` |
| [NIL SparkLab](https://nilsparklab.github.io/) | Free virtual electrical & electronics lab with component inspector, IEC/IEEE symbols, circuit sandbox and DOL/star-delta motor starter sims. | `ai-built-tool` `electrical` `motor-control` `simulator` |
| [The Radio Bench](https://radiobench.dev/) | Open-source interactive radio and electronics course with 70+ calculators/explorers following the CEPT novice syllabus. | `ai-built-tool` `rf` `ham-radio` `course` `open-source` |
| [Ohm's Law Clear](https://github.com/bdeeps/ohmslawclear) | Open-source interactive explainer that teaches Ohm's law visually. | `ai-built-tool` `basics` `explainer` `open-source` |
| [Pinout.xyz](https://pinout.xyz/) | CC BY-SA interactive Raspberry Pi GPIO pinout guide with hundreds of HAT pinouts. | `ai-built-tool` `pinout` `raspberry-pi` `reference` `open-source` |
| [Pinout.xyz family (Pico/ESP32)](https://pinout-xyz.github.io/) | Index of beautiful, accessible interactive pinouts for Raspberry Pi Pico, Pico 2, ESP32-C3/C5 and more. | `ai-built-tool` `pinout` `pico` `esp32` `reference` |
| [ESP32 Pinout Studio](https://esp32pin.com/) | Free open-source ESP32-family pinout reference that flags strapping, flash-reserved and ADC2/Wi-Fi conflict pins on every diagram. | `ai-built-tool` `pinout` `esp32` `reference` `open-source` |
| [ESP Pinout Explorer](https://thelastoutpostworkshop.github.io/esp-pinout-explorer/) | Interactive ESP32-S3 and ESP board pinout explorer with pin-function filtering, hosted on GitHub Pages. | `ai-built-tool` `pinout` `esp32` `reference` |
| [MicroPinouts](https://micropinouts.com/) | Free interactive pinout database for dev boards, modules, sensors and logic ICs with clickable pins and specs. | `ai-built-tool` `pinout` `sensors` `microcontrollers` `reference` |
| [PinoutSearch](https://pinoutsearch.com/) | Fast, ad-free static reference of pin tables and manufacturer datasheet links for 760+ dev boards and 1,290+ chips. | `ai-built-tool` `pinout` `datasheets` `reference` |
| [Smiggy's Bench Tools](https://smiggy.com/bench-tools) | Eleven free browser bench tools including resistor/capacitor code decoder, IC pinout finder and chip substitution cross-reference. | `ai-built-tool` `calculators` `resistor` `repair` `reference` |
| [NinjaCalc](https://gbmhunter.github.io/NinjaCalc/) | Open-source embedded engineering calculator toolbox for resistor, PCB, filter and other everyday calculations. | `ai-built-tool` `calculators` `embedded` `pcb` `open-source` |
| [GreatScott!](https://www.youtube.com/@greatscottlab) | Electronics Basics series and DIY builds explained clearly with real measurements. | `youtube` `diy` `projects` `basics` |
| [DroneBot Workshop](https://www.youtube.com/@Dronebotworkshop) | Long-form, well-documented Arduino, ESP32, Raspberry Pi and robotics tutorials. | `youtube` `arduino` `raspberry-pi` `robotics` `beginner` |
| [Afrotechmods](https://www.youtube.com/@Afrotechmods) | Short, clear beginner videos on components like capacitors, diodes, transistors and regulators. | `youtube` `basics` `components` `beginner` |
| [Paul McWhorter](https://www.youtube.com/@paulmcwhorter) | Structured lesson-by-lesson Arduino, Raspberry Pi and Jetson Nano courses with homework. | `youtube` `arduino` `raspberry-pi` `jetson` `course` |
| [ALL ABOUT ELECTRONICS](https://www.youtube.com/@ALLABOUTELECTRONICS) | Concept-focused lectures on circuit theory, analog and digital electronics, popular with Indian students. | `youtube` `fundamentals` `analog` `digital` `india` |
| [Neso Academy](https://www.youtube.com/@nesoacademy) | Full free lecture series on digital electronics, network theory and signals, aligned with university/GATE syllabi. | `youtube` `digital-electronics` `network-theory` `gate-exam` |
| [Low Level](https://www.youtube.com/@LowLevelTV) | Low-level programming, C, assembly and security topics relevant to firmware engineers. | `youtube` `low-level` `c` `security` `embedded` |
| [The Engineering Mindset](https://www.youtube.com/@EngineeringMindset) | Animated explanations of electrical and electronics fundamentals. | `youtube` `electrical` `fundamentals` `animation` |
| [freeCodeCamp](https://www.youtube.com/@freecodecamp) | Free full-length courses including electronics, Arduino and embedded systems programming. | `youtube` `course` `embedded` `arduino` `programming` |
| [Hackaday](https://hackaday.com/) | Daily blog of hardware hacks, electronics projects and engineering stories. | `blog` `news` `hacks` `projects` |
| [DigiKey Maker Blog: Creating an Electronics Starter Kit](https://www.digikey.in/en/maker/blogs/2024/creating-an-electronics-starter-kit) | DigiKey Maker article on assembling a practical electronics starter kit. | `blog` `starter-kit` `beginner` `components` |
| [SparkFun Learn](https://learn.sparkfun.com/) | Free tutorials from electronics basics to hookup guides for sensors and boards. | `blog` `tutorials` `basics` `pbl-hub` |
| [Last Minute Engineers](https://lastminuteengineers.com/) | Beautifully illustrated guides explaining how common modules and sensors work with Arduino. | `blog` `modules` `sensors` `arduino` |
| [Circuit Digest](https://circuitdigest.com/) | India-based site with free electronics tutorials, news and hundreds of projects with code. | `blog` `projects` `india` `tutorials` |
| [Interrupt (Memfault)](https://interrupt.memfault.com/) | Free in-depth firmware engineering articles on debugging, toolchains and embedded best practices. | `blog` `embedded` `firmware` `debugging` |
| [Build Electronic Circuits](https://www.build-electronic-circuits.com/) | Øyvind Nydal Dahl's beginner-friendly tutorials on understanding and building circuits. | `blog` `beginner` `circuits` `tutorials` |
| [NPTEL](https://nptel.ac.in/) | Free IIT/IISc video courses in electronics, VLSI, embedded systems and signals (certification exam optional). | `course` `india` `iit` `analog` `digital` `embedded` |
| [Modern Embedded Systems Programming Course](https://github.com/QuantumLeaps/modern-embedded-programming-course) | Miro Samek's free video course and code on modern embedded programming from basics to RTOS and state machines. | `course` `embedded` `arm` `rtos` `open-source` |
| [awesome-embedded-systems (xor-gate)](https://github.com/xor-gate/awesome-embedded-systems) | CC0 curated list of embedded tools, books and papers focused on microcontrollers. | `roadmap` `embedded` `tools` `curated-list` |
| [Embedded Engineering Roadmap](https://github.com/m3y54m/Embedded-Engineering-Roadmap) | Popular visual roadmap for embedded systems engineers with curated free learning resources per topic. | `roadmap` `embedded` `career` `curated-list` |
| [Roadmap to Embedded Engineering](https://github.com/mateustoin/Roadmap-to-Embedded-Engineering) | Guide splitting embedded learning into hardware and software study paths. | `roadmap` `embedded` `hardware` `software` |
| [EEE Roadmap](https://eee-roadmap.muhammadhazimiyusri.uk/) | MIT-licensed interactive roadmap.sh-style map for electrical & electronic engineering (AI-generated content, partly human-verified). | `roadmap` `ai-built-tool` `electrical` `electronics` `open-source` |
| [Instructables Circuits](https://www.instructables.com/circuits/) | Free community step-by-step electronics and Arduino project instructions. | `pbl-hub` `projects` `diy` `beginner` |
| [Hackster.io Projects](https://www.hackster.io/projects) | Free community projects with schematics and code across Arduino, ESP32, Pi and edge AI. | `pbl-hub` `projects` `iot` `embedded` |
| [Kitspace](https://kitspace.org/) | Open-source site to share, find and build open hardware PCB projects with one-click BOMs. | `pbl-hub` `open-hardware` `pcb` `bom` |
| [r/electronics](https://www.reddit.com/r/electronics/) | Large Reddit community sharing electronics projects, news and discussion. | `community` `reddit` `projects` `discussion` |
| [r/AskElectronics](https://www.reddit.com/r/AskElectronics/) | Reddit Q&A for component-level electronics design and repair questions. | `community` `reddit` `help` `troubleshooting` |
| [r/arduino](https://www.reddit.com/r/arduino/) | Reddit community for Arduino projects and help. | `community` `reddit` `arduino` `beginner` |
| [Electrical Engineering Stack Exchange](https://electronics.stackexchange.com/) | Free Q&A site for electronics and electrical engineering professionals and students. | `community` `q-and-a` `design` `theory` |
| [Arduino Forum](https://forum.arduino.cc/) | Official Arduino community forum for project help and discussion. | `community` `forum` `arduino` `help` |
| [Adafruit Discord](https://adafru.it/discord) | Official public Adafruit Discord server for makers and CircuitPython help. | `community` `discord` `circuitpython` `makers` |
| [Dilum Sanjaya (@DilumSanjaya)](https://x.com/DilumSanjaya) | Developer sharing Claude-built interactive hardware learning apps like Learn Arduino and AI-generated device prototypes. | `x` `ai-built-tool` `arduino` `vibe-coding` |
| [Hackaday on X](https://x.com/hackaday) | Hackaday's feed of daily hardware hacks and projects. | `x` `news` `hacks` `projects` |
| [Adafruit on X](https://x.com/adafruit) | Adafruit's feed of open-source hardware news, guides and maker projects. | `x` `makers` `open-hardware` `news` |
| [Adafruit on Instagram](https://www.instagram.com/adafruit/) | Visual feed of Adafruit projects, new boards and maker builds. | `instagram` `makers` `open-hardware` `projects` |
| [SparkFun on X](https://x.com/sparkfun) | SparkFun's feed of tutorials and maker news. | `x` `makers` `tutorials` `products` |
| [EEVblog on X](https://x.com/eevblog) | Dave Jones's engineering commentary and video updates. | `x` `engineering` `teardowns` |
| [Arduino on X](https://x.com/arduino) | Official Arduino feed of projects, education content and community highlights. | `x` `arduino` `projects` `education` |
| [Arduino on Instagram](https://www.instagram.com/arduino.cc/) | Official Arduino Instagram showcasing community projects. | `instagram` `arduino` `projects` `community` |
| [GreatScott! on Instagram](https://www.instagram.com/greatscottlab/) | Behind-the-scenes and project snapshots from the GreatScott! channel. | `instagram` `diy` `projects` |

<sub>[⬆ back to top](#contents)</sub>

## Latest Additions

| Name | Description | Tags |
|---|---|---|
| [RTL Bench](https://rtlbench.com/) | Free MIT-licensed browser EDA workbench that synthesizes Verilog/SystemVerilog/VHDL into live gate schematics, simulates, runs STA on sky130/GF180/IHP and flashes Tang Nano/iCE40 boards. | `digital-electronics` `fpga` `vlsi` `simulator` `tool` `open-source` `ai-built-tool` `added 2026-10-27` |
| [LogicLab](https://senolgulgonul.github.io/logic/) | Single-file browser logic simulator in Mano Digital Design style with clean uniform-time timing diagrams, flip-flops and cycle stepping for teaching. | `digital-electronics` `simulator` `tool` `open-source` `ai-built-tool` `added 2026-10-27` |
| [Build Your Own ALU](https://jaysonvirissimo.github.io/build-your-own-alu/) | Interactive page where you write real Nand2Tetris HDL in the browser to build 23 chips from a NAND gate up to an ALU. | `digital-electronics` `pbl-project` `tool` `open-source` `ai-built-tool` `added 2026-10-27` |
| [Spade HDL](https://spade-lang.org/) | Modern Rust-inspired hardware description language with pipelines as a first-class construct, compiling to Verilog. | `digital-electronics` `fpga` `tool` `open-source` `added 2026-10-27` |
| [Veryl](https://veryl-lang.org/) | Modern open-source HDL designed as a cleaner SystemVerilog alternative, with formatter, linter and language server, transpiling to SystemVerilog. | `digital-electronics` `fpga` `vlsi` `tool` `open-source` `added 2026-10-27` |
| [Bluespec Compiler (bsc)](https://github.com/B-Lang-org/bsc) | Open-sourced Bluespec SystemVerilog/Haskell compiler and simulator for high-level, rule-based hardware design. | `digital-electronics` `fpga` `vlsi` `tool` `open-source` `added 2026-10-27` |
| [LibreLane](https://github.com/librelane/librelane) | Community successor to OpenLane 2: a complete open-source RTL-to-GDSII ASIC flow built on Yosys, OpenROAD, Magic and KLayout. | `vlsi` `asic` `tool` `open-source` `added 2026-10-27` |
| [SiliconCompiler](https://github.com/siliconcompiler/siliconcompiler) | Python build system that drives open-source and commercial ASIC/FPGA flows from RTL to GDS with one portable script. | `vlsi` `asic` `fpga` `tool` `open-source` `added 2026-10-27` |
| [sv2v](https://github.com/zachjs/sv2v) | Converts SystemVerilog to plain Verilog-2005 so SV designs work with Yosys, Icarus and other open tools. | `digital-electronics` `fpga` `vlsi` `tool` `open-source` `added 2026-10-27` |
| [slang](https://github.com/MikePopoloski/slang) | Fast, fully standards-compliant SystemVerilog compiler and library for parsing, elaboration and linting. | `digital-electronics` `vlsi` `tool` `open-source` `added 2026-10-27` |
| [Icestudio](https://github.com/FPGAwars/icestudio) | Visual block-based editor for open FPGA boards (iCE40, ECP5) built on the open toolchain, great for beginners. | `fpga` `digital-electronics` `tool` `open-source` `added 2026-10-27` |
| [Apio](https://github.com/FPGAwars/apio) | One-command CLI that installs the open FPGA toolchain and builds, simulates and uploads designs to dozens of iCE40/ECP5/Gowin boards. | `fpga` `tool` `open-source` `added 2026-10-27` |
| [openFPGALoader](https://github.com/trabucayre/openFPGALoader) | Universal open-source utility for programming Xilinx, Intel, Lattice, Gowin and other FPGAs over many cable types. | `fpga` `tool` `open-source` `added 2026-10-27` |
| [FuseSoC](https://github.com/olofk/fusesoc) | Package manager and build abstraction for HDL IP cores, letting one core description target many simulators and FPGA tools. | `fpga` `vlsi` `tool` `open-source` `added 2026-10-27` |
| [VUnit](https://vunit.github.io/) | Open-source unit-testing framework for VHDL and SystemVerilog with test runner, CI integration and verification components. | `fpga` `digital-electronics` `tool` `open-source` `added 2026-10-27` |
| [pyuvm](https://github.com/pyuvm/pyuvm) | UVM implemented in Python on top of cocotb, bringing industry-style verification methodology to open simulators. | `vlsi` `digital-electronics` `tool` `open-source` `added 2026-10-27` |
| [MIT 6.205 Digital Systems Laboratory](https://fpga.mit.edu/6205/F25) | MIT's full FPGA lab course site with lecture notes, SystemVerilog labs and project write-ups, free to read online. | `fpga` `digital-electronics` `course` `added 2026-10-27` |
| [Chipyard](https://github.com/ucb-bar/chipyard) | Berkeley's framework for building full RISC-V SoCs in Chisel, from simulation and FPGA prototyping to VLSI tape-out. | `vlsi` `digital-electronics` `tool` `pbl-project` `open-source` `added 2026-10-27` |
| [Konnect](https://github.com/mixelpixx/Konnect) | Rust native KiCad 10 plugin exposing 170+ schematic, layout, routing and review tools to Claude or any LLM via MCP (AGPL-3.0, free for individuals). | `pcb` `ai-built-tool` `open-source` `tool` `added 2026-10-28` |
| [KiCadRoutingTools](https://github.com/drandyhaas/KiCadRoutingTools) | Python/Rust KiCad routing plugin with differential pairs, length matching, plane and via placement, aimed beyond traditional autorouters. | `pcb` `tool` `open-source` `added 2026-10-28` |
| [pcb-toolkit](https://github.com/akiselev/pcb-toolkit) | MIT Rust library and CLI of PCB calculators (trace impedance, current capacity, vias) compatible with Saturn PCB Toolkit, each stating its model's validity range. | `pcb` `calculator` `open-source` `tool` `added 2026-10-28` |
| [Synth (Abstract Machines)](https://www.absmach.eu/blog/synth-core-announcement/) | Apache-2.0 circuit compiler that turns text-based board descriptions into KiCad schematics, layouts and BOMs, with agent tooling. | `pcb` `blog` `open-source` `tool` `added 2026-10-28` |
| [CERN KiCad Component Library](https://home.cern/cerns-kicad-component-library-now-open-source) | CERN opened its complete KiCad component library for anyone designing boards, announced May 2026. | `pcb` `open-hardware` `open-source` `blog` `added 2026-10-28` |
| [mcp-server-kicad](https://github.com/productofamerica/mcp-server-kicad) | 109 MCP tools letting an AI assistant edit real KiCad schematics, layouts, ERC/DRC and exports without corrupting files (maintenance mode). | `pcb` `ai-built-tool` `open-source` `tool` `added 2026-10-28` |
| [KiCad AI Assistant](https://github.com/paul356/KiCad-AI-Assistant) | KiCad plugin embedding an LLM chat panel with a built-in MCP server to edit schematics and placement in natural language (KiCad 10). | `pcb` `ai-built-tool` `open-source` `tool` `added 2026-10-28` |
| [kicad-tools](https://github.com/rjwalters/kicad-tools) | Standalone Python tools to parse and manipulate KiCad schematic and PCB files, with an A* router and placement optimizer. | `pcb` `tool` `open-source` `added 2026-10-28` |
| [StripForge](https://forum.kicad.info/t/stripforge-0-2-0-beta-stripboard-layout-inside-kicad-10/71835) | Beta KiCad 10 plugin for laying out stripboard/veroboard projects inside KiCad. | `pcb` `tool` `open-source` `community` `added 2026-10-28` |
| [TraceMaker router benchmark (PUNKFAB)](https://punkfab.com/blog/tracemaker-router/) | Practical benchmark write-up of TraceMaker, a new open-source C++/CUDA KiCad autorouter, against a commercial router. | `pcb` `blog` `open-source` `added 2026-10-28` |
| [OSHWA Open Source Hardware Definition](https://www.oshwa.org/definition/) | The community definition of open source hardware that underpins OSHWA certification. | `open-hardware` `pcb` `community` `open-source` `added 2026-10-28` |
| [Seeed OPL KiCad Library](https://github.com/Seeed-Studio/OPL_Kicad_Library) | Seeed Studio's open parts library of KiCad symbols and footprints for parts stocked in its fabrication service. | `pcb` `3d-models` `open-source` `added 2026-10-28` |
| [TinyGo](https://github.com/tinygo-org/tinygo) | Go compiler for microcontrollers and WebAssembly supporting many boards. | `embedded` `tool` `open-source` `added 2026-10-29` |
| [TinyUSB](https://github.com/hathach/tinyusb) | Open-source cross-platform USB host/device stack for embedded systems. | `embedded` `tool` `open-source` `added 2026-10-29` |
| [probe-rs](https://github.com/probe-rs/probe-rs) | Rust-based debugging and flashing toolkit for ARM and RISC-V targets. | `embedded` `tool` `open-source` `added 2026-10-29` |
| [CMSIS 6](https://github.com/ARM-software/CMSIS_6) | Arm's open vendor-independent software interface for Cortex-M microcontrollers. | `embedded` `tool` `open-source` `added 2026-10-29` |
| [Unity Test](https://github.com/ThrowTheSwitch/Unity) | Lightweight C unit-testing framework designed for embedded firmware. | `embedded` `tool` `open-source` `added 2026-10-29` |
| [OpenThread](https://github.com/openthread/openthread) | Open-source implementation of the Thread mesh networking protocol. | `iot` `tool` `open-source` `added 2026-10-29` |
| [matter.js](https://github.com/matter-js/matter.js) | TypeScript implementation of the Matter smart-home protocol. | `iot` `tool` `open-source` `added 2026-10-29` |
| [mruby](https://github.com/mruby/mruby) | Lightweight embeddable Ruby for resource-constrained devices. | `embedded` `tool` `open-source` `added 2026-10-29` |
| [BasicMAC LoRaWAN](https://github.com/lorabasics/basicmac) | Open LoRaWAN MAC stack for microcontroller end nodes. | `iot` `tool` `open-source` `added 2026-10-29` |
| [Mbed OS](https://github.com/ARMmbed/mbed-os) | Open-source embedded OS for connected Arm Cortex-M devices. | `embedded` `iot` `tool` `open-source` `added 2026-10-29` |
| [TRLC-DK1 (open source dev kit)](https://github.com/robot-learning-co/trlc-dk1) | Apache-2.0 hardware CAD, URDF and LeRobot plugin for a low-cost AI-native robot arm. | `robotics` `tool` `open-source` `added 2026-10-30` |
| [MuJoCo Robotics Lab](https://github.com/ozkannceylan/mujoco-robotics-lab) | Hands-on curriculum from 2-link arm kinematics to dual-arm and locomotion in MuJoCo with Pinocchio. | `robotics` `pbl-project` `open-source` `added 2026-10-30` |
| [Autonomous UAV Guide](https://github.com/guilyx/autonomous-uav-guide) | From-scratch Python algorithms with runnable simulations for multirotor, VTOL and fixed-wing UAVs. | `drones` `pbl-project` `open-source` `added 2026-10-30` |
| [Quadcopter Modeling & Simulation (MathWorks)](https://github.com/MathWorks-Teaching-Resources/Quadcopter-Modeling-Simulation) | Interactive MATLAB live scripts teaching quadcopter modeling up to package-delivery simulation. | `drones` `course` `free (proprietary)` `added 2026-10-30` |
| [SES 598 Space Robotics and AI](https://github.com/DREAMS-lab/ses598-space-robotics-and-ai-2026) | CC BY ASU course materials on PX4, ROS 2, LQR, SLAM and RL. | `robotics` `drones` `course` `open-source` `added 2026-10-30` |
| [RoboCup SSL Electronics Textbook](https://github.com/sjtu-src/RoboCup_SSL_Textbook_Electronics) | Open community textbook on robot power, sensing and control electronics. | `robotics` `power` `book` `open-source` `added 2026-10-30` |
| [Advanced Mobile Robots Book](https://github.com/Pouya-Mansournia/advanced-mobile-robotics-book) | Open book on drive systems, odometry, SLAM, ROS 2 and ESP32 control. | `robotics` `book` `open-source` `added 2026-10-30` |
| [Robot System Quest (RSQ)](https://github.com/mertcookimg/robot-system-quest) | Games and lessons for learning ROS 2. | `robotics` `pbl-project` `open-source` `added 2026-10-30` |
| [NeoRacer V2](https://github.com/Neobotics-Foundation-Inc/neoracer-v2) | 3D-printable open chassis for autonomous racing education. | `robotics` `3d-models` `open-source` `added 2026-10-30` |
| [ros2top](https://github.com/AhmedARadwan/ros2top) | Top-style live monitor for ROS 2 nodes. | `robotics` `tool` `open-source` `added 2026-10-30` |
| [Physical AI & Humanoid Robotics Interactive Textbook](https://github.com/abdullahzunorain/text-book-AI-Humanoid-Rebotics-CLAUDE) | Claude-built interactive textbook covering ROS 2, Gazebo, Isaac and VLA models. | `robotics` `ai-built-tool` `book` `open-source` `added 2026-10-30` |

<sub>[⬆ back to top](#contents)</sub>

## Contributing

Found a great free or open-source electronics resource? See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

This list is released under CC0 1.0. Each linked resource keeps its own licence.


<sub>Last generated 2026-10-31.</sub>
