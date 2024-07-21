const itemsPerPage = 12;
let currentPage = 1;
let currentCategory = "全部";


const devices = [
    {
        "img": "images/fig/图片%201.png",
        "alt": "UJ23型携带式直流电位差计",
        "name": "UJ23型携带式直流电位差计",
        "category": ["电气类", "测量类"],
        "serial": "1/7115",
        "date": "1979",
        "size": "34*23*19 cm",
        "year": "1979",
        "location": "4010",
        "description": "这款UJ23型携带式直流电位差计是一种高精度的便携式测量仪器，广泛应用于工业和实验室环境。它能够精确测量电压、电流和电阻，特别适用于现场测量和野外实验。其坚固的设计和高质量组件确保了在各种环境条件下的稳定性能，是电气设备校准和科研实验的理想选择。"
    },
    {
        "img": "images/fig/图片%202.png",
        "alt": "D/A-FN型红外反射式光电测速仪",
        "name": "D/A-FN型红外反射式光电测速仪",
        "category": ["测量类"],
        "serial": "2/7116",
        "date": "80年代",
        "size": "23*18*11 cm",
        "year": "1980",
        "location": "4009",
        "description": "D/A-FN型红外反射式光电测速仪是一种高精度的测速仪器，广泛应用于工业和实验室环境。它采用红外反射技术，可以精确测量旋转和移动物体的速度，适用于各种机械设备和动态系统的监控与测量。其坚固耐用的设计确保在恶劣环境下也能稳定工作。"
    },
    {
        "img": "images/fig/图片%203.png",
        "alt": "UJ31型低电势直流电位差计",
        "name": "UJ31型低电势直流电位差计",
        "category": ["测量类"],
        "serial": "3/7118",
        "date": "1974",
        "size": "40*25*11 cm",
        "year": "1974",
        "location": "4008",
        "description": "UJ31型低电势直流电位差计是一种精密的测量仪器，专门用于测量低电势直流电压。它在科研和工业实验中应用广泛，能够提供高度准确和稳定的测量结果。其设计坚固，适合在各种实验环境中使用，是科研人员和工程师的理想选择。"
    },
    {
        "img": "images/fig/图片%204.png",
        "alt": "QJ35型变压比电桥",
        "name": "QJ35型变压比电桥",
        "category": ["电气类", "测量类"],
        "serial": "4/7120",
        "date": "1978",
        "size": "47*35*21 cm",
        "year": "1978",
        "location": "4007",
        "description": "QJ35型变压比电桥是一种用于变压器变压比测量的高精度仪器。它广泛应用于电力和电子领域，能够提供准确、可靠的变压比测量。其坚固耐用的设计适用于各种实验室和现场环境，是电力设备检测和维护的重要工具。"
    },
    {
        "img": "images/fig/图片%205.png",
        "alt": "LG-2冷光源",
        "name": "LG-2冷光源",
        "category": ["其他类"],
        "serial": "5/7122",
        "date": "1985",
        "size": "31*27*13 cm",
        "year": "1985",
        "location": "4005",
        "description": "LG-2冷光源是一种用于显微镜和其他光学设备的照明装置。它提供高亮度、低温度的光源，避免对样品的热损伤。其设计紧凑、易于操作，广泛应用于生物医学研究和实验室环境中，确保在观察微小结构时提供清晰、稳定的照明。"
    },
    {
        "img": "images/fig/图片%206.png",
        "alt": "电（压）表（0201A 790202）",
        "name": "电（压）表（0201A 790202）",
        "category": ["测量类"],
        "serial": "6/7124",
        "date": "1979",
        "size": "36*36*16 cm",
        "year": "1979",
        "location": "4006",
        "description": "电（压）表（0201A 790202）是一种广泛应用于实验室和工业测量中的精密仪器。它能够准确测量电压，适用于各种电子设备的测试和校准。其坚固的结构和高灵敏度确保了在不同环境下的稳定性能，是电气工程和技术研究的可靠工具。"
    },
    {
        "img": "images/fig/图片%207.png",
        "alt": "失真度测量仪",
        "name": "失真度测量仪",
        "category": ["测量类"],
        "serial": "7/7126",
        "date": "1988",
        "size": "44*42*20 cm",
        "year": "1988",
        "location": "4101",
        "description": "失真度测量仪是一种专用于检测音频信号失真的高精度仪器。它能够测量音频信号中的各种失真成分，确保音频设备的输出质量。其高精度和可靠性使其成为音频设备制造和维护中的重要工具，广泛应用于实验室和生产线上。"
    },
    {
        "img": "images/fig/图片%208.png",
        "alt": "LZ直流电路实验板",
        "name": "LZ直流电路实验板",
        "category": ["电子类"],
        "serial": "8/7127",
        "date": "1980年左右",
        "size": "25*17*8 cm",
        "year": "1980年左右",
        "location": "4114",
        "description": "LZ直流电路实验板是一种用于教学和实验的多功能平台。它能够进行各种直流电路的搭建和测试，帮助学生理解和掌握基本的电路理论。其设计简洁、操作方便，是电子工程教学中的理想工具。"
    },
    {
        "img": "images/fig/图片%209.png",
        "alt": "DJ64003调节变阻器",
        "name": "DJ64003调节变阻器",
        "category": ["电子类"],
        "serial": "9/7129",
        "date": "1964",
        "size": "29*20*23 cm",
        "year": "1964",
        "location": "4007",
        "description": "DJ64003调节变阻器是一种用于精确调节电阻值的实验仪器。它广泛应用于电路设计、测试和实验中，能够精确控制电流和电压。其高稳定性和精确度使其成为实验室和研究机构中的重要设备。"
    },
    {
        "img": "images/fig/图片%2010.png",
        "alt": "PY1A转矩测速仪",
        "name": "PY1A转矩测速仪",
        "category": ["测量类"],
        "serial": "10/7130",
        "date": "1985",
        "size": "45*39*14 cm",
        "year": "1985",
        "location": "4103",
        "description": "PY1A转矩测速仪是一种用于精确测量转矩的高精度仪器，广泛应用于各种工业和实验室环境。该设备能够提供稳定的转矩测量结果，适用于电机、机械设备的性能测试和校准。其坚固的设计和高质量的传感器确保了在不同环境条件下的可靠性能，是转矩测量的理想工具。"
    },
    {
        "img": "images/fig/图片%2011.png",
        "alt": "TSGC2接触调压器（三相）（0206 980458）",
        "name": "TSGC2接触调压器（三相）（0206 980458）",
        "category": ["电气类", "测量类"],
        "serial": "11/7133",
        "date": "1975",
        "size": "19*19*46 cm",
        "year": "1975",
        "location": "4113",
        "description": "TSGC2接触调压器（三相）（0206 980458）是一种高精度电气设备，广泛用于电力系统和实验室环境。该设备能够在电力系统中提供稳定的电压调节，确保设备的正常运行。其设计坚固耐用，操作简便，是电力设备调节和维护的理想选择。"
    },
    {
        "img": "images/fig/图片%2013.png",
        "alt": "博创嵌入式开发平台（38cm29cm13cm）",
        "name": "博创嵌入式开发平台（38cm29cm13cm）",
        "category": ["电子类"],
        "serial": "14/7136、7137",
        "date": "2008年左右",
        "size": "48*31*15 cm",
        "year": "2008年左右",
        "location": "3998",
        "description": "博创嵌入式开发平台是一款为嵌入式系统开发设计的高性能平台，适用于教育和科研领域。该平台提供丰富的接口和强大的处理能力，支持多种嵌入式操作系统和开发工具，有助于快速原型设计和系统集成，是嵌入式开发人员的重要工具。"
    },
    {
        "img": "images/fig/图片%2014.png",
        "alt": "MG41-AVW型钳形表（0202 880163）",
        "name": "MG41-AVW型钳形表（0202 880163）",
        "category": ["测量类"],
        "serial": "15/7138",
        "date": "1989",
        "size": "43*11*8 cm",
        "year": "1989",
        "location": "3997",
        "description": "MG41-AVW型钳形表是一种高精度电流测量仪器，广泛应用于电气工程和维护工作。该设备能够快速准确地测量电流、电压和电阻，操作简单，性能稳定，是电气测试和故障排除的必备工具。"
    },
    {
        "img": "images/fig/图片%2015.png",
        "alt": "XH2031逻辑教学仪",
        "name": "XH2031逻辑教学仪",
        "category": ["电子类"],
        "serial": "16/7140",
        "date": "1982",
        "size": "43*33*20 cm",
        "year": "1982",
        "location": "3996",
        "description": "XH2031逻辑教学仪是一种专为电子工程教育设计的教学仪器，帮助学生理解数字逻辑电路的工作原理。该设备提供各种逻辑电路实验功能，结构清晰，操作简便，是电子技术教学的重要辅助工具。"
    },
    {
        "img": "images/fig/图片%2016.png",
        "alt": "发电机励磁机备件",
        "name": "发电机励磁机备件",
        "category": ["电气类"],
        "serial": "17/7141",
        "date": "未知",
        "size": "17*16*8 cm",
        "year": "未知",
        "location": "3995",
        "description": "发电机励磁机备件是发电设备中的关键组件，用于提供励磁电流，确保发电机的正常运行。尽管生产日期和年代不详，但其在电气工程领域中的重要性毋庸置疑，广泛应用于电厂和大型工业设施中。"
    },
    {
        "img": "images/fig/图片%2017.png",
        "alt": "CA0C-29晶体管稳压稳流电源",
        "name": "CA0C-29晶体管稳压稳流电源",
        "category": ["电子类"],
        "serial": "18/7143",
        "date": "1991",
        "size": "33*25*13 cm",
        "year": "1991",
        "location": "3994",
        "description": "CA0C-29晶体管稳压稳流电源是一种用于实验室和工业应用的高性能电源设备。其稳定的输出电压和电流，使其成为电子设备测试和校准的理想选择。生产于1991年，至今仍然在许多场合中发挥着重要作用。"
    },
    {
        "img": "images/fig/图片%2018.png",
        "alt": "JWY-30G型直流稳压电源",
        "name": "JWY-30G型直流稳压电源",
        "category": ["电子类"],
        "serial": "19/7144",
        "date": "1984",
        "size": "30*22*13 cm",
        "year": "1984",
        "location": "3993",
        "description": "JWY-30G型直流稳压电源是一款经典的直流电源设备，广泛应用于科研和工业领域。其稳压功能确保了输出电压的稳定，适合各种电气设备的测试和运行。自1984年生产以来，一直在各类应用中表现出色。"
    },

    {
        "img": "images/fig/图片%2019.png",
        "alt": "欧姆表",
        "name": "欧姆表",
        "category": ["测量类"],
        "serial": "20/7145",
        "date": "1978",
        "size": "27*19*16 cm",
        "year": "1978",
        "location": "3992",
        "description": "欧姆表是一种基础的电阻测量仪器，广泛应用于电气工程和电子实验中。生产于1978年，这款设备通过简单的操作和可靠的测量，为用户提供了精准的电阻值，是实验室和现场测试的常用工具。"
    },
    {
        "img": "images/fig/图片%2020.png",
        "alt": "D3-4型单相相位表",
        "name": "D3-4型单相相位表",
        "category": ["测量类"],
        "serial": "21/7146",
        "date": "1978",
        "size": "29*23*18 cm",
        "year": "1978",
        "location": "3991",
        "description": "D3-4型单相相位表是一款用于测量单相电路中电压和电流相位差的仪器，广泛应用于电气设备的调试和检修。生产于1978年，这款设备通过精确的相位测量，帮助用户分析电路性能，是电气工程师的重要工具。"
    },
    {
        "img": "images/fig/图片%2021.png",
        "alt": "SXJ系列学习机、XMN-1小型模拟计算机",
        "name": "SXJ系列学习机、XMN-1小型模拟计算机",
        "category": ["电子类"],
        "serial": "22/7147",
        "date": "2000",
        "size": "51*36*14 cm",
        "year": "2000",
        "location": "3990",
        "description": "SXJ系列学习机和XMN-1小型模拟计算机是用于电子电路教育的综合性学习平台。它们涵盖了分立元件、集成电路、数字电路和模拟计算的实验内容，适合高校和科研机构的教学使用。生产于2000年，这些设备为学生提供了直观的实验环境，帮助理解复杂的电子原理。"
    },
    {
        "img": "images/fig/图片%2022.png",
        "alt": "0A0I0008毫伏表",
        "name": "0A0I0008毫伏表",
        "category": ["测量类"],
        "serial": "23/7149",
        "date": "90年代",
        "size": "48*17*17 cm",
        "year": "90年代",
        "location": "3989",
        "description": "0A0I0008毫伏表是一种高精度测量仪器，主要用于测量微小电压变化。它在科研和工业应用中起着重要作用，特别是在需要高灵敏度和高准确度的电气测量中。生产于90年代，该仪器以其可靠性和精确性著称。"
    },
    {
        "img": "images/fig/图片%2023.png",
        "alt": "OX-11型信号继电器",
        "name": "OX-11型信号继电器",
        "category": ["电子类"],
        "serial": "24/7150",
        "date": "1984",
        "size": "10*10*12 cm",
        "year": "1984",
        "location": "3988",
        "description": "OX-11型信号继电器是一种电子设备，用于控制和切换信号线路。它广泛应用于通信和控制系统中，确保信号的准确传递。生产于1984年，该继电器以其高可靠性和长寿命著称，适用于各种复杂的电子环境。"
    },
    {
        "img": "images/fig/图片%2024.png",
        "alt": "手摇钻",
        "name": "手摇钻",
        "category": ["其他类"],
        "serial": "25/7151",
        "date": "195X",
        "size": "36*20*8 cm",
        "year": "195X",
        "location": "3987",
        "description": "手摇钻是一种手动工具，适用于木材、金属和塑料等材料的钻孔操作。生产于1950年代，这款手摇钻以其坚固耐用、操作简单著称，是早期工业和家庭作业中的重要工具。"
    },
    {
        "img": "images/fig/图片%2025.png",
        "alt": "GFG-8060G-X11 950153信号发生器",
        "name": "GFG-8060G-X11 950153信号发生器",
        "category": ["电子类"],
        "serial": "27/7156",
        "date": "1998",
        "size": "29*25*10 cm",
        "year": "1998",
        "location": "3986",
        "description": "GFG-8060G-X11 950153信号发生器是一种高精度电子测试仪器，用于生成各种波形信号。生产于1998年，这款设备广泛应用于电子实验室和工业测量中，通过提供精确的信号源，帮助工程师进行电路测试和校准。"
    },
    {
        "img": "images/fig/图片%2026.png",
        "alt": "KTDR-Ⅱ可调电容箱",
        "name": "KTDR-Ⅱ可调电容箱",
        "category": ["电子类"],
        "serial": "28/7157",
        "date": "1987",
        "size": "26*15*23 cm",
        "year": "1987",
        "location": "3985",
        "description": "KTDR-Ⅱ可调电容箱是一种用于电气实验和教学的设备。生产于1987年，该设备通过调节电容值，帮助用户研究和测试电容在电路中的作用，广泛应用于科研和教学领域，具有高精度和稳定性。"
    },
    {
        "img": "images/fig/图片%2027.png",
        "alt": "SG 1646多功能函数信号发生器/频率计",
        "name": "SG 1646多功能函数信号发生器/频率计",
        "category": ["电子类"],
        "serial": "29/7158",
        "date": "2001",
        "size": "36*32*10 cm",
        "year": "2001",
        "location": "3984",
        "description": "SG 1646多功能函数信号发生器/频率计是一种综合性测试设备，生产于2001年，广泛应用于电子实验室和研发中心。该设备能生成多种函数波形并精确测量频率，是电子工程师进行信号测试和电路分析的重要工具。"
    },
    {
        "img": "images/fig/图片%2028.png",
        "alt": "函数发生器",
        "name": "函数发生器",
        "category": ["电子类"],
        "serial": "30/7159",
        "date": "2001",
        "size": "20*25*8 cm",
        "year": "2001",
        "location": "3983",
        "description": "函数发生器是一种电子仪器，主要用于生成不同频率和波形的信号。生产于2001年，该设备具有高稳定性和精确度，适用于各种电子测试和实验，帮助工程师进行电路设计和故障诊断。"
    },
    {
        "img": "images/fig/图片%2029.png",
        "alt": "QS18A型万能电桥",
        "name": "QS18A型万能电桥",
        "category": ["电气类", "测量类"],
        "serial": "31/7161",
        "date": "1984",
        "size": "29*17*22 cm",
        "year": "1984",
        "location": "3982",
        "description": "QS18A型万能电桥是一种多功能电气测量仪器，生产于1984年。该设备适用于测量电阻、电感和电容等参数，广泛应用于实验室和工业测试环境。其高精度和稳定性使其成为电子工程师和技术人员进行电路分析和故障排除的理想工具。"
    },
    {
        "img": "images/fig/图片%2030.png",
        "alt": "微量进样器",
        "name": "微量进样器",
        "category": ["生物物理类"],
        "serial": "33/7163",
        "date": "1985",
        "size": "22*5*3 cm",
        "year": "1985",
        "location": "3981",
        "description": "微量进样器是一种精密的生物物理实验设备，生产于1985年。它主要用于实验室中的微量样品注射，确保样品的准确测量和传递。其小巧的设计和高精度性能使其在生物研究和分析中广受欢迎。"
    },
    {
        "img": "images/fig/图片%2031.png",
        "alt": "LKI-1电感组",
        "name": "LKI-1电感组",
        "category": ["电气类"],
        "serial": "34/7164",
        "date": "1985",
        "size": "45*27*13 cm",
        "year": "1985",
        "location": "3980",
        "description": "LKI-1电感组是一种用于电气实验和教学的设备，生产于1985年。该设备提供多种电感值的选择，适用于电感相关实验和测试。其稳定的性能和高精度使其成为电气工程教育和研究中的重要工具。"
    },
    {
        "img": "images/fig/图片%2032.png",
        "alt": "51/PIC单片机试验仪",
        "name": "51/PIC单片机试验仪",
        "category": ["电子类"],
        "serial": "35/7166",
        "date": "1985",
        "size": "45*28*12 cm",
        "year": "1985",
        "location": "3979",
        "description": "51/PIC单片机试验仪是一种用于单片机教学和实验的设备，生产于1985年。它支持51系列和PIC系列单片机的编程与调试，广泛应用于高校和培训机构。该试验仪提供了丰富的实验接口，便于学生进行各种单片机应用的开发和学习。"
    },
    {
        "img": "images/fig/图片%2033.png",
        "alt": "交流安培计",
        "name": "交流安培计",
        "category": ["电气类", "测量类"],
        "serial": "36/7167",
        "date": "1954",
        "size": "17*9*17 cm",
        "year": "1954",
        "location": "3978",
        "description": "交流安培计是一种用于测量交流电流的仪器，生产于1954年。其精确的测量能力和稳定的性能使其在电气工程和实验室测试中广泛应用。坚固耐用的设计确保了设备在各种工作环境中的可靠性，是电流测量的理想工具。"
    },
    {
        "img": "images/fig/图片%2034.png",
        "alt": "交流安培表",
        "name": "交流安培表",
        "category": ["电气类", "测量类"],
        "serial": "37/7169",
        "date": "1958",
        "size": "17*9*17 cm",
        "year": "1958",
        "location": "3977",
        "description": "交流安培表是一种测量交流电流的仪表，生产于1958年。该设备具备高精度和稳定性，适用于电气工程和实验室应用。其可靠的性能和坚固的结构设计，使其成为电流测量和电气设备校准的理想选择。"
    },
    {
        "img": "images/fig/图片%2035.png",
        "alt": "DYS18H-LABVIEW虚拟仪器实验系统",
        "name": "DYS18H-LABVIEW虚拟仪器实验系统",
        "category": ["电子类"],
        "serial": "38/7170",
        "date": "2006",
        "size": "38*33*13 cm",
        "year": "2006",
        "location": "3976",
        "description": "DYS18H-LABVIEW虚拟仪器实验系统是一种基于LABVIEW平台的综合实验设备，生产于2006年。该系统集成了多种虚拟仪器功能，提供丰富的实验接口和灵活的编程环境，是进行电子实验和教学的理想工具，广泛应用于高校和科研机构。"
    },
    {
        "img": "images/fig/图片%2036.png",
        "alt": "DSO-2090USB 虚拟示波器",
        "name": "DSO-2090USB 虚拟示波器",
        "category": ["电子类"],
        "serial": "40/7172",
        "date": "2000",
        "size": "24*18*8 cm",
        "year": "2000",
        "location": "3975",
        "description": "DSO-2090USB 虚拟示波器是一款高性能的数字存储示波器，生产于2000年。它通过USB接口连接电脑，提供高分辨率的波形显示和强大的数据分析功能，广泛应用于电子研发和教育领域，是一款经济实用的测量仪器。"
    },
    {
        "img": "images/fig/图片%2037.png",
        "alt": "滑桿式变阻器",
        "name": "滑桿式变阻器",
        "category": ["电气类"],
        "serial": "41/7173",
        "date": "1970",
        "size": "47*22*20 cm",
        "year": "1970",
        "location": "1105",
        "description": "滑桿式变阻器是一种常用的电气元件，生产于1970年。它通过改变滑动接触点的位置来调整电阻值，广泛应用于电路实验和电气调节。其坚固的结构和可靠的性能，使其成为实验室和工业应用中的重要工具。"
    },
    {
        "img": "images/fig/图片%2037.png",
        "alt": "滑线式变阻器",
        "name": "滑线式变阻器",
        "category": ["电气类"],
        "serial": "37/7174",
        "date": "1963",
        "size": "37*18*15 cm",
        "year": "1963",
        "location": "3973",
        "description": "滑线式变阻器是一种用于调节电流和电压的电气设备，生产于1963年。它通过滑动接触点的移动来改变电阻值，被广泛应用于电气实验和调节电路中。其可靠的性能和耐用的设计，使其在教学和科研中得到了广泛的应用。"
    },
    {
        "img": "images/fig/图片%2038.png",
        "alt": "电动系交直流安培表",
        "name": "电动系交直流安培表",
        "category": ["电气类", "测量类"],
        "serial": "38/7175",
        "date": "1979",
        "size": "44*30*15 cm",
        "year": "1979",
        "location": "3972",
        "description": "电动系交直流安培表是一种测量电流的仪器，生产于1979年。它能够精确测量交直流电流，广泛应用于电气设备的校准和实验室测量。其高精度和稳定性，使其成为工业和科研领域的重要工具。"
    },
    {
        "img": "images/fig/图片%2039.png",
        "alt": "电阻箱",
        "name": "电阻箱",
        "category": ["电气类"],
        "serial": "39/7176",
        "date": "50、60年代",
        "size": "38*12*13 cm",
        "year": "50、60年代",
        "location": "3971",
        "description": "电阻箱是一种用于精确调节电阻值的设备，生产于50、60年代。它通过选择不同的电阻组合来实现多种电阻值，广泛应用于电路实验和调试。其稳定的性能和精确的调节能力，使其在教学和科研中得到了广泛使用。"
    },
    {
        "img": "images/fig/图片%2040.png",
        "alt": "双管滑线变阻器",
        "name": "双管滑线变阻器",
        "category": ["电气类"],
        "serial": "40/7177",
        "date": "1998",
        "size": "40*16*17 cm",
        "year": "1998",
        "location": "3970",
        "description": "双管滑线变阻器是一种用于调节电流和电压的电气设备，生产于1998年。它通过滑动接触点的移动来改变电阻值，被广泛应用于电气实验和调节电路中。其可靠的性能和耐用的设计，使其在教学和科研中得到了广泛的应用。"
    },
    {
        "img": "images/fig/图片%2041.png",
        "alt": "酸度计",
        "name": "酸度计",
        "category": ["生物物理类"],
        "serial": "41/7180",
        "date": "1988",
        "size": "20*24*20 cm",
        "year": "1988",
        "location": "3969",
        "description": "酸度计是一种用于测量液体酸碱度的仪器，生产于1988年。它广泛应用于化学、环保、生物等领域，通过电极测量液体中的氢离子浓度，精确度高，操作简便，是实验室和工业生产中常用的检测工具。"
    },
    {
        "img": "images/fig/图片%2042.png",
        "alt": "小型三用水箱",
        "name": "小型三用水箱",
        "category": ["生物物理类"],
        "serial": "42/7181",
        "date": "1779",
        "size": "53*23*27 cm",
        "year": "1779",
        "location": "3968",
        "description": "小型三用水箱是一种多功能实验设备，生产于1779年。它能够同时用于恒温加热、冷却和蒸馏，广泛应用于生物、化学实验中。其紧凑的设计和高效的功能，使其在科研和教学中得到了广泛的应用。"
    },
    {
        "img": "images/fig/图片%2043.png",
        "alt": "电流计电器",
        "name": "电流计电器",
        "category": ["电气类", "测量类"],
        "serial": "43/7182",
        "date": "1981",
        "size": "30*20*22 cm",
        "year": "1981",
        "location": "3967",
        "description": "电流计电器是一种用于测量电流的仪器，生产于1981年。它具备高灵敏度和精确度，广泛应用于电气实验和工程项目中。其坚固的外壳和可靠的性能，使其成为实验室和工业现场的首选测量工具。"
    },
    {
        "img": "images/fig/图片%2044.png",
        "alt": "光密度计",
        "name": "光密度计",
        "category": ["测量类"],
        "serial": "44/7183",
        "date": "1985",
        "size": "41*24*20 cm",
        "year": "1985",
        "location": "3966",
        "description": "光密度计是一种用于测量物质光吸收特性的仪器，生产于1985年。它主要应用于化学分析、生物研究等领域，通过测量透过或反射光的强度，提供定量分析数据，帮助研究人员准确了解物质的光学性质。"
    },
    {
        "img": "images/fig/图片%2045.png",
        "alt": "电子管毫伏表",
        "name": "电子管毫伏表",
        "category": ["测量类"],
        "serial": "45/7184",
        "date": "2002",
        "size": "27*20*15 cm",
        "year": "2002",
        "location": "3965",
        "description": "电子管毫伏表是一种高精度的电压测量仪器，生产于2002年。它采用电子管技术，具有高灵敏度和稳定性，广泛应用于电子工程、科研实验等领域，是检测微小电压变化的理想工具。"
    },
    {
        "img": "images/fig/图片%2046.png",
        "alt": "低频信号发生器",
        "name": "低频信号发生器",
        "category": ["电子类"],
        "serial": "46/7185",
        "date": "90年代",
        "size": "40*38*15 cm",
        "year": "90年代",
        "location": "3964",
        "description": "低频信号发生器是一种用于产生低频信号的电子设备，生产于90年代。它在电子实验和通信系统中发挥重要作用，可用于测试和校准各种电子设备。其稳定的输出信号和广泛的频率范围使其成为实验室和工业应用的理想选择。"
    },
    {
        "img": "images/fig/图片%2047.png",
        "alt": "EPROM擦除器",
        "name": "EPROM擦除器",
        "category": ["电子类"],
        "serial": "47/7186",
        "date": "21世纪",
        "size": "17*13*6 cm",
        "year": "21世纪",
        "location": "3963",
        "description": "EPROM擦除器是一种专门用于擦除EPROM存储芯片的设备，生产于21世纪。它通过紫外线照射擦除芯片中的数据，广泛应用于电子制造和维修中。其高效、可靠的擦除能力确保了EPROM的重复使用和数据安全。"
    },
    {
        "img": "images/fig/图片%2048.png",
        "alt": "绕线器",
        "name": "绕线器",
        "category": ["电气类"],
        "serial": "48/7187",
        "date": "50、60年代",
        "size": "70*50*35 cm",
        "year": "50、60年代",
        "location": "3962",
        "description": "绕线器是一种用于绕制电感线圈的设备，生产于50、60年代。它广泛应用于电气和电子设备的制造和维修中。其坚固耐用的设计和高精度的绕线功能，使其在电气工程和工业生产中得到广泛应用。"
    },
    {
        "img": "images/fig/图片%2049.png",
        "alt": "低功率信号发生器",
        "name": "低功率信号发生器",
        "category": ["电子类"],
        "serial": "49/7188",
        "date": "1991",
        "size": "35*25*16 cm",
        "year": "1991",
        "location": "3961",
        "description": "低功率信号发生器是一种用于产生低功率信号的设备，生产于1991年。它主要用于电子实验、信号测试和校准。其高稳定性和低功耗特性，使其在科研和教学中得到了广泛应用。设备小巧便携，非常适合现场测试和野外实验。"
    },
    {
        "img": "images/fig/图片%2050.png",
        "alt": "75F-I型便携式辐射计",
        "name": "75F-I型便携式辐射计",
        "category": ["测量类"],
        "serial": "50/7189",
        "date": "1970",
        "size": "26*20*14 cm",
        "year": "1970",
        "location": "3960",
        "description": "75F-I型便携式辐射计是一种用于测量辐射强度的仪器，生产于1970年。它广泛应用于环境监测、工业检测和实验室研究中。该设备具有便携性高、测量精度高、响应速度快等特点，是辐射测量领域的重要工具。"
    },
    {
        "img": "images/fig/图片%2051.png",
        "alt": "F82-3型放大器",
        "name": "F82-3型放大器",
        "category": ["电子类"],
        "serial": "51/7190",
        "date": "1986",
        "size": "40*30*18 cm",
        "year": "1986",
        "location": "3959",
        "description": "F82-3型放大器是一种用于信号放大的电子设备，生产于1986年。它在音频、通讯和科研领域中有着广泛应用。该放大器具有高增益、低噪声和稳定性强的特点，是提高信号质量和传输距离的重要工具。"
    },
    {
        "img": "images/fig/图片%2052.png",
        "alt": "GD-168Digital/Multimeter万用表",
        "name": "GD-168Digital/Multimeter万用表",
        "category": ["测量类"],
        "serial": "52/7191",
        "date": "90年代",
        "size": "20*13*5 cm",
        "year": "90年代",
        "location": "3958",
        "description": "GD-168Digital/Multimeter万用表是一种多功能测量仪器，生产于90年代。它能够测量电压、电流、电阻等多种电参数，广泛应用于电子、电气维修和实验室测试。该设备具有高精度和便携性的特点，是电工和技术人员的必备工具。"
    },
    {
        "img": "images/fig/图片%2053.png",
        "alt": "接触调压器",
        "name": "接触调压器",
        "category": ["电气类"],
        "serial": "53/7192",
        "date": "1993",
        "size": "20*20*15 cm",
        "year": "1993",
        "location": "3957",
        "description": "接触调压器是一种用于调节电压的设备，生产于1993年。它广泛应用于工业和实验室环境，通过精确调节电压，确保设备的正常运行。该调压器设计紧凑，操作简便，具备较高的可靠性和耐用性。"
    },
    {
        "img": "images/fig/图片%2054.png",
        "alt": "便携辐射照度两用表",
        "name": "便携辐射照度两用表",
        "category": ["测量类"],
        "serial": "54/7193",
        "date": "1970",
        "size": "26*20*14 cm",
        "year": "1970",
        "location": "3956",
        "description": "便携辐射照度两用表是一种用于测量辐射强度和照度的设备，生产于1970年。它广泛应用于环境监测、农业研究和工业检测。该设备具有便携性高、测量精度高、使用方便等特点，是光辐射测量领域的重要工具。"
    },
    {
        "img": "images/fig/图片%2055.png",
        "alt": "接触器",
        "name": "接触器",
        "category": ["电气类"],
        "serial": "55/7194",
        "date": "2002",
        "size": "10*10*10 cm",
        "year": "2002",
        "location": "3955",
        "description": "接触器是一种用于控制电路的电气设备，生产于2002年。它广泛应用于自动化控制系统，通过控制电路的开关状态，实现设备的自动控制。该接触器具有操作简便、响应迅速、耐用性高的特点，是工业控制系统中的关键元件。"
    },
    {
        "img": "images/fig/图片%2056.png",
        "alt": "电流继电器",
        "name": "电流继电器",
        "category": ["电气类"],
        "serial": "56/7195",
        "date": "1984",
        "size": "30*20*20 cm",
        "year": "1984",
        "location": "3954",
        "description": "电流继电器是一种用于监测电流并在电流超出设定值时触发保护动作的电气设备，生产于1984年。它广泛应用于工业电气系统，确保设备的安全运行。该继电器具有高灵敏度和可靠性，能够有效防止电气过载和短路。"
    },
    {
        "img": "images/fig/图片%2057.png",
        "alt": "QSZ-E型转速表",
        "name": "QSZ-E型转速表",
        "category": ["测量类"],
        "serial": "57/7197",
        "date": "90年代",
        "size": "17*15*7 cm",
        "year": "90年代",
        "location": "3953",
        "description": "QSZ-E型转速表是一种用于测量旋转机械转速的设备，生产于90年代。它广泛应用于机械制造和维修领域，通过精确测量转速，帮助维护人员确保设备的正常运行。该转速表设计紧凑，操作简便，测量精度高，是机械行业的常用工具。"
    },
    {
        "img": "images/fig/图片%2058.png",
        "alt": "万用电表",
        "name": "万用电表",
        "category": ["测量类"],
        "serial": "58/7200",
        "date": "21世纪",
        "size": "20*15*10 cm",
        "year": "21世纪",
        "location": "3952",
        "description": "万用电表是一种多功能的电气测量仪器，生产于21世纪。它能够测量电压、电流、电阻等多种电参数，广泛应用于电子和电气工程领域。该设备设计便携，操作简便，具备高精度和多功能性，是技术人员日常工作中的重要工具。"
    },
    {
        "img": "images/fig/图片%2059.png",
        "alt": "微机控制系统执行机构",
        "name": "微机控制系统执行机构",
        "category": ["电子类"],
        "serial": "59/7201",
        "date": "2001",
        "size": "23*20*9 cm",
        "year": "2001",
        "location": "3951",
        "description": "微机控制系统执行机构是一种用于执行控制命令的电子设备，生产于2001年。它广泛应用于自动化控制系统，通过接收和执行微机指令，实现对设备的精准控制。该设备具有高可靠性和快速响应能力，是现代工业自动化的重要组成部分。"
    },
    {
        "img": "images/fig/图片%2060.png",
        "alt": "断路器",
        "name": "断路器",
        "category": ["电气类"],
        "serial": "60/7202",
        "date": "2000+",
        "size": "29*20*13 cm",
        "year": "2000+",
        "location": "3950",
        "description": "断路器是一种用于电力系统的开关装置，能够在电路发生故障时自动切断电源，生产于2000年以后。它广泛应用于各类电气设备和系统中，提供可靠的保护和控制。该断路器设计紧凑，操作简便，具有高效的电流中断能力，是确保电力系统安全的重要设备。"
    },
    {
        "img": "images/fig/图片%2061.png",
        "alt": "NF-109型直流发电机",
        "name": "NF-109型直流发电机",
        "category": ["电气类"],
        "serial": "61/7203",
        "date": "1977",
        "size": "28*16*16 cm",
        "year": "1977",
        "location": "3949",
        "description": "NF-109型直流发电机是一种用于产生直流电的发电设备，生产于1977年。它广泛应用于实验室和工业领域，提供稳定的直流电源。该发电机具有坚固的结构和高效的电力输出能力，能够在各种条件下可靠运行，是电力系统的重要组成部分。"
    },
    {
        "img": "images/fig/图片%2062.png",
        "alt": "过流计继电器",
        "name": "过流计继电器",
        "category": ["电气类"],
        "serial": "62/7205",
        "date": "1982",
        "size": "27*17*17 cm",
        "year": "1982",
        "location": "3948",
        "description": "过流计继电器是一种用于监测电流并在电流超出设定值时触发保护动作的电气设备，生产于1982年。它广泛应用于工业电气系统，确保设备的安全运行。该继电器具有高灵敏度和可靠性，能够有效防止电气过载和短路，保障电力系统的稳定性。"
    },
    {
        "img": "images/fig/图片%2063.png",
        "alt": "三相异步电动机",
        "name": "三相异步电动机",
        "category": ["电气类"],
        "serial": "63/7206",
        "date": "1975",
        "size": "30*24*23 cm",
        "year": "1975",
        "location": "3947",
        "description": "三相异步电动机是一种常见的电动机类型，生产于1975年。它广泛应用于工业和农业机械中，因其结构简单、运行可靠、维护方便等优点而被广泛使用。该电动机具有较高的效率和较长的使用寿命，是现代机械设备的重要组成部分。"
    },
    {
        "img": "images/fig/图片%2064.png",
        "alt": "吸泵",
        "name": "吸泵",
        "category": ["电气类"],
        "serial": "64/7207",
        "date": "1980",
        "size": "26*14*28 cm",
        "year": "1980",
        "location": "3946",
        "description": "吸泵是一种用于液体输送和抽取的装置，生产于1980年。它通常用于工业和农业中的液体转移和灌溉系统。该吸泵结构坚固，使用方便，具有较高的抽吸效率，是流体管理和控制的重要设备。"
    },
    {
        "img": "images/fig/图片%2065.png",
        "alt": "意大利彩色放大机（M605 color）",
        "name": "意大利彩色放大机（M605 color）",
        "category": ["电子类"],
        "serial": "65/7209",
        "date": "1990",
        "size": "32*15*19 cm",
        "year": "1990",
        "location": "3945",
        "description": "意大利彩色放大机（M605 color）是一种高性能的摄影设备，生产于1990年。它广泛应用于摄影工作室和科研领域，能够精确放大和复制彩色图像。该放大机设计精美，操作简便，提供高质量的图像输出，是专业摄影师和研究人员的理想工具。"
    },
    {
        "img": "images/fig/图片%2066.png",
        "alt": "分光光度计",
        "name": "分光光度计",
        "category": ["测量类"],
        "serial": "66/7211",
        "date": "1983",
        "size": "48*40*24 cm",
        "year": "1983",
        "location": "3944",
        "description": "分光光度计是一种重要的分析仪器，生产于1983年。它通过测量不同波长光的吸收来分析样品的组成和浓度，广泛应用于化学、生物学和医学领域。该仪器结构精密，操作简便，能够提供高精度的分析结果，是科研和教学中的必备设备。"
    },
    {
        "img": "images/fig/图片%2067.png",
        "alt": "自动控制元件箱",
        "name": "自动控制元件箱",
        "category": ["电子类"],
        "serial": "67/7212",
        "date": "2000+",
        "size": "50*40*19 cm",
        "year": "2000+",
        "location": "3943",
        "description": "自动控制元件箱是用于工业自动化控制的设备，生产于21世纪初。它包含各种控制元件，用于实现复杂的自动化控制任务。该设备具有高度的灵活性和可靠性，可广泛应用于制造、加工和自动化生产线中。"
    },
    {
        "img": "images/fig/图片%2068.png",
        "alt": "三相电机控制开关板",
        "name": "三相电机控制开关板",
        "category": ["电气类"],
        "serial": "68/7213",
        "date": "未知",
        "size": "48*33*17 cm",
        "year": "未知",
        "location": "3942",
        "description": "三相电机控制开关板是一种用于控制三相电动机的设备。它生产日期不详，但结构坚固，设计合理，能够有效控制电动机的启动、停止和运行状态。该设备在工业和商业应用中非常普遍，是电气控制系统中的关键组件。"
    },
    {
        "img": "images/fig/图片%2069.png",
        "alt": "DTH-2B传感器系统试验仪",
        "name": "DTH-2B传感器系统试验仪",
        "category": ["电子类"],
        "serial": "69/7214",
        "date": "1998",
        "size": "52*40*32 cm",
        "year": "1998",
        "location": "3941",
        "description": "DTH-2B传感器系统试验仪是一种用于测试和校准各种传感器系统的设备，生产于1998年。它具有高精度和可靠性，能够模拟不同环境条件下的传感器性能，为研究和开发提供重要数据支持，是传感器技术领域中的重要仪器。"
    },
    {
        "img": "images/fig/图片%2070.png",
        "alt": "起动变阻器",
        "name": "起动变阻器",
        "category": ["电气类"],
        "serial": "70/7216",
        "date": "1981",
        "size": "50*32*37 cm",
        "year": "1981",
        "location": "3940",
        "description": "起动变阻器是一种用于控制电机启动电流的设备，生产于1981年。它通过调节电阻来限制启动电流，从而保护电机和电网。该设备在工业和电力系统中广泛应用，具有结构简单、操作方便、可靠性高的特点。"
    },
    {
        "img": "images/fig/图片%2071.png",
        "alt": "晶体管特性图示仪",
        "name": "晶体管特性图示仪",
        "category": ["电子类"],
        "serial": "71/7219",
        "date": "1990",
        "size": "56*30*30 cm",
        "year": "1990",
        "location": "3939",
        "description": "晶体管特性图示仪是一种用于测试晶体管性能的设备，生产于1990年。它能够精确测量晶体管的各项电参数，并绘制特性曲线，为电子元器件的研究和应用提供重要参考。该仪器操作简便，性能稳定，是电子实验室中的常用设备。"
    },
    {
        "img": "images/fig/图片%2072.png",
        "alt": "KGT-I型可控硅调速电源",
        "name": "KGT-I型可控硅调速电源",
        "category": ["电子类"],
        "serial": "72/7221",
        "date": "2002",
        "size": "53*30*95 cm",
        "year": "2002",
        "location": "3938",
        "description": "KGT-I型可控硅调速电源是一种用于控制电机速度的电源设备，生产于2002年。它通过调节可控硅的导通角来实现电机的无级调速，具有控制精度高、响应速度快、使用寿命长等优点，广泛应用于各种工业自动化系统中。"
    },
    {
        "img": "images/fig/图片%2073.png",
        "alt": "通信系统原理实验装置",
        "name": "通信系统原理实验装置",
        "category": ["通信类"],
        "serial": "73/8062",
        "date": "2002",
        "size": "111*37*52 cm",
        "year": "2002",
        "location": "3937",
        "description": "通信系统原理实验装置是一种用于教学和研究的设备，生产于2002年。它用于模拟和分析通信系统中的各种基本原理和技术，包括调制、解调、编码和解码等。该装置广泛应用于高校和科研机构，为通信技术的教学和实验提供了重要支持。"
    },
    {
        "img": "images/fig/图片%2074.png",
        "alt": "Y-D电路负载试验箱",
        "name": "Y-D电路负载试验箱",
        "category": ["电气类"],
        "serial": "74/8068",
        "date": "1998",
        "size": "60*33*86 cm",
        "year": "1998",
        "location": "3936",
        "description": "Y-D电路负载试验箱是一种用于测试电气负载特性的设备，生产于1998年。该设备模拟了Y型和D型电路的负载情况，适用于电机、电源和其他电气设备的测试与分析。其可靠的性能和精确的测量能力使其成为电气工程实验室中的重要工具。"
    },
    {
        "img": "images/fig/图片%2075.png",
        "alt": "动圈式扬声器",
        "name": "动圈式扬声器",
        "category": ["电子类"],
        "serial": "75/8072",
        "date": "1980",
        "size": "68*54*32 cm",
        "year": "1980",
        "location": "3935",
        "description": "动圈式扬声器是一种用于声音放大的设备，生产于1980年。它通过电磁感应原理将电信号转换为声音信号，具有良好的频响特性和较高的灵敏度，广泛应用于音响系统和广播设备中。其经典的设计和优良的性能使其成为音频设备中的重要组成部分。"
    },
    {
        "img": "images/fig/图片%2076.png",
        "alt": "JT-1型晶体管特性图示仪",
        "name": "JT-1型晶体管特性图示仪",
        "category": ["电子类"],
        "serial": "76/8075",
        "date": "1980",
        "size": "70*39*51 cm",
        "year": "1980",
        "location": "3934",
        "description": "JT-1型晶体管特性图示仪用于测试和分析晶体管的电气特性，生产于1980年。该设备能够绘制晶体管的伏安特性曲线，广泛应用于半导体器件的研究和教学中。其高精度和稳定性使其成为实验室中不可或缺的工具。"
    },
    {
        "img": "images/fig/图片%2077.png",
        "alt": "调节变阻器",
        "name": "调节变阻器",
        "category": ["电气类"],
        "serial": "77/8078",
        "date": "1981",
        "size": "56*37*72 cm",
        "year": "1981",
        "location": "3933",
        "description": "调节变阻器是一种用于调节电路电阻值的设备，生产于1981年。其高负载能力和精确调节功能使其在电气实验和测试中得到广泛应用。设备结构坚固，适合长期使用。"
    },
    {
        "img": "images/fig/图片%2078.png",
        "alt": "变压器",
        "name": "变压器",
        "category": ["电气类"],
        "serial": "78/8083",
        "date": "1964",
        "size": "57*32*46 cm",
        "year": "1964",
        "location": "3932",
        "description": "这款变压器生产于1964年，主要用于电能的转换和电压调节。它具有高效的能量转换效率和稳定的性能，广泛应用于电力传输和分配系统中。其坚固的设计确保了长期稳定的运行。"
    },
    {
        "img": "images/fig/图片%2079.png",
        "alt": "XFG-7高频信号发生器",
        "name": "XFG-7高频信号发生器",
        "category": ["电子类"],
        "serial": "79/8085",
        "date": "1991",
        "size": "52*34*33 cm",
        "year": "1991",
        "location": "3931",
        "description": "XFG-7高频信号发生器生产于1991年，广泛应用于电子设备和电路的测试与调试。该设备能够产生高频信号，用于各种无线电、通信和电子实验的研究。其精确的频率输出和稳定的性能使其成为实验室和工业应用中的重要工具。"
    },
    {
        "img": "images/fig/图片%2080.png",
        "alt": "SBE-7型二踪示波器",
        "name": "SBE-7型二踪示波器",
        "category": ["电子类"],
        "serial": "80/8088",
        "date": "1983",
        "size": "60*35*46 cm",
        "year": "1983",
        "location": "3930",
        "description": "SBE-7型二踪示波器是1983年生产的一款高性能示波器，广泛应用于电子信号的测量和分析。其双通道设计使得用户能够同时观察两个独立信号，适用于复杂电路的调试和故障排查。"
    },
    {
        "img": "images/fig/图片%2081.png",
        "alt": "磨砂轮",
        "name": "磨砂轮",
        "category": ["其他类"],
        "serial": "81/8090",
        "date": "1970+？",
        "size": "53*42*120 cm",
        "year": "1970+？",
        "location": "3929",
        "description": "磨砂轮是一种工业磨削工具，主要用于金属和非金属材料的表面加工。生产于20世纪70年代，该磨砂轮具有高效的磨削能力和耐久的性能，适用于机械加工、建筑和制造业中的各种研磨操作。"
    },
    {
        "img": "images/fig/图片%2082.png",
        "alt": "GZ5-01紫外电气单元",
        "name": "GZ5-01紫外电气单元",
        "category": ["电子类"],
        "serial": "82/8091",
        "date": "1978",
        "size": "37*48*16 cm",
        "year": "1978",
        "location": "3928",
        "description": "GZ5-01紫外电气单元生产于1978年，是一种用于紫外线辐射研究和实验的设备。它能够提供稳定的紫外线源，广泛应用于化学分析、生物研究和材料测试等领域，具有高效、稳定和可靠的特点。"
    },



];

function createDeviceList(device) {
    return `
    <div class="list" data-category="${device.category.join(' ')}">
      <div class="left-column">
        <div class="img"><img src="${device.img}" width="280" alt="${device.alt}"></div>
        <div class="info">
          <div class="name dynamic-font">${device.name}</div>
          <div class="brief">类型: ${device.category.join('、')}</div>
          <div class="serial">序号/照片编号: ${device.serial}</div>
          <div class="date">生产/采购日期: ${device.date}</div>
          <div class="size">尺寸: ${device.size}</div>
          <div class="year">年代: ${device.year}</div>
          <div class="location">仓位: ${device.location}</div>
        </div>
      </div>
      <div class="right-column">
        <div class="description-title">介绍</div>
        <div class="description">${device.description}</div>
      </div>
    </div>
  `;
}

function getFilteredDevices() {
    if (currentCategory === "全部") {
        return devices;
    } else {
        return devices.filter(device => device.category.includes(currentCategory));
    }
}

function renderDeviceLists(page = 1) {
    const container = document.querySelector('.detail_wrap .center');
    container.innerHTML = '';

    const filteredDevices = getFilteredDevices();
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filteredDevices.slice(start, end);

    paginatedItems.forEach(device => {
        container.innerHTML += createDeviceList(device);
    });

    updatePagination(filteredDevices.length, page);

    // 调用字体大小调整函数
    adjustFontSizeForDynamicElements();
}

function updatePagination(totalItems, page) {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.classList.add('page-btn');
        if (i === page) {
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            currentPage = i;
            renderDeviceLists(currentPage);
        });

        paginationContainer.appendChild(button);
    }

    const pageInfo = document.querySelector('.pageinfo');
    pageInfo.innerHTML = `第 <strong>${page}/${totalPages}</strong>页 共<strong>${totalItems}</strong>条记录`;
}

function setupCategoryFilter() {
    const categoryLinks = document.querySelectorAll('.cate_a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            currentCategory = event.target.getAttribute('data-category');
            currentPage = 1;
            categoryLinks.forEach(link => link.classList.remove('cur'));
            event.target.classList.add('cur');
            renderDeviceLists(currentPage);
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    setupCategoryFilter();
    renderDeviceLists(currentPage);
});