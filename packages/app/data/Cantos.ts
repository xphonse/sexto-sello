interface Canto {
    id: string
    pag: string
    titulo: string
    contenido: {
        estilo: string
        texto: string
    }[]
}

type CantoData = Canto[]

export const CantosData: CantoData = [
    {
        id: '0',
        pag: '3',
        titulo: 'LEVANTATE, ISRAEL',
        contenido: [
            {
                estilo: '',
                texto: 'JEHOVA, EL ETERNO ES TU DIOS /nY EN SU NOMBRE CRISTO ESTA! /nCRISTO ESTA REINANDO YA, /nELIAS EL PASTOR, TE GUIA HACIA EL, /n¡LEVANTATE, ISRAEL!',
            },
            {
                estilo: '',
                texto: 'CORO ',
            },
            {
                estilo: '',
                texto: '¡ LEVANTATE, ISRAEL !/n¿QUIEN LO SABRA ?/n¿SI EL FINAL DE LOS TIEMPOS /nCERCANO ESTA YA?/ny AHORA APROVECHAD, /nQUE LA VIDA DE GRACIA...!/n¡ EL SEÑOR DANDO ESTA!',
            },
            {
                estilo: '',
                texto: '¡ JEHOVA EL ETERNO ES TU DIOS /nSANTIFICA SU VERDAD!/ni CON AMOR CUMPLID SU LEY./nMOSTRANDO SU LUZ A LA HUMANIDAD.../n¡ DONDE A VENIDO A REINAR!',
            },
            {
                estilo: '',
                texto: '¡ ES TIEMPO YA DE IMITAR, /nA JESUS DE NAZARET!/n¡Y SU SANTA LEY CUMPLIR /nEL TEMPLO ERES TU, DONDE MORA EL!/ni LEVANTATE, ISRAEL!.',
            },
        ],
    },
    {
        id: '1',
        pag: '4',
        titulo: 'JESUS',
        contenido: [
            {
                estilo: '',
                texto: '¡JESUS, JESUS, /nJESUS DULCE BIEN MIO! /nJESUS, JESUS, /nJESUS PADRE QUERIDO!',
            },
            {
                estilo: '',
                texto: 'i VEN A MI, JESUS OH, /nMI BUEN JESUS!/n¡Y DEJA EN TU PUEBLO /nTU DIVINA LUZ!',
            },
            {
                estilo: '',
                texto: 'i VIVIR EN TI, /nCREER EN TU PALABRA!/n¡MORAR ASI; /nES VIDA DE LA GRACIA!',
            },
            {
                estilo: '',
                texto: '¡PERDONAR TAMBIEN, /nCOMO LO HACES TU!/ni SEGUR EN TU ENSEÑANZA, /nOH, MI BUEN JESUS! ',
            },
        ],
    },
    {
        id: '2',
        pag: '5',
        titulo: '¡ AL REY DE LOS CIELOS !',
        contenido: [
            {
                estilo: '',
                texto: 'EL REY DE LOS CIELOS, JEHOVA EL GLORIOSO, /nCANTEMOS CON GOZO EN SANTA COMUNION.../n¡CON GRAN REVERENCIA A EL NOS LLEGUEMOS,/n SU NOMBRE ENSALCEMOS DE TODO CORAZON..!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'GOZO Y PAZ HAY EN MI CORAZON, /nSU SANGRE ME LAVO Y ASEGURO MI SALVACION!/n¡ES MI ANHELO A MI SEÑOR SERVIR, /nSU VOLUNTAD CUMPLIR Y PARA EL SIEMPRE VIVIR.',
            },
            {
                estilo: '',
                texto: 'OH! GRAN DULCE ESPERANZA./nNOS ALIENTA PARA SEGUIR./nLA SENDA QUE EL MAESTRO, /nNOS TRAZO CON SU EJEMPLO AQUI, /nALLA EN LONTANANZA, AL FIN DE LA LABOR /nVEREMOS LA GRANDEZA DE NUESTRO SALVADOR.',
            },
            {
                estilo: '',
                texto: 'i AL, SANTO ESPIRITU FIELY VERIDICO /nDEMOSLE CREDITO AL HUESPED CELESTIAL;/nY CON SU PRESENCIA, VIRTUD Y POTENCIA, /nPECADO Y DOLENCIA, TERMINA TODO MAL..!',
            },
            {
                estilo: '',
                texto: '¡ DEL TRINO DIOS ESCUCHEMOS LA VOZ /nY SIGAMOS DE EL EN POS A LA PATRIA CELESTIAL!/nCON TUS BENDICIONES RECIBE PROPICIO /nMI HUMILDE SERVICIO, DIVINA TRINIDAD...!  ',
            },
        ],
    },
    {
        id: '3',
        pag: '6',
        titulo: '¡ DE JUBILOS LLENOS!',
        contenido: [
            {
                estilo: '',
                texto: '¡DE JUBILO LLENOS /nQUE AL CIELO ELEVANDO /n¡ CANTARES QUE EXPRESAN /nLA DICHA Y CONTENTO!',
            },
            {
                estilo: '',
                texto: 'i VENIMOS HUMILDES/nEN ESTE MOMENTO...!/nA DARTE, SEÑORA /nMIL PRUEBAS DE AMOR! ',
            },
            {
                estilo: '',
                texto: '¡ YO QUIERO CANTARTE /nCON GRANDE ALBOROZO !/ni CONTENTO Y GOZOSO/nY POR SIEMPRE ALABARTE ! ',
            },
            {
                estilo: '',
                texto: 'i PORQUE ERES MAS PURA/nQUE EL ASTRO DEL DIA!/ni PORQUE ERES, MARIA!/nLA VIDA Y EL SER...!',
            },
        ],
    },
    {
        id: '4',
        pag: '7',
        titulo: 'ES LA VIRGEN',
        contenido: [
            {
                estilo: '',
                texto: 'ES LA VIRGEN QUE AL TRIUNFO SE ELEVA, /nCORONADA DE ESTRELLAS LA FRENTE...!/n¡ REVESTIDA DE SOL RESPLANDENTE /nY QUE VA DE LOS CIELOS EN POS...!',
            },
            {
                estilo: '',
                texto: 'i ES LA AURORA DE SOL DE JUSTICIA, /nES LA MAS AGRACIADA CRIATURA.!/ni LA MAS BELLA, MAS NOBLE Y MAS PURA, /nQUE NACIO DE LAS MANOS DE DIOS...',
            },
        ],
    },
    {
        id: '5',
        pag: '8',
        titulo: 'CAMPANITAS',
        contenido: [
            {
                estilo: '',
                texto: 'CAMPANITAS DE AMOR Y DE DICHA, /nQUE DICIENDO ESTAN MI ORACION/nCAMPANITAS QUE CANTAN GOZOSAS, /nLA DULCE ALEGRIA DE MI CORAZON.  ',
            },
            {
                estilo: '',
                texto: 'CAMPANITAS QUE BORDAN ARPEGIOS, /nCOMO CORO DE NIÑOS QUE VAN,/nELEVANDO UN CANTO A LOS VIENTOS, /nDE DICHA Y CONTENTO, /nCOMO UN MADRIGAL  ',
            },
            {
                estilo: '',
                texto: 'CAMPANITAS REPIQUE A VUELO /nLA ALEGRIA DE MI TIERNO CANTAR /nCAMPANITAS QUE CLAMAN AL CIELO, /nPIDIENDO EL CONSUELO DE TODO PENAR !   ',
            },
            {
                estilo: '',
                texto: 'CAMPANITAS QUE LLEVO EN MI PECHO /nCONVERTIDAS EN DULCE ORACION, /nCAMPANITAS QUE ACADA MOMENTO /nME CANTAN LA GLORIA DE AMOR ¡POR TU AMOR!  ',
            },
        ],
    },
    {
        id: '6',
        pag: '9',
        titulo: 'TU REINARAS ',
        contenido: [
            {
                estilo: '',
                texto: 'TU REINARAS, ESTE ES EL GRITO /nQUE ARDIENTE EXALA NUESTRA FE /nTU REINARAS ¡OH DIOS BENDITO!/nPUES TU DIJISTE REINARE/nTU REINARAS , DULCE ESPERANZA /nQUE EL ALMA LLENA DE PLACER /nFELICIDAD HABRA DOQUIER',
            },
            {
                estilo: '',
                texto: 'CORO ',
            },
            {
                estilo: '',
                texto: 'REINE JESUS POR SIEMPRE/n REINE EN MI CORAZON./nEN NUESTRA PATRIA Y NUESTRO SUELO /nQUE ES DE MARIA LA NACION /nEN NUESTRA PATRIA Y NUESTRO SUELO /nQUE ES DE MARIA LA NACION  ',
            },
            {
                estilo: '',
                texto: 'TU REINARAS, DICHOSA ERA /nDICHOSO PUEBLO DE ISRAEL /nSERA TU CRUZ NUESTRA BANDERA /nTU AMOR SERA NUESTRA LEY /nTU REINARAS EN NUESTRO SUELOS /nY ENTONCES SI SIEMPRE SERAS /nDIOS INMORTAL COMO EN EL CIELO /nEN NUESTRA PATRIA REINARAS. ',
            },
            {
                estilo: '',
                texto: 'TU REINARAS. REINA YA AHORA /nEN ESTE PUEBLO DE SION, /nLIBRA DEL MAL QUIEN TE IMPLORA /nDANOS JESUS TU BENDICION /nTU REINARAS TODA LA VIDA /nTRABAJEMOS CON GRAN FE /nEN REALIZAR Y VER CUMPLIDA /nLA GRAN PROMESA REINARE !',
            },
        ],
    },
    {
        id: '7',
        pag: '10',
        titulo: 'NOS VEREMOS EN EL RIO',
        contenido: [
            {
                estilo: '',
                texto: 'i NOS VEREMOS EN EL RIO, /nCUYAS AGUAS CRISTALINAS!/ni CUYAS ONDAS ARGENTINAS, /nQUE NACEN DEL TRONO DE DIOS! ',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'i OH!SI, NOS CONGREGAREMOS /nEN CELICA HERMOSISIMA RIVERA!/ni DEL RIO DE LA VIDA VERDADERA /nQUE NACE DEL TRONO DE DIOS...!',
            },
            {
                estilo: '',
                texto: '¡ EN LAS MARGENES DEL RIO /nQUE FRECUENTAN SERAFINES, /nQUE EMBELLECEN QUERUBINES, /nDE LA DICHA ETERNA DIOS...! ',
            },
            {
                estilo: '',
                texto: '¡ EL VERGEL QUE RIEGA EL RIO /nDE JESUS ES LA MORADA...!/nI EL MAL NUNCA TIENE ENTRADA /nAHI SOLO, REINA DIOS...!',
            },
            {
                estilo: '',
                texto: 'ANTES DE LLEGAR AL RIO, /nNUESTRA CARGA DEJAREMOS/ni LIBRES TODOS ESTAREMOS, /nPOR LA GRACIA DEL SEÑOR...!',
            },
        ],
    },
    {
        id: '8',
        pag: '11',
        titulo: 'MAS LINDA QUE LAS FLORES',
        contenido: [
            {
                estilo: '',
                texto: '¡ MAS LINDA QUE LAS FLORES/nQUE BORDAN LOS JARDINES.../ni MAS PURA QUE EL EFLUVIO /nDEL ALBA MATINAL...!',
            },
            {
                estilo: '',
                texto: '¡MAS SANTA QUE LOS COROS /nDE EXCELSOS SERAFINES...!/n¡ NACIO DE UNA SONRISA /nDE PADRE CELESTIAL...!',
            },
            {
                estilo: '',
                texto: '¡LAS FLORES Y LAS AVES /nPRESTARON SU ARMONIA...!/ni LAS BRISAS DE LA SELVA /nPRESTARON SU RUMOR...! ',
            },
            {
                estilo: '',
                texto: '¡CON LETRAS DE BRILLANTES /nEL NOMBRE DE ¡MARIA!/n¡ FORMO EN EL FIRMAMENTO /nLA MANO DEL SEÑOR...! /n¡ FORMO EN EL FIRMAMENTO /nLA MANO DEL SEÑOR...! ',
            },
        ],
    },
    {
        id: '9',
        pag: '12',
        titulo: 'JESUS ES MI REY SOBERANO',
        contenido: [
            {
                estilo: '',
                texto: 'i JESUS ES MI REY SOBERANO, /n MI GOZO ES CANTAR SU LOOR... /ni ES REY Y ME VE CUAL HERMANO /nES REY Y ME IMPARTE SU AMOR...!',
            },
            {
                estilo: '',
                texto: '¡ DEJANDO SU TRONO DE GLORIA, /nME VINO A SACAR DE LA ESCORIA!/n¡Y YO SOY FELIZ Y YO SOY FELIZ POR EL...!',
            },
            {
                estilo: '',
                texto: 'i JESUS ES MI PADRE ANHELADO, /nEN SOMBRAS Y EN LUZ SIEMPRE VA!/n¡PACIENTE Y HUMILDE A MI LADO, /nSU AYUDA Y CONSUELO EL ME DA...!/nPOR ESO CONSTANTE LO SIGO /nPORQUE EL ES MI REY Y MI PADRE../n¡Y YO SOY FELIZ Y YO SOY FELIZ POR EL..!',
            },
            {
                estilo: '',
                texto: 'SEÑOR; QUE PUDIERA YO DARTE /nPOR TANTA BONDAD PARA MI../nME BASTA SERVIRTE Y AMARTE /nEN TODO ENTREGARME YO A TI…!/n¡ ENTONCES ACEPTA MI VIDA /nQUE A TI SOLO QUEDA RENDIDA/nY YO SOY FELIZ Y YO SOY FELIZ POR EL!',
            },
        ],
    },
    {
        id: '10',
        pag: '13',
        titulo: '¡ A JESUCRISTO VEN SIN TARDAR!',
        contenido: [
            {
                estilo: '',
                texto: '¡ A JESUCRISTO VEN SIN TARDAR /nQUE ENTRE NOSOTROS HOY EL ESTA!/n¡ Y PORQUE ANHELA TU BIENESTAR /nVINE A DECIRTE VEN!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡ OH CUAN GRATA ES NUESTRA REUNION /nCUANDO ALLA, SEÑOR, EN TU MANSION !/nAHI ESTEMOS EN COMUNION /nGOZANDO ETERNO BIEN...!',
            },
            {
                estilo: '',
                texto: 'SU VOZ ESCUCHA SIN VACILAR /nY GRATO ACEPTA LO QUE HOY TE DA!/nTAL VEZ MAÑANA NO HABRA LUGAR./nNO TE DETENGAS VEN...!',
            },
            {
                estilo: '',
                texto: '¡ PIENSA QUE EL SOLO PUEDE COLMAR /nTU TRISTE PECHO DE GOZO Y PAZ!/n¡Y PORQUE ANHELA TU BIENESTAR, /nVUELVE A DECIRTE VEN!',
            },
        ],
    },
    {
        id: '11',
        pag: '14',
        titulo: '¡ JUSTO A MI DIOS, DESEO ¡',
        contenido: [
            {
                estilo: '',
                texto: 'i JUNTO A MI DIOS, DESEO /nSIEMPRE MORAR...!/nAUNQUE JAMAS EL MUNDO /nME SEPA AMAR...!/n¡ QUE DEL MUNDO NO SOY!/n¡ QUE DEL MUNDO NO SOY!/nY SOLO POR EL TRANSITO Y AL CIELO VOY...!',
            },
            {
                estilo: '',
                texto: 'i SOLO A MI DIOS DEL ALMA/n SABRE QUERER...!/ni PORQUE DE LUZ ME LLENA /nTODO MI SER...!/ni VEN HACIA MI, SEÑOR..!/ni VEN HACIA MI, SEÑOR..!5/n¿ QUE DICE EN SU PALABRA ?/n¡ DIOS ES AMOR...!',
            },
            {
                estilo: '',
                texto: 'MI DIOS, MI BIEN, MI TODO,/n VEN HACIA MI...!/ni NO PERMITA QUE MORE LEJOS DE TI...!/ni TU ME RECIBIRAS, /nTU ME RECIBIRAS /nQUE ESTAR SIN TI NO PUEDO, /nNUNCA, JAMAS...! ',
            },
        ],
    },
    {
        id: '12',
        pag: '15',
        titulo: 'SEMBRARE LA SIMIENTE PRECIOSA',
        contenido: [
            {
                estilo: '',
                texto: 'SEMBRARE LA SIMIENTE PRECIOSA /nDEL GLORIOSO EVANGELIO DE AMOR!/nSEMBRARE , SEMBRARE MIENTRAS VIVA./nDEJARE EL RESULTADO AL SEÑOR...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'SEMBRARE , SEMBRARE, /nMIENTRAS VIVA, SIMIENTE DE AMOR!/nSEGARE, SEGARE /nAL HALLARME EN LA CASA DE DIOS!',
            },
            {
                estilo: '',
                texto: 'SEMBRARE EN CORAZONES SENSIBLES /nLA DOCTRINA DE DIOS DEL PERDON !/n¡ SEMBRARE SEMBRARE MIENTRAS VIVA./nDEJARE EL RESULTADO AL SEÑOR .!',
            },
            {
                estilo: '',
                texto: 'SEMBRARE EN CORAZONES DE MARMOL!/nLA BENDITA PALABRA DE DIOS...!/nSEMBRARE, SEMBRARE MIENTRAS VIVA, /nDEJARE EL RESULTADO AL SEÑOR...!',
            },
        ],
    },
    {
        id: '13',
        pag: '16',
        titulo: 'YO QUIERO TRABAJAR POR EL SEÑOR',
        contenido: [
            {
                estilo: '',
                texto: '¡ YO QUIERO TRABAJAR POR EL SEÑOR /nCONFIANDO EN SU PALABRA Y EN SU AMOR!/nYO QUIERO CANTAR Y ORAR Y OCUPADO SIEMPRE ESTAR, /nEN LA VIÑA DEL SEÑOR!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'TRABAJAR Y ORAR /nEN LA VIÑA, EN LA VIÑA DEL SEÑOR!/nSI, MI ANHELO ES ORAR Y OCUPADO SIEMPRE /nESTAR EN LA VIÑA DEL SEÑOR !',
            },
            {
                estilo: '',
                texto: 'YO QUIERO DIA Y NOCHE TRABAJAR /nY ESCLAVOS DEL PECADO LIBERTAD, C/nONDUCIRLOS A JESUS, NUESTRO GUIA Y NUESTRA LUZ, /nEN LA VIÑA DEL SEÑOR!',
            },
            {
                estilo: '',
                texto: '¡ YO QUIERO SER OBRERO DE VALOR /nCONFIADO EN EL PODER DEL SALVADOR !/n¡ Y EL QUE QUIERA TRABAJAR /nHALLARA TAMBIEN LUGAR E/nEN LA VIÑA DEL SEÑOR!',
            },
        ],
    },
    {
        id: '14',
        pag: '17',
        titulo: '¡ ES UN ASTRO LUMINOSO!',
        contenido: [
            {
                estilo: '',
                texto: 'ES UN ASTRO LUMINOSO /nQUE EN EL CIELO APARECIO!/n¡ COMO UNA ESTRELLA SALVADORA /nQUE SE LLAMA REDENCION...!',
            },
            {
                estilo: '',
                texto: 'CORO ',
            },
            {
                estilo: '',
                texto: '¡ ES LA FUENTE DE LA GRACIA, /nES LA FUENTE DEL AMOR...!/n¡ QUE DERRAMA LUZ FERVIENTE/n PARA TODO EL CORAZON..!',
            },
            {
                estilo: '',
                texto: '¡ SON LAS AGUAS CRISTALINAS /nDE AQUEL POZO DE JACOB...!/n¡ QUE A LA BELLA SAMARIA /nJESUCRISTO REDIMIO ¡',
            },
        ],
    },
    {
        id: '15',
        pag: '18',
        titulo: 'NITIDO RAYO ',
        contenido: [
            {
                estilo: '',
                texto: 'i NITIDO RAYO POR CRISTO, /nYO QUIERO SIEMPRE SER!/ni EN TODO QUIERO AGRADAR, /nY HACERLO CON PLACER ¡',
            },
            {
                estilo: '',
                texto: 'UN NITIDO RAYO... /nNITIDO RAYO POR CRISTO /nUN NITIDO RAYO!/nNITIDO RAYO SERE! ',
            },
            {
                estilo: '',
                texto: 'ESTROFAS',
            },
            {
                estilo: '',
                texto: 'A CRISTO QUIERO ALLEGARME,/n DESDE TEMPRANA EDAD !/n¡ POR SIEMPRE QUIERO AMARLE /nY HACER SU VOLUNTAD !',
            },
            {
                estilo: '',
                texto: 'NITIDO RAYO EN TINIEBLAS./nDESEO... | RESPLANDECER !/nALMAS PERDIDAS... ¡ A CRISTO !/nANHELO CONDUCIR!',
            },
            {
                estilo: '',
                texto: 'UNA MANSION EN EL CIELO, /nFUE CRISTO A PREPARAR!/nQUE EL NIÑO TIERNO Y AMANTE, /nEN ELLA... PUEDA ENTRAR!',
            },
        ],
    },
    {
        id: '16',
        pag: '19',
        titulo: 'SEGUID AL MAESTRO',
        contenido: [
            {
                estilo: '',
                texto: 'SEGUID AL MAESTRO, NO IMPORTA SUFRIR /nAUNQUE HAYA ENEMIGOS, PELIGROSOS,¡ SIN FIN!/nSI ESTRECHA ES LA SENDA, MARCHEMOS CON FE /nSIGUIENDO AL MAESTRO PODREMOS VENCER.! ',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡ SEGUIRE SIEMPRE ADELANTE /nESCUDADO POR MI DIOS...!/nA LAS ORDENES DEL PADRE /nQUE ME GUIA CON SU SANTO AMOR!',
            },
            {
                estilo: '',
                texto: '¡ SEGUID AL MAESTRO POR TODO LUGAR /nLO MISMO EN PELIGRO QUE EN OSCURIDAD!/nSI OBSCURA ES LA SENDA, SEGUID SIN TEMOR./nSU ROSTRO GLORIOSO NOS DA RESPLANDOR..!',
            },
            {
                estilo: '',
                texto: 'SEGUID AL MAESTRO SIN TITUBEAR,/nSUS ORDENES TODOS CUMPLIR SIN TARDAR!/n¡ ESTEMOS ALERTAS CUAL HIJOS DE LUZ/nSU SANTA VICTORIA DARANOS JESUS...!',
            },
        ],
    },
    {
        id: '17',
        pag: '20',
        titulo: 'i GRACIAS, SEÑOR...!',
        contenido: [
            {
                estilo: '',
                texto: 'i GRACIAS, SENOR TE DEN SEÑOR TE DEN /nLOS ANGELES POR MI!/ni PUES NUNCA MERECI /nTAL DICHA Y TANTO BIEN',
            },
            {
                estilo: '',
                texto: '¡ EN LA CASA DE ABRAHAM /nEN LA CASA DE ISRAELI /ni TE RUEGAN CON AFAN /nEXISTA SIEMPRE EL BIEN',
            },
            {
                estilo: '',
                texto: 'i EN LA CASA DE ISAAC./nEN LA CASA DE NOE!/nEN EL PUEBLO DE ISRAEL!/ni TE RUEGAN CON AFAN EXISTA SIEMPRE FE !',
            },
            {
                estilo: '',
                texto: '¡EN LA CASA DE JACOB /nY EN EL PUEBLO DE ISRAEL!/ni TE RUEGAN CON AFANA/nVIVAS SIEMPRE CON EL ¡',
            },
            {
                estilo: '',
                texto: '¡ EN LA CASA DE ABRAHAM /nLOS APOSTOLES Y NOE!/ni TE RUEGAN CON AFAN /nESTEN JESUS, MARIA Y JOSE!',
            },
        ],
    },
    {
        id: '18',
        pag: '21',
        titulo: 'MARCHAD , MARCHAD ISRAEL',
        contenido: [
            {
                estilo: '',
                texto: 'MARCHAD , MARCHAD , ISRAEL, MARCHAD, /nMARCHAD CON FERVOR ! /n¡MARCHAD, MARCHAD Y SEGUIDO /nA NUESTRO REDENTOR..!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡ QUE NOS LLAMA CON AMOR. /nSEGUID CAMINANDO CON FERVOR, /nEN EL CAMINO DEL SALVADOR, /nQUE ES EL QUE NOS GUIA PARA SIEMPRE!',
            },
            {
                estilo: '',
                texto: 'i ISRAEL TIENE EL ARCA DE NOE, /nMOISES PRESENTA LAS TABLAS DE LA LEY /n¡ ELIAS PRESENTA EL EJERCITO DE EL/nA RECIBIR EL GRITO DE TRIUNFO Y LAUREL!',
            },
            {
                estilo: '',
                texto: '¡A DEFENDER TODO ISRAEL, /nMARCHAD , SOLDADOS VALEROSOS!/n¡A SEGUIR A NUESTRO REY,/n A LA PATRIA CELESTIAL...!',
            },
        ],
    },

    {
        id: '19',
        pag: '22',
        titulo: 'VEN, ALMA QUE LLORAS, VEN AL SALVADOR',
        contenido: [
            {
                estilo: '',
                texto: '¡VEN ALMA QUE LORAS, VEN AL SALVADOR, /nY EN TUS TRISTES HORAS DILE TU DOLOR! /n¡DILE, SI TU DUELO, VEN TAL COMO ESTAS, /nHABLA SIN RECELO Y NO LLORES MAS...!',
            },
            {
                estilo: '',
                texto: '¡TU PENA Y TU TRISTEZA DILE AL SEÑOR /nCRUEL DESVENTURA, ENGAÑOS Y ERROR! /n¡EN SU TIERNO SENO DESCANSO HALLARAS, /nVEN PORQUE EL ES BUENO Y NO LLORES MAS!',
            },
            {
                estilo: '',
                texto: '¡TU MISMA AL CANSADO ENSEÑA LUZ, /nGUIA AL ANGUSTIADO.HACIA JESUS! /n¡LA BENDITA NUEVA DE CELESTE PAZ, /nA LOS TRISTES LLEVA Y NO LLORES MAS!',
            },
        ],
    },

    {
        id: '20',
        pag: '23',
        titulo: '¡JESUCRISTO DESCENDIÓ...!',
        contenido: [
            {
                estilo: '',
                texto: '¡JESUCRISTO DESCENDIO /nDE SU TRONO CELESTIAL! /n¡VINO AL MUNDO POR SALVAR NIÑOS COMO YO...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡COMO YO COMO YO, /nNIÑOS COMO YO...! /n¡DE EL RECIBIRAN PERDON /nNIÑOS COMO YO...!',
            },
            {
                estilo: '',
                texto: '¡MUCHAS MADRES AL OIR /nLA DOCTRINA DEL SEÑOR! /n¡SE APRESTARON A LLEVAR NIÑOS COMO YO...!',
            },
            {
                estilo: '',
                texto: '¡NO LOS RECHAZO EL SEÑOR! /nNUNCA, ANTES CON BONDAD /nEN SU SENO EL ESTRECHO /nNIÑOS COMO YO...!',
            },
        ],
    },

    {
        id: '21',
        pag: '24',
        titulo: '¡NOCHE DE PAZ!',
        contenido: [
            {
                estilo: '',
                texto: '¡NOCHE DE PAZ, NOCHE DE AMOR, /nTODO DUERME EN DERREDOR...! /n¡SOLO VELAN MIRANDO LA FAZ /nDE SU NIÑO EN ANGELICA PAZ! /nJOSE Y MARIA EN BELEN, /nJOSE Y MARIA EN BELEN!',
            },
            {
                estilo: '',
                texto: '¡NOCHE DE PAZ, NOCHE DE AMOR, /nEN EL CAMPO EL PASTOR...! /n¡COROS CELESTES PROCLAMAN SALUD /nGRACIAS Y GLORIAS EN SU PLENITUD, /n¡POR NUESTRO BUEN REDENTOR, /nPOR NUESTRO BUEN REDENTOR...!',
            },
            {
                estilo: '',
                texto: '¡NOCHE DE PAZ, NOCHE DE AMOR, /nVER QUE BELLO RESPLANDOR, /nLUCE EN EL ROSTRO DEL NIÑO JESUS /nEN EL PESEBRE DEL MUNDO LA LUZ, /n¡ASTRO DE ETERNO FULGOR, /nASTRO DE ETERNO FULGOR...!',
            },
        ],
    },

    {
        id: '22',
        pag: '25',
        titulo: '¡JUNTO A LA CRUZ DO JESÚS MURIÓ!',
        contenido: [
            {
                estilo: '',
                texto: '¡JUNTO A LA CRUZ DO JESÚS MURIÓ, /nJUNTO A LA CRUZ DO SALUD ME DIO, /nYA MIS MALDADES EL PERDONO...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'A SU NOMBRE GLORIA, /nA SU NOMBRE GLORIA, /nA SU NOMBRE GLORIA.',
            },
            {
                estilo: '',
                texto: '¡JUNTO A LA CRUZ DONDE LO BUSQUE /nCUAN ADMIRABLE PERDÓN ME DIO, /nYO CON JESÚS SIEMPRE VIVIRÉ...!',
            },
            {
                estilo: '',
                texto: '¡FUENTE PRECIOSA DE SALVACIÓN, /nQUE GRANDE GOZO YO PUDE HALLAR /nAL ENCONTRAR EN JESÚS PERDÓN...!',
            },

            {
                estilo: '',
                texto: '¡TU PECADOR QUE PERDIDO ESTAS, /nHOY ESTA FUENTE, VEN A BUSCAR /nPAZ Y PERDÓN ENCONTRAR PODRÁS…!',
            },
        ],
    },

    {
        id: '23',
        pag: '26',
        titulo: 'JESÚS DE LOS CIELOS',
        contenido: [
            {
                estilo: '',
                texto: '¡JESÚS DE LOS CIELOS /nAL MUNDO BAJO...! ¡EN BUSCA DE /nJOYAS QUE AMANTE COMPRO…!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡LOS NIÑOS SALVADOS SERÁN /nCOMO EL SOL! ¡BRILLANDO /nEN LA GLORIA DEL REY SALVADOR...!',
            },
            {
                estilo: '',
                texto: '¡SU HERMOSA DIADEMA DE ETERNO /nESPLENDOR LA ADORNAN LAS JOYAS /nQUE AMANTE COMPRO...!',
            },
            {
                estilo: '',
                texto: '¡LOS NIÑOS Y NIÑAS QUE VAN /nAL SEÑOR! SON TODAS LAS JOYAS /nQUE AMANTE COMPRO...!',
            },
            {
                estilo: '',
                texto: '¡VENID PUES ALEGRES AL BUEN /nREDENTOR! ¡EL QUIERE LAS JOYAS /nQUE AMANTE COMPRO...!',
            },
        ],
    },

    {
        id: '24',
        pag: '27',
        titulo: '¡ROSA DE JERICÓ!',
        contenido: [
            {
                estilo: '',
                texto: '¡TU HERMOSURA /nSIEMPRE PURA, /nEL SEÑOR SIMBOLIZO...! /n¡EN LA HERMOSA. /nFRESCA ROSA /nDEL PENSIL DE JERICÓ...! /n¡FUENTE PURA /nDE AVENTURA /nDULCE VIDA DEL MORTAL...! /n¡A LOS TRISTES /nGOZOS DISTE /nCON TU FRUTO DIVINAL...! /n¡LA MAS GRACIOSA, /nMÁS AIROSA /nCON LA PALMA DE CADES...! /n¡LA MAS LOZANA /nMÁS GALANA /nQUE DEL LÍBANO CIPRÉS...! /n¡TU NOMBRE DIVINO, /n¡OH! VIRGEN MARÍA! /n¡DE PAZ Y ALEGRÍA /nAL MUNDO LLENO...! /n¡TU NOMBRE ES UN HIMNO, /nTU NOMBRE ES UN CANTO, /nEL MÁS TIERNO Y SANTO /nQUE EL MUNDO ESCUCHO...!',
            },
        ],
    },

    {
        id: '25',
        pag: '28',
        titulo: '¡VEN A MI, DULCE PAN DE LA VIDA!',
        contenido: [
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡VEN A MI, DULCE PAN DE LA VIDA, /nVEN, CONSUELA MI AMARGO DOLOR! /n¡SOY LA OVEJA QUE ANDABA PERDIDA /nLEJOS, LEJOS DE TI, MI SEÑOR...!',
            },
            {
                estilo: '',
                texto: '¡SOY EL HOMBRE QUE VA FATIGADO /nDE UNA AMARGA TORTURA AL VIGOR! /nVOY LLORANDO MI CUERPO PERDIDO /nEN EL MAR DE UNA FIERA PASIÓN...!',
            },
            {
                estilo: '',
                texto: '¡TU QUE FORMAS EL CIELO EN LA NADA, /nA MI NADA, VEN LUEGO SEÑOR...! /n¡Y CONVIERTE LAS SOMBRAS EN LUCES /nY EN MI PECHO EL ALCANZAR DE DIOS...!',
            },
            {
                estilo: '',
                texto: '¡VEN, ANGÉLICO PAN DE LOS CIELOS,  /nA LAS ALMA QUE BUSCAN A DIOS!  /n¡VEN AL HOMBRE QUE GIME EN LA VIDA  /nAMARGURAS DE TANTO DOLOR...!',
            },
        ],
    },

    {
        id: '26',
        pag: '29',
        titulo: '¡AUN NO HABÍA COLLADOS!',
        contenido: [
            {
                estilo: '',
                texto: '¡AUN NO HABÍA COLLADOS, /nNI MONTES, ¡SEÑORA! /n¡NI ESTRELLAS, NI AURORA, /nNI CLARO ARREBOL...!',
            },
            {
                estilo: '',
                texto: '¡Y YA TU EXISTÍAS/nDE DIOS EN LA MENTE…! /n¡Y YA TU EXISTÍAS /nDE DIOS EN LA MENTE…! /n¡OH VIRGEN CLEMENTE /nMAS BELLA QUE EL SOL...!',
            },
            {
                estilo: '',
                texto: '¡AL MUNDO BAJASTE /nMOSTRÁNDOLE AL HOMBRE...! /n¡LA DICHA EN TU NOMBRE /nCUAL POEMA EN TU FAZ...!',
            },
            {
                estilo: '',
                texto: '¡CUAL BLANCA AZUCENA /nQUE ESPARCE SU AROMA...! /n¡CUAL TIERNA PALOMA /nQUE ANUNCIA LA PAZ…!/n¡CUAL TIERNA PALOMA /nQUE ANUNCIA LA PAZ…!',
            },
        ],
    },

    {
        id: '27',
        pag: '30',
        titulo: '¡CANTEMOS AL AMOR DE LOS AMORES!',
        contenido: [
            {
                estilo: '',
                texto: '¡CANTEMOS AL AMOR DE LOS AMORES,/nCANTEMOS AL SEÑOR...! /nDIOS ESTA AQUÍ, VENID, ADORADORES  /nY ADOREMOS A CRISTO REDENTOR...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡GLORIA A CRISTO JESÚS, /nCIELOS Y TIERRA BENDECID AL SEÑOR! /n¡HONOR Y GLORIA A TI, REY DE LA GLORIA, /nAMOR POR SIEMPRE A TI, ¡DIOS ES AMOR!',
            },
            {
                estilo: '',
                texto: '¡POR NUESTRO AMOR SE OCULTA EN EL SAGRARIO /nSU GLORIA Y ESPLENDOR...!/n¡PARA NUESTRO BIEN SE QUEDA EN EL SANTUARIO /nESPERANDO A JUSTO Y PECADOR...!',
            },
            {
                estilo: '',
                texto: '¡OH, GRAN PRODIGIO DE AMOR DIVINO, /nMILAGRO SIN IGUAL...! /n¡PRENDA DE AMISTAD, BANQUETE PEREGRINO /nDO SE COME AL CORDERO CELESTIAL.',
            },
        ],
    },

    {
        id: '28',
        pag: '31',
        titulo: '¡SI EL SOL ES TAN GRATO!',
        contenido: [
            {
                estilo: '',
                texto: '¡SI EL SOL ES TAN GRATO /nDE MAYO A LA ROSA...! /n¡QUE OSTENTA GRACIOSA /nBALSÁMICO OLOR...!',
            },
            {
                estilo: '',
                texto: '¡OH, MADRE QUERIDA /nQUE ESTÁN TUS HIJOS...! /nROGANDO TE PIDEN /nQUE SALVES TU PUEBLO...!',
            },
            {
                estilo: '',
                texto: '¡SI TU LES MIRASES  /nRISUEÑA, AMOROSA...! /n¡CON FE, CARIÑOSA, /nMI PECHO SE ABRA.',
            },
            {
                estilo: '',
                texto: '¡SITU LES MIRASES /nRISUEÑA, AMOROSA...!  /n¡MI ALMA SALIENDO  /nA TI VOLARA...! /n¡MI ALMA SALIENDO  /nA TI VOLARA...!',
            },
        ],
    },

    {
        id: '29',
        pag: '32',
        titulo: '¡PRECIOSO JESÚS!',
        contenido: [
            {
                estilo: '',
                texto: 'JESÚS ES PRECIOSO, MI BUEN SALVADOR, /nPOR SIEMPRE LE ALABO, POR SU GRAN PODER! /n¡SI DÉBIL ME ENCUENTRO SU FUERZA EL ME DA /nEL ES MI PRECIOSO JESÚS...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡PRECIOSO ES JESÚS, MI JESÚS... /nPRECIOSO ES JESÚS, MI JESÚS!/nMI GLORIA SERA SU ROSTRO ADMIRAR/nEL ES MI PRECIOSO JESÚS...!',
            },
            {
                estilo: '',
                texto: '¡Y CUANDO EN PECADO MUY TRISTE ME VI, /nLLAMANDO A LAS PUERTAS DE MI CORAZÓN! /nME DIJO: EN TU ALMA YO QUIERO SALVAR, /n¡EL ES MI PRECIOSO JESÚS...!',
            },
            {
                estilo: '',
                texto: '¡MAS YA POR SU GRACIA LA LUZ PUEDO VER, /nQUITO MI TRISTEZA MI LLANTO ENJUGO...! /n¡POR FE YO CONTEMPLO MI ETERNO HOGAR! /n¡EL ES MI PRECIOSO JESÚS...!',
            },
        ],
    },

    {
        id: '30',
        pag: '33',
        titulo: '¡SANTA MADONA!',
        contenido: [
            {
                estilo: '',
                texto: '¡DIOS TE SALVE MARÍA, /nREINA Y MADRE, /nDULZURA, VIDA! /n¡Y ESPERANZA NUESTRA!/n¡RUEGAN POR TI LOS TRISTES HIJOS DE EVA!/n¡MISERICORDIA, MISERICORDIA, MISERICORDIA!',
            },
            {
                estilo: '',
                texto: '¡A VOS SEÑORA, LA SANTA VIRGEN, /nLUZ DE QUIEN TOMA LA LUZ EL SOL! /n¡LA FLOR DIVINA DE LA MONTAÑA, /nREINA DEL CIELO, MADRE DE AMOR!',
            },
            {
                estilo: '',
                texto: '¡A VOS SEÑORA, MI ALMA MIS SUEÑOS, /nMIS ESPERANZAS, MI CORAZÓN! /n¡CUANTO MI VIDA TIENE DE VIDA, /nCUANTO MI PECHO TIENE DE AMOR!',
            },
            {
                estilo: '',
                texto: '¡CUANDO A MI LLEGUE LA HORA SUPREMA, /nMADRE SIN MANCHA DEL REDENTOR! /n¡HACED QUE ENTONCES, ¡SANTA MADONA! /nANTES QUE CIERRE MIS OJOS DIOS!',
            },
            {
                estilo: '',
                texto: '¡HACED QUE VEA DE LUZ RODEADOS, /nY ENTRE LOS TULES DEL ARREBOL! /n¡LOS TRES DIVINOS FIELES AMIGOS, /nLOS TRES AMORES QUE ÁNGELES SON!',
            },
            {
                estilo: '',
                texto: '¡LOS TRES AMORES QUE DIOS ME DIO! /n¡AMOR A DIOS! ¡AMOR DE PATRIA! /nAMOR DE PATRIA Y AMOR AL HOMBRE, /n¡AMOR, AMOR!',
            },
        ],
    },

    {
        id: '31',
        pag: '34',
        titulo: 'SIEMBRA QUE HICIMOS DEL ALBA AL NACER',
        contenido: [
            {
                estilo: '',
                texto: '¡SIEMBRA QUE HICIMOS DEL ALBA AL NACER, /nSIEMBRA QUE HICIMOS SUBIDO YA EL SOL! /n¡SIEMBRA QUE LA TARDE VIO CAER /nSIEMBRA QUE CUBRE NOCTURNO TELÓN...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡AH! ¿QUE SE COSECHARA…? /n¡AY! ¿QUE SE COSECHARA? /n¡LO QUE EN LA LUZ O EN TINIEBLAS SEMBRÉ /n¡LO QUE SEMBRAMOS COSECHA DARA...! /n¡SEA QUE EL TIEMPO SU FRUTO DE /nO QUE SE DE EN LA ETERNIDAD…!',
            },
            {
                estilo: '',
                texto: '¡SIEMBRA QUE HICIMOS EN TIERRA BARRIAL, /nSIEMBRA QUE EN MEDIO DE ESPINAS MURIÓ! /n¡SIEMBRA QUE EL VIENTO ESPARCIÓ EN PEDREGAL, /nSIEMBRA QUE FÉRTIL TERRENO ENCONTRÓ...!',
            },
            {
                estilo: '',
                texto: '¡SIEMBRA QUE HICIMOS CON LLANTO TENAZ, /nSIEMBRA QUE EXPRIME EN EL ALMA LA HIEL! /n¡SIEMBRA DE FE DIVISANDO EL SOLAZ, /nSIEGA GOZOSA Y CORONA DE FIEL..!.',
            },
        ],
    },

    {
        id: '32',
        pag: '35',
        titulo: '¿NO SABÉIS LA HERMOSA HISTORIA?',
        contenido: [
            {
                estilo: '',
                texto: 'NO SABÉIS LA HERMOSA HISTORIA? /nDE UNA MADRE QUE ARRULLO /nA UN NIÑO EN UN PESEBRE,/nNIÑO REY DE LA CREACIÓN...? ',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡CRISTO AMANTE, CRISTO AMANTE, /nTORNA A NUESTRO CORAZÓN...! /n¡QUE AL SABER DE TU POBREZA /nSIENTO ANGUSTIA Y DOLOR...!',
            },
            {
                estilo: '',
                texto: '¡SI LA NOCHE EN SU PESEBRE, /nNIÑO, HUBIERAS DE PASAR...! /n¡DE TUS OJOS LLANTO AMARGO /nQUIZÁ VIÉRAMOS BROTAR...!',
            },
            {
                estilo: '',
                texto: '¡MAS LA FRENTE DE AQUEL NIÑO/nQUE EL PASTOR LLEGO A ADORAR!/n¡UNA ESTRELLA REFULGENTE/nVINO TRÉMULA A BESAR...!',
            },
        ],
    },

    {
        id: '33',
        pag: '36',
        titulo: '¡VENID, PASTORCILLOS!',
        contenido: [
            {
                estilo: '',
                texto: '¡VENID PASTORCILLOS, VENID A ADORAR /nAL REY DE LOS CIELOS QUE HA NACIDO YA! /n¡SIN RICAS OFRENDAS LLEGAR, NO TEMÁIS, /nQUE AL NIÑO LE AGRADAN LA FE Y VOLUNTAD!',
            },
            {
                estilo: '',
                texto: '¡UN RUSTICO TECHO ABRIGO LE DA, /nPOR CUNA UN PESEBRE, POR TEMPLO UN PORTAL! /n¡EL LECHO DE PAJAS INCOGNITO ESTA, /nQUIEN VE LAS ESTRELLAS, A SUS PIES BRILLAR!',
            },
            {
                estilo: '',
                texto: '¡HERMOSO LUCERO LE VINO A ANUNCIAR /nY MAGOS DE ORIENTE BUSCÁNDOLE VAN...! /n¡DELANTE SE POSTRAN DEL REY DE JUDÁ, /nDE INCIENSO, ORO Y MIRRA TRIBUTO LE DAN...!',
            },
        ],
    },

    {
        id: '34',
        pag: '37',
        titulo: '¡YA QUE LLENÁIS!',
        contenido: [
            {
                estilo: '',
                texto: 'CORO',
            },

            {
                estilo: '',
                texto: '¡YA QUE LLENÁIS DE FAVORES /nA TODO EL QUE EN VOZ CONFÍA...! /n¡OH CORAZÓN DE MARÍA, /nROGAD POR LOS PECADORES!',
            },
            {
                estilo: '',
                texto: '¡POR EL PECADO QUE MOSTRASTEIS /nEN EL TEMPLO LA TERNURA...! /n¡QUE POR EL LA ESPADA DURA /nDE SIMEÓN ACEPTASTEIS...!',
            },
            {
                estilo: '',
                texto: '¡ASÍ, MADRE, CONSOLASTEIS, /nASÍ, MADRE, CONSOLASTEIS /nNUESTROS LLANTOS Y CLAMORES, /nNUESTROS LLANTOS Y CLAMORES...!',
            },
            {
                estilo: '',
                texto: '¡DEL QUE VA ERRANDO SOIS GUÍA, /nANCORA DEL NAUFRAGANTE...! /nEN VOS HALLA EL NAVEGANTE, /nSOSIEGO, PUERTO, ALEGRÍA...!',
            },
            {
                estilo: '',
                texto: '¡SIN VOS, MADRE, QUE SERIA, /nSIN VOS, MADRE QUE SERIA...! /n¡DEL MUNDO LLENO DE ERRORES, /nDEL MUNDO LLENO DE ERRORES...',
            },
        ],
    },

    {
        id: '35',
        pag: '38',
        titulo: '¡AVE MARÍA!',
        contenido: [
            {
                estilo: '',
                texto: '¡AVE MARÍA! ¡TU QUE FUISTE /nMADRE, EN LA TIERRA...! /n¡TU QUE SUFRES POR NOSOTROS...!',
            },
            {
                estilo: '',
                texto: '¡TU QUE SIEMPRE CONSUELAS, NUESTRAS PENAS...! /n¡VE, ESTAMOS POSTRADOS A TUS PIES...! /n¡SANTA MARÍA, SANTA MARÍA, MARÍA...!',
            },
            {
                estilo: '',
                texto: '¡MADRE AMOROSA /nSECA NUESTRO LLANTO!',
            },
            {
                estilo: '',
                texto: '¡CON NUESTRAS LAGRIMAS... /nIMPLORA A TU HIJO, /nGLORIA, GLORIA...!',
            },
        ],
    },

    {
        id: '36',
        pag: '39',
        titulo: '¡TRABAJAD, TRABAJAD!',
        contenido: [
            {
                estilo: '',
                texto: '¡TRABAJAD, TRABAJAD, /nSOMOS SIERVOS DE DIOS! /n¡SEGUIREMOS LA SENDA /nQUE EL MAESTRO TRAZO!',
            },
            {
                estilo: '',
                texto: 'RENOVANDO LAS FUERZAS /nCON BIENES QUE DA /nEL DEBER QUE NOS TOCA /nCUMPLIDO SERA...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡TRABAJAD, TRABAJAD, /nESPERAD Y VELAD, /nCONFIAD, SIEMPRE ORAD, /nQUE EL MAESTRO PRONTO VOLVERÁ...!',
            },
            {
                estilo: '',
                texto: '¡TRABAJAD, TRABAJAD, /nHAY QUE DAR DE COMER! /n¡AL QUE PAN DE LA VIDA /nQUISIERE TENER!',
            },
            {
                estilo: '',
                texto: '¡HAY ENFERMOS QUE IRÁN /nA LOS PIES DEL SEÑOR!  /n¡AL SABER QUE LOS SANA, LOS SANA SU AMOR...! ¡TRABAJAD,  /nTRABAJAD, FORTALEZA PEDID! /n¡EL REINADO DEL MAL /nCON VALOR COMBATID!',
            },
            {
                estilo: '',
                texto: '¡CONDUCID LOS CAUTIVOS /nAL LIBERTADOR, /nY DECID QUE REDIME, /nREDIME SU AMOR...!',
            },
        ],
    },

    {
        id: '37',
        pag: '40',
        titulo: '¡TU NOMBRE MARÍA!',
        contenido: [
            {
                estilo: '',
                texto: '¡TU NOMBRE, MARÍA /nQUE ES IRIS DE ALIANZA! ¡ES DULCE ESPERANZA,  /nES PRENDA DE AMOR..!',
            },
            {
                estilo: '',
                texto: '¡FERVIENTE PLEGARIA.  /nQUE LLEGA HASTA EL CIELO!  /n¡DIVINO CONSUELO  /nQUE CALMA EL DOLOR...!',
            },
            {
                estilo: '',
                texto: '¡POR ESO, ¡SEÑORA! /nMI MADRE TE LLAMO...! /n¡POR ESO A TI CLAMO /nPOSTRADO A TUS PIES...!',
            },
            {
                estilo: '',
                texto: '¡TE RUEGO QUE ENDULCES  /nMI AMARGO QUEBRANTO...!  /n¡QUE ENJUGUES MI LLANTO,  /nQUE ALIENTES MI FE...!',
            },
            {
                estilo: '',
                texto: '¡TE RUEGO QUE ENDULCES  /nMI AMARGO QUEBRANTO...!  /n¡QUE ENJUGUES MI LLANTO!  /n¡QUE ALIENTES MI FE...!  /n¡QUE ALIENTES MI FE...',
            },
        ],
    },

    {
        id: '38',
        pag: '41',
        titulo: '¡DETÉN TUS PASOS!',
        contenido: [
            {
                estilo: '',
                texto: 'DETÉN TUS PASOS, ¡OH! CAMINANTE,  /nY OBSERVA LOS DESTELLOS DE ESA LUZ!  /n¡QUE SE ESPARCE EN EL ORBE MUY RADIANTE,  /nMÁS CONTÉMPLALA BIEN QUE ES UNA CRUZ',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡PERDÓN, PERDÓN, ¡OH! GRAN SEÑOR,  /nTE PIDE ESTE SIERVO POR PIEDAD!  /n¡PERDÓN, PERDÓN, ¡OH GRAN SEÑOR,  /nLÍMPIAME DE TODA INIQUIDAD...!',
            },
            {
                estilo: '',
                texto: '¡ES EL SÍMBOLO SAGRADO QUE DE ANTAÑO  /nVINO A IMPLANTAR EL DIVINO REDENTOR!  /n¡PARA QUITAR DE TODO SER EL ENGAÑO  /nY SALVARTE PARA SIEMPRE CON SU AMOR!',
            },
            {
                estilo: '',
                texto: '¡SI TE SIENTES ABRUMADO DE DOLORES, /nY SI VIENES CARGADO DE AMARGURAS, /nFLAGELA TUS RODILLAS SIN TEMORES, /nY PIDE TU ALIVIO A LAS ALTURAS...!',
            },
            {
                estilo: '',
                texto: '¡SENTIRÁS EN TUS CARNES AL INSTANTE,  /nSOBRE TODO EN EL SENSIBLE CORAZÓN,  /nLA AYUDA DIVINA, ¡OH! CAMINANTE,  /nQUE PEDISTE POR GRACIA EN ORACIÓN...!',
            },
            {
                estilo: '',
                texto: '¡PROSIGUE TUS PASOS, ¡OH! CAMINANTE,  /nY RECUERDA LOS DESTELLOS DE ESA LUZ!  /n¡QUE OS GUÍA Y QUE SIEMPRE VA ADELANTE  /nCON LOS HIJOS AMADOS DE JESÚS...!',
            },
        ],
    },
    {
        id: '39',
        pag: '42',
        titulo: '¡CRISTO ME AYUDA POR EL A VIVIR!',
        contenido: [
            {
                estilo: '',
                texto: '¡CRISTO ME AYUDA POR EL A VIVIR, /nCRISTO ME AYUDA POR EL A MORIR! /n¡HASTA QUE LLEGUE SU GLORIA A VER, /nCADA MOMENTO LE ENTREGO A MI SER...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡CADA MOMENTO LA VIDA EL ME DA, /nCADA MOMENTO CONMIGO EL ESTA! /n¡HASTA QUE LLEGUE SU GLORIA A VER, /nCADA MOMENTO LE ENTREGO MI SER...!',
            },
            {
                estilo: '',
                texto: '¡SIENTO PESARES, MUY CERCA EL ESTA, /nSIENTO DOLORES, ALIVIO EL ME DA! /n¡TENGO AFLICCIONES ME MUESTRA SU AMOR, /nCADA MOMENTO ME CUIDAS, SEÑOR...!',
            },
            {
                estilo: '',
                texto: '¡TENGO AMARGURAS O TENGO TEMOR, /nTENGO TRISTEZAS ME INSPIRAS VALOR! /n¡TENGO CONFLICTOS O PENAS AQUÍ, /nCADA MOMENTO TE ACUERDAS DE MI...!',
            },
        ],
    },
    {
        id: '40',
        pag: '43',
        titulo: '¡SANTO ESPÍRITU, DESCIENDE!',
        contenido: [
            {
                estilo: '',
                texto: '¡SANTO ESPÍRITU, DESCIENDE /nA MI POBRE CORAZ0N…! /n¡LLÉNALO DE TU PRESENCIA /nY HAZ EN EL TU HABITACIÓN!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡LLENA HOY, LLENA HOY,  /nLLENA HOY MI CORAZÓN…!  /n¡SANTO ESPÍRITU, DESCIENDE /nY HAZ EN EL TU HABITACIÓN!',
            },
            {
                estilo: '',
                texto: '¡DE TU GRACIA PUEDES DARME /nINUNDANDO EL CORAZÓN…! /n¡VEN QUE MUCHO NECESITO /nDAME HOY TU BENDICIÓN!',
            },
            {
                estilo: '',
                texto: '¡DÉBIL SOY, ¡OH! SI MUY DÉBIL /nA TUS PIES POSTRADO ESTOY! /n¡ESPERANDO QUE TU GRACIA /nCON PODER ME LLENE HOY...!',
            },
            {
                estilo: '',
                texto: '¡DAME LA PAZ, CONSUELO Y GOZO, /nCUBRE HOY CON TU PERDÓN…! /n¡TU CONFORTAS Y REDIMES, /nTU DAS GRANDE SALVACIÓN…!',
            },
        ],
    },
    {
        id: '41',
        pag: '44',
        titulo: '¡ADIÓS, OH PADRE, TODOS NOS VAMOS!',
        contenido: [
            {
                estilo: '',
                texto: '¡ADIÓS, ¡OH! PADRE, TODOS NOS VAMOS /nY TE DEJAMOS EL CORAZÓN...! /nSOLO PEDIMOS, PADRE GLAMOROSO, /nQUE NO NOS FALTE TU BENDICIÓN…!',
            },
            {
                estilo: '',
                texto: '¡JESÚS DIVINO, ¡OH! DIOS DEL CIELO, /nPADRE AMOROSO, MI GRAN CREADOR! /n¡TU ERES MI FUERZA Y MI CONSUELO, /nLA PAZ DE MI ALMA, MI ÚNICO AMOR!',
            },
            {
                estilo: '',
                texto: 'CUANDO AGOBIADO DE MIS PESARES, /nEN TUS ALTARES HALLO EL PERDÓN! /n¡OH! DULCE PADRE DE MI ESPERANZA, /nEN TI DESCANSA MI CORAZÓN.',
            },
        ],
    },
    {
        id: '42',
        pag: '44',
        titulo: '¡A MARCHAR CON VALOR!',
        contenido: [
            {
                estilo: '',
                texto: '¡A MARCHAR CON VALOR, /nA ESA MANSIÓN VOLAR! /n¡MANSIÓN DE AMOR!',
            },
            {
                estilo: '',
                texto: '¡OH, MADRE MÍA! /n¡AQUÍ ESTÁN YA TUS HIJOS! /n¡OH, MADRE AMABLE! /n¡DADLES TU BENDICIÓN!',
            },
        ],
    },
    {
        id: '43',
        pag: '45',
        titulo: '¡SON LAS ROSAS QUE EN MAYO ESCOGÍ!',
        contenido: [
            {
                estilo: '',
                texto: '¡OH! BENDITA REINA CELESTIAL,  /nSANTA MADRE DEL BUEN SALVADOR…!  /n¡RECIBE LA FRAGANCIA DE ESTAS ROSA, /nQUE EXHALAN PARA TI UN TIERNO AMOR…!',
            },
            {
                estilo: '',
                texto: '¡SON LAS ROSAS QUE EN MAYO ESCOGÍ /nPARA HACERTE PRESENTE MI AMOR…! /nSON CASTOS CORAZONES QUE TE ALABAN /nQUE RINDEN HOMENAJE A TU CANDOR…!',
            },
            {
                estilo: '',
                texto: '¡ES EL. ROSAL QUE HA FLORECIDO, /nQUE ENSALZARA TU SANTO NOMBRE...! /n¡TEMPRANAS ROSAS QUE HAN BROTADO /nQUE ALABARAN TU DULCE NOMBRO...!',
            },
            {
                estilo: '',
                texto: '¡QUE NUNCA SE EXTINGA LA LLAMA /nQUE AVIVA A NUESTROS CORAZONES /nQUE TU SANTO AMOR SE INFLAMA /nY QUE ALIENTA NUESTRA FE...!',
            },
        ],
    },
    {
        id: '44',
        pag: '46',
        titulo: 'MISERICORDIA',
        contenido: [
            {
                estilo: '',
                texto: 'AYÚDAME SEÑOR, YO TE IMPLORO /nQUE SEA EN MÍ TU LUZ BELLO TESORO /nDIVINO REDENTOR, ES MI ESPERANZA /nENCONTRAR PAZ EN TU ENSEÑANZA',
            },
            {
                estilo: '',
                texto: 'DEBILITANDO VOY A CADA INSTANTE /nCONCÉDEME TU LUZ PARA SALIR AVANTE, /nPERDÓN Y CARIDAD VENGO A IMPLORARTE /nVEN HACIA MI SEÑOR CUAL LUZ RADIANTE',
            },
            {
                estilo: '',
                texto: 'DIVINA TRINIDAD ANTE TU ESENCIA /nTODA LA HUMANIDAD PIDE CLEMENCIA /nMISERICORDIA ¡OH DIOS PARA TUS HIJOS /nCESE EL DOLOR TE LO SUPLICO.',
            },
            {
                estilo: '',
                texto: 'RESPLANDECE TU LUZ EN EL ORBE ENTERO /nILUMINANDO ESTA TODO SENDERO, /nESCUCHA GRAN JEHOVÁ... ESTE MI RUEGO, /nREINE TU AMOR Y PAZ ENTRE LOS PUEBLOS, /n¡MISERICORDIA! OH DIOS...',
            },
        ],
    },
    {
        id: '45',
        pag: '47',
        titulo: '¡SANTO, ¡SANTO, SANTO, SEÑOR OMNIPOTENTE!',
        contenido: [
            {
                estilo: '',
                texto: '¡SANTO, SANTO, SANTO, SEÑOR OMNIPOTENTE /nSIEMPRE EL LABIO MÍO LOORES TE DARÁ! /n¡SANTO, SANTO, SANTO, TE ADORO REVERENTE /nDIOS EN TRES PERSONAS. BENDITA TRINIDAD!',
            },
            {
                estilo: '',
                texto: '¡SANTO, SANTO, SANTO, CUAN NUMEROSO CORO /nDE TUS ESCOGIDOS TE ADORA SIN CESAR! /n¡DE ALEGRÍA LLENOS Y SUS CORONAS DE ORO /nRINDE ANTE EL TRONO Y EL CRISTALINO MAR!',
            },
            {
                estilo: '',
                texto: '¡SANTO, SANTO, SANTO, LA INMENSA MUCHEDUMBRE /nDE ÁNGELES QUE CUMPLEN TU SANTA VOLUNTAD! /n¡ANTE TI SE POSTRAN, TE MUESTRAN MANSEDUMBRE /nANTE TI QUE HAS SIDO, QUE ERES Y SERÁS...!',
            },
            {
                estilo: '',
                texto: '¡SANTO, SANTO, SANTO. POR MÁS QUE ESTAS VELADO /nE IMPOSIBLE SEA TU GLORIA CONTEMPLAR! /n¡SANTO TU ERES SOLO Y NADA HAY A TU LADO, /nEN PODER PERFECTO, PUREZA Y CARIDAD...!',
            },
            {
                estilo: '',
                texto: '¡SANTO, SANTO, SANTO, LA GLORIA DE TU NOMBRE /nVEMOS EN TUS OBRAS, EN CIELO, TIERRA Y MAR! /n¡SANTO, SANTO, SANTO, TE ADORA TODO HOMBRE. /nDIOS EN TRES PERSONAS, BENDITA TRINIDAD...!',
            },
            {
                estilo: '',
                texto: 'PARA ADVENIMIENTOS.',
            },
        ],
    },
    {
        id: '46',
        pag: '48',
        titulo: 'AUNQUE SOY PEQUEÑUELO',
        contenido: [
            {
                estilo: '',
                texto: 'AUNQUE SOY PEQUEÑUELO /nME MIRA EL SANTO DIOS /nEL OYE DESDE EL CIELO /nMI HUMILDE Y TIERNA VOZ.',
            },
            {
                estilo: '',
                texto: 'ME VE DE SU ALTO TRONO /nMI NOMBRE SABE SI /nY CUANDO PIENSO Y SIENTO /nCONOCE DESDE ALLÍ',
            },
            {
                estilo: '',
                texto: 'EL MIRA CADA INSTANTE /nLO QUE HAGO BIEN O MAL /nPUES TODO ESTA DELANTE /nDE SU OJO PATERNAL.',
            },
        ],
    },
    {
        id: '47',
        pag: '48',
        titulo: '¡TRISAGIO DE LA TRINIDAD!',
        contenido: [
            {
                estilo: '',
                texto: '¡TODO EL ORBE CANTE /nCON FINA LEALTAD! /n¡EL TRISAGIO SANTO /nDE LA TRINIDAD.',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡SANTO, SANTO, SANTO,  /nQUE ES DIOS DE VERDAD!  /n¡EN PERSONAS TRINO  /nY UNA ES LA DEIDAD...!',
            },
            {
                estilo: '',
                texto: '¡LAS TRES JERARQUÍAS /nDEL CIELO ALABAD! /n¡EN PERSONAS TRINO /nY UNA ES LA DEIDAD!',
            },
            {
                estilo: '',
                texto: '¡RESUENE EN LAS CALLES  /nDE NUESTRA CIUDAD!  /n¡LA ETERNA ALABANZA  /nDE LA TRINIDAD...!',
            },
            {
                estilo: '',
                texto: '¡VUESTROS INSTRUMENTOS /nFESTIVOS, TEMPLAD! /nAL DIOS TRINO Y UNO /nEL CANTO ARREGLAD...!',
            },
            {
                estilo: '',
                texto: '¡SOL, LUNA Y ESTRELLAS  /nA DIOS ENSALZAD!  /n¡PUBLIQUE SU GLORIA  /nVUESTRA CARIDAD…!',
            },
            {
                estilo: '',
                texto: '¡TODAS LAS CRIATURAS /nUN CORO FORMAD…! /n¡CIELO Y TIERRA JUNTOS /nGLORIA ENTONAD…!',
            },
        ],
    },
    {
        id: '48',
        pag: '50',
        titulo: '¡TAN DULCES SON TUS OJOS!',
        contenido: [
            {
                estilo: '',
                texto: '¡TAN DULCES SON TUS OJOS /nCASTÍSIMA DONCELLA...! /n¡COMO LA LUNA BELLA /nDEL RUTILANTE ORIÓN…!',
            },
            {
                estilo: '',
                texto: '(SE REPITE)',
            },
            {
                estilo: '',
                texto: '¡DE TULIPANES ROJOS /nTUS LABIOS SON, MARÍA...! /n¿QUE DAN SU GALLARDÍA/nLAS PALMAS DE SAHARON /n¡QUE DAN SU GALLARDÍA /nLAS PALMAS DE SAHARON!',
            },
            {
                estilo: '',
                texto: '¡TU PRIMOROSA FRENTE /nCOMO BRUÑIDA PLATA! /n¡MAGNIFICA RETRATA, /nLA GLORIA DE JEHOVÁ!',
            },
            {
                estilo: '',
                texto: '¡Y EN ELLA RELUCIENTE /nCUAL SIGNO DE ESPERANZA! /n¡EL IRIS DE LA ALIANZA /nSUBLIME SIEMPRE ESTA...! /n¡EL IRIS DE LA ALIANZA /nSUBLIME SIEMPRE ESTA...!',
            },
        ],
    },
    {
        id: '49',
        pag: '51',
        titulo: '¡MAESTRO, SE ENCRESPAN LAS AGUA!',
        contenido: [
            {
                estilo: '',
                texto: '¡MAESTRO, SE ENCRESPAN LAS AGUAS, /nY RUGE LA TEMPESTAD! /n¡LOS GRANES ABISMOS DEL CIELO /nSE CUBREN DE OBSCURIDAD!',
            },
            {
                estilo: '',
                texto: '¿NO VES QUE AQUÍ PERECEMOS? /n¡SÁLVANOS CON TU LUZ...! /n¡CUANDO EL MAR AGITADO NOS ABRE /nPROFUNDO SEPULCRO AQUÍ...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡LOS VIENTOS, LAS ONDAS, OIRÁN SU VOZ; /nSEA LA PAZ!',
            },
            {
                estilo: '',
                texto: '¡CALMA LAS IRAS DEL NEGRO MAR, /nLAS LUCHAS DEL ALMA LAS HACE CESAR! /n¡Y ASÍ LA BARQUILLA DO VA EL SEÑOR /nHUNDIRSE NO PUEDE EN EL MAR TRAIDOR!',
            },
            {
                estilo: '',
                texto: '¡DOQUIER SE CUMPLE SU VOLUNTAD /nSEA LA PAZ, SEA LA PAZ…! /n¡SU VOZ RESUENA EN LA INMENSIDAD /nSEA LA PAZ…!',
            },
            {
                estilo: '',
                texto: '¡MAESTRO, MI SER ANGUSTIADO /nTE BUSCA CON ANSIEDAD! /n¡DE MI ALMA EN LOS ANTROS PROFUNDOS /nSE LIBRA CRUEL TEMPESTAD!',
            },
            {
                estilo: '',
                texto: '¡PASA EL PECADO A TORRENTES /nSOBRE MI FRÁGIL SER...! /n¡QUE PEREZCO, PEREZCO, MAESTRO! /n¡OH, QUIÉREME SOCORRER...!',
            },
            {
                estilo: '',
                texto: '¡MAESTRO, PASO LA TORMENTA, /nLOS VIENTOS NO RUGEN YA! /n¡Y SOBRE EL CRISTAL DE LAS AGUAS /nEL SOL RESPLANDECERÁ!',
            },
            {
                estilo: '',
                texto: '¡MAESTRO PROLONGA ESTA CALMA /nNO ME ABANDONES MAS! /n¡CRUZARE LOS ABISMOS CONTIGO /nGOZANDO BENDITA PAZ...i',
            },
        ],
    },
    {
        id: '50',
        pag: '52',
        titulo: '¡VUELA SUSPIRO DEL ALMA!',
        contenido: [
            {
                estilo: '',
                texto: '¡VUELA SUSPIRO DEL ALMA /nDILE A MI PADRE AMADO! /n¡QUE DIRIJA UNA MIRADA /nA ESTE PUEBLO, BENDITO DE ISRAEL!',
            },
            {
                estilo: '',
                texto: '¡DILE, QUE TU ERES TESTIGO/nDE MIS ACERBOS DOLORES! /n¡DILE: QUE MUERO DE AMORES, /nQUE SUYO ES, Mi CORAZÓN!',
            },
        ],
    },
    {
        id: '51',
        pag: '53',
        titulo: '¡AMA EL PASTOR SUS OVEJAS!',
        contenido: [
            {
                estilo: '',
                texto: '¡AMA EL PASTOR SUS OVEJAS, /nCON UN AMOR PATERNAL! /n¡AMA EL PASTOR SU REBAÑO, /nCON UN AMOR SIN IGUAL...! /n¡AMA EL PASTOR A LAS OTRAS /nQUE DESCARRIADAS ESTÁN…! /n¡Y CONMOVIDO LAS BUSCA /nPOR DONDE QUIERA QUE VAN...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡POR EL DESIERTO, ERRABUNDAS, /nVENCE SUFRIR PENAS. MIL...! /n¡Y AL ENCONTRARLAS; EN HOMBROS /nLLÉVALAS, TIERNO AL REDIL...!',
            },
            {
                estilo: '',
                texto: '¡AMA EL PASTOR SUS CORDEROS, /nÁMALOS, TIERNO EL PASTOR! /n¡A LOS QUE A VECES PERDIDOS, /nSE OYEN GEMIR DE DOLOR...! /n¡VED AL PASTOR CONMOVIDO /nPOR LOS COLLADOS VAGAR...! /n¡Y A LOS CORDEROS EN HOMBROS /nVEDLO LLEVANDO AL HOGAR...!',
            },
            {
                estilo: '',
                texto: '¡AMA A LAS NOVENTA Y NUEVE /nQUE EN EL APRISCO GUARDO! /n¡AMA A LAS QUE DESCARRIADAS /nPOR EL DESIERTO DEJO...! /n¡OH, MIS OVEJAS PERDIDAS, /nCLAMA DOLIENTE EL PASTOR! /n¿QUIENES VENDRÁN EN MI AYUDA /nPARA SALVARLAS, SEÑOR...?',
            },
        ],
    },
    {
        id: '52',
        pag: '54',
        titulo: '¡OH! ¡MI BUEN JESÚS!',
        contenido: [
            {
                estilo: '',
                texto: '¡OH! MI BUEN JESÚS, /nRECIBE ESTAS FLORES! /n¡Y DE ESTOS TUS HIJOS /nSUS CORAZONES…!',
            },
            {
                estilo: '',
                texto: '¡SI ALGÚN DÍA CON ELLAS /nTE ENCUENTRAS ADORNADO/n¡SON YUYAS, ¡OH! PADRE,/nLAS FLORES DE MI ALMA!',
            },
            {
                estilo: '',
                texto: '¡ESPERO DEL PADRE, /nESPERO DEL HIJO! /n¡ESPÍRITU SANTO /nSEA EL QUE NOS DIRIJA!',
            },
            {
                estilo: '',
                texto: '¡Y GRACIAS TE DAMOS, /n¡OH! MI BUEN JESÚS, /n¡PORQUE AQUÍ HAS VENIDO /nA DARNOS LA LUZ…',
            },
            {
                estilo: '',
                texto: 'ASCENDIMIENTO.',
            },
        ],
    },
    {
        id: '53',
        pag: '55',
        titulo: '¡QUE HERMOSAS AVES VIENEN AQUÍ!',
        contenido: [
            {
                estilo: '',
                texto: '¡QUE HERMOSAS AVES VIENEN AQUÍ.!, /nY EN SUS TRINOS SUAVES DICEN ASÍ:/n¡TU, EL BUEN PASTOR DE ESTAS OVEJAS, /nQUE NUNCA LAS DEJAS, GUIÁNDOLAS VAS! /n¡OYENDO SUS QUEJAS, CONSUELO LES DAS, /nVEN. ¡PADRE AMOROSO! VEN AQUÍ A MORAR!',
            },
            {
                estilo: '',
                texto: '¡TUS DULCES CONSEJOS ESPERAMOS OÍR, /nY TUS BENDICIONES AQUÍ RECIBIR...! /n¡TU EL BUEN PASTOR DE ESTAS OVEJAS, /nQUE NUNCA LAS DEJAS, GUIÁNDOLAS VAS! /n¡OYENDO SUS QUEJAS, CONSUELO LES DAS, /nVEN. ¡PADRE AMOROSO! VEN AQUÍ A MORAR…!',
            },
        ],
    },
    {
        id: '54',
        pag: '55',
        titulo: '¡SOY SOLDADO DE JESÚS!',
        contenido: [
            {
                estilo: '',
                texto: '¡SOY SOLDADO DE JESÚS, /nY LA CRUZ ES MI ESTANDARTE! /n¡MI FUERTE GRITO DE GUERRA, /nHA DE SER: ¡“VIVA JESÚS”!',
            },
            {
                estilo: '',
                texto: '¡SOY SOLDADO DE JESÚS, /nY LA CRUZ ES MI ESTANDARTE! /n¡CARIDAD, MI SANTO LEMA, /nCANTARE ¡“GLORIA A JESÚS”!',
            },
        ],
    },
    {
        id: '55',
        pag: '56',
        titulo: '¡VOLEMOS, VOLEMOS AL CIELO ALMA MÍA!',
        contenido: [
            {
                estilo: '',
                texto: '¡VOLEMOS, VOLEMOS AL CIELO, ALMA MÍA, /nBUSCANDO A ELÍAS, QUE ALLÍ SE HA DE VER! /n¡AH! ESTA INUNDADO DE GOZO EN LA GLORIA /nDE ETERNA VICTORIA AL PUEBLO DE ISRAEL...!',
            },
            {
                estilo: '',
                texto: '¡RECIBE ELÍAS, LAS FLORES DE MI ALMA /nQUE VAN EMPAPADAS DE LLANTO Y DE AMOR! /n¡SE MUESTRAS ENFERMAS, ELLAS TE SALUDAN, /n¡OH! ASTRO DIVINO DEL SOLIO DE DIOS...!',
            },
            {
                estilo: '',
                texto: 'VOSOTROS, QUERUBES, QUE AMÁIS A ELÍAS, /nDE GOZO LLENÁIS EL SOLIO DE DIOS...! /n¡AHÍ ESTA INUNDADO DE GOZO EN LA GLORIA /nDE ETERNA VICTORIA AL PUEBLO DE ISRAEL...!',
            },
            {
                estilo: '',
                texto: '¡TU LUZ ES MAS CLARA QUE UN ALBO LUCERO, /nGENTIL MENSAJERO, DESCIENDE HACIA AQUÍ! /n¡TU LUZ Y TU GRACIA NOS DEJAS AQUÍ, /n¡OH! ASTRO DIVINO EL SOLIO DE DIOS...!',
            },
            {
                estilo: '',
                texto: '¡VOLEMOS, VOLEMOS AL CIELO, ALMA MÍA, /nBUSCANDO A ELÍAS, QUE ALLÍ SE HA DE VER! /n¡AHÍ ESTA INUNDADO DE GOZO EN LA GLORIA /nDE ETERNA VICTORIA AL PUEBLO DE ISRAEL...!',
            },
        ],
    },
    {
        id: '56',
        pag: '57',
        titulo: '¡EL MUNDO PERDIDO!',
        contenido: [
            {
                estilo: '',
                texto: '¡EL MUNDO PERDIDO EN PECADO SE VIO, /nJESÚS ES LA LUZ DEL MUNDO…! /n¡MAS EN TINIEBLAS SU GLORIA BRILLO, /nJESÚS ES LA LUZ DEL MUNDO...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡VEN A LA LUZ, NO QUIERAS PERDER /nGOZO PERFECTO AL AMANECER...! /n¡YO CIEGO FUI, MAS YA PUEDO VER, /nJESÚS ES LA LUZ DEL MUNDO...!',
            },
            {
                estilo: '',
                texto: '¡VIVIR EN EL, VUELVE LA NOCHE EN DÍA ,/nJESÚS ES LA LUZ DEL MUNDO...!',
            },
            {
                estilo: '',
                texto: '¡VIVAMOS EN LUZ Y SIGAMOS AL GUÍA /nJESÚS ES LA LUZ DEL MUNDO...!',
            },
            {
                estilo: '',
                texto: '¡OH, CIEGOS Y PRESOS EN LÓBREGO ERRO /nJESÚS ES LA LUZ DEL MUNDO...!/n¡EL MANDA LAVAROS Y VER SU FULGOR, /n¡JESÚS ES LA LUZ DEL MUNDO...!',
            },
            {
                estilo: '',
                texto: '¡NI SOLES, NI LUNAS EL CIELO TENDRÁ, /nJESÚS ES LA LUZ DEL MUNDO…! /n¡LA LUZ DE SUS ROSTRO LA ILUMINARA /nJESÚS ES LA LUZ DEL MUNDO...!',
            },
        ],
    },
    {
        id: '57',
        pag: '58',
        titulo: '¡SILENCIO, SILENCIO!',
        contenido: [
            {
                estilo: '',
                texto: '¡SILENCIO, SILENCIO, /nMIRAD AL SAGRARIO, /n¡LAS PUERTAS ABREN, /nYA SALE EL SEÑOR…!',
            },
            {
                estilo: '',
                texto: '¡MIRAD SU SEMBLANTE, /nINSPIRA ALEGRÍA /n¡MIRAD ESA LLAGA /nQUE LLEVA EN EL PECHO! /n¡MIRAD COMO MANA /nDULZURA Y PIEDAD!',
            },
            {
                estilo: '',
                texto: '¡ENTREMOS EN ELLA, /nPUES EL NOS CONVIDA! /n¡QUE ALLÁ EN NUEVA VIDA/nEL ALMA TENDRÁ...!',
            },
        ],
    },
    {
        id: '58',
        pag: '59',
        titulo: '¡GLORIA AL SEÑOR!',
        contenido: [
            {
                estilo: '',
                texto: '¡GLORIA AL SEÑOR, NUESTRO DIOS, /nNUESTRO REY, Y NUESTRO PADRE...! /n¡GLORIA AL SEÑOR, /nDEL INMENSO PRO-HONOR DE SU ALTAR!',
            },
            {
                estilo: '',
                texto: '¡CELEBREMOS SIN FIN/nSU GRANDEZA Y PODER...! /n¡CELEBREMOS SIN FIN/nSU GRANDEZA Y SU PODER, Y SU PODER...!',
            },
            {
                estilo: '',
                texto: '¡SI, SI, NADA PUEDE CONTRA EL; /nNADA PUEDE CONTRA EL...! /n¡TODO EL PODER DEL MUNDO! /n¡SUMISO ESTA EN SU VOZ, /nSUMISO ESTA EN SU VOZ! /nSUMISO ESTA EN SU VOZ!',
            },
            {
                estilo: '',
                texto: '¡CELEBREMOS SU GRANDEZA, /nCELEBREMOS SU PODER...! /n¡GLORIA AL SEÑOR, GLORIA, /nGLORIA AL SEÑOR, GLORIA SIN FIN! /n¡CANTEMOS: “¡GLORIA AL SEÑOR!”/n¡GLORIA AL SEÑOR, GLORIA AL SEÑOR! /n¡HOSANNA...!',
            },
            {
                estilo: '',
                texto: 'A RECIBIR AL SEÑOR.',
            },
        ],
    },
    {
        id: '59',
        pag: '60',
        titulo: '¡GLORIA AL PADRE!',
        contenido: [
            {
                estilo: '',
                texto: '¡GLORIA AL PADRE /nGLORIA AL HIJO ‘ /nGLORIA AL ESPÍRITU SANTO!',
            },
            {
                estilo: '',
                texto: '¡SANTO, SANTO, SANTO /nSEÑOR DIOS, SEÑOR DIOS, /nSEÑOR DIOS DE LOS EJÉRCITOS!',
            },
            {
                estilo: '',
                texto: '¡PADRE QUE ESTAS EN LOS CIELOS /nY EN LA TIERRA /nCANTEMOS GLORIA!',
            },
        ],
    },
    {
        id: '60',
        pag: '61',
        titulo: '¡VEN DEL LÍBANO!',
        contenido: [
            {
                estilo: '',
                texto: '¡VEN DEL LÍBANO, ¡OH! VIRGEN EXCELSA, /nVEN DEL CIELO EN QUE TE HALLAS ¡OH! MAR /n¡POR TI SIENTE EL QUE SUFRE, ALEGRÍA, /n¡OH! PURÍSIMA LUZ DE PERDÓN.',
            },
            {
                estilo: '',
                texto: '¡ERES PURA, CUAL GOTA QUE TIEMBLA, /nDE LA FLOR EN SUS PÉTALOS BELLOS...! /n¡SON LAS GRACIAS DE DIOS TUS DESTELLOS /n¡OH! CUAN PURA ES LA VIRGEN EN SION...!',
            },
            {
                estilo: '',
                texto: '¡ERES PURA, CUAL GOTA QUE TIEMBLA, /nDE LA FLOR EN SUS PÉTALOS BELLOS....! /n¡SON LAS GRACIAS DE DIOS TUS DESTELLOS /nMADRE EXCELSA ESCOGIDA POR DIOS...!',
            },
        ],
    },

    {
        id: '61',
        pag: '62',
        titulo: '¡QUE HERMOSA DONCELLA!',
        contenido: [
            {
                estilo: '',
                texto: '¡QUE HERMOSA DONCELLA, DELICIA DE DIOS! /n¿A DONDE CAMINAS CON PASO VELOZ...? /n¿A QUE VAS AL TEMPLO DEL REY SALOMÓN, /nMIL TÓRTOLAS LLEVAS DE PARDO COLOR..? /n¿A QUE VAS AL TEMPLO DEL REY SALOMÓN? /nMIL TÓRTOLAS LLEVAS DE PARDO COLOR...?',
            },
            {
                estilo: '',
                texto: '¿POR QUE VA CUBRIENDO TU ROSTRO EL RUBOR, /nEL RUBOR...? /n¿SI MAS PURA ERES Y HERMOSA QUE EL SOL,  /nQUE EL SOL...? /n¡A TI DE LA MANCHA DE ADÁN PECADOR,  /nPECADOR...! /n¡A TI SOLO QUISO LIBRAR EL SEÑOR,  /nLIBRAR EL SEÑOR!',
            },
            {
                estilo: '',
                texto: '¡PUES NO, NO TE OBLIGA LA LEY DEL RIGOR,  /nDEL RIGOR...! /n¡SI TU ERES LA HIJA DEL SUMO, HACEDOR,  /nHACEDOR...! /n¡PERMITE, SEÑORA, QUE YO VAYA EN POS, EN POS,  /nEN POS...! /nSIGUIENDO TUS PASOS AL TEMPLO DE DIOS.',
            },
            {
                estilo: '',
                texto: '¡VOSOTRAS LAS HIJAS QUE SOIS DE SION, /nSALID AL CAMINO, LLEGAD CON AMOR…! /n¡DECIDLE A LA VIRGEN CON SANTO FERVOR, /nAL AIRE SOLTANDO LA PLACIDA VOZ...! /n¡BENDITO EL INSTANTE EN QUE EL PADRE TE DIO! /n¡BENDITO EL INSTANTE EN QUE EL MUNDO TE VIO!',
            },
        ],
    },
    {
        id: '62',
        pag: '63',
        titulo: '¡DEL SEPULCRO TENEBROSO!',
        contenido: [
            {
                estilo: '',
                texto: '¡DEL SEPULCRO TENEBROSO/nEL. SEÑOR SE LEVANTO! /n¡Y LOS LAZOS DE LA MUERTE /nPODEROSO DESTROZO! /n¡NO TEMÁIS QUE EL MAESTRO /nHA TORNADO A VIVIR! /n¡Y NO SOLO EL, MAS TODOS /nLOS QUE LE HAYAN DE SEGUIR!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡ABIERTA ESTA LA TUMBA, /nVACÍO EL LUGAR...! /n¡EN DÓNDE AMIGOS FIELES /nLE HICIERON DESCANSAR!',
            },
            {
                estilo: '',
                texto: '¡COMO EL GRANO DE SEMILLA /nEN LA TIERRA DEBE ENTRAR! /n¡NUESTROS CUERPOS IGUALMENTE /nEN LA TUMBA HABRÁN DE ESTAR! /n¡ESPERANDO EL DÍA GRANDE /nEN LAS NUBES LA SEÑAL! /n¡CUANDO LA FINAL TROMPETA /nLLAMA A TODOS POR IGUAL!',
            },
            {
                estilo: '',
                texto: '¡A LOS FIELES CRISTO LLAMA /nA SU LADO SIEMPRE A ESTAR! /n¡Y CON EL POR LAS EDADES /nEN LOS CIELOS A MORAR! /n¡NO TEMÁIS QUE EL BUEN MAESTRO /nA LA VIDA RETORNO!/n¡Y NO SOLO EL, MAS TODOS /nLOS QUE AQUÍ! SU AMOR SALVO!',
            },
        ],
    },

    {
        id: '63',
        pag: '64',
        titulo: '¡BELLÍSIMA MARÍA!',
        contenido: [
            {
                estilo: '',
                texto: '¡BELLÍSIMA MARÍA, /nMADRE DEL SALVADOR...! /n¡LAS FLORES QUE OFRECEMOS /nRECÍBELAS PROPICIAS...!',
            },
            {
                estilo: '',
                texto: '¡CORAZONES DE PUREZA, /nPARA ENSALZAR A LA BELLEZA…! /n¡PORQUE TU ERES LA ALTEZA /nDE ESTE PUEBLO DE ISRAEL...!',
            },
            {
                estilo: '',
                texto: '¡A TI NOS ACOGEMOS, /nBELLÍSIMA MARÍA...! /n¡PORQUE ERES MADRE MÍA /nCONSUELO DE ISRAEL...!',
            },
            {
                estilo: '',
                texto: '¡MARÍA ES LA GUÍA /nDE SIN IGUAL PUREZA...! /n¡DEL CIELO LA GRANDEZA /nPARA EL PUEBLO DE ISRAEL...!',
            },
        ],
    },

    {
        id: '64',
        pag: '65',
        titulo: '¡HAY UN MUNDO FELIZ!',
        contenido: [
            {
                estilo: '',
                texto: '¡HAY UN MUNDO FELIZ MAS ALLÁ, /nDONDE CANTAN LOS SERES DE LUZ! /n¡TRIBUTÁNDOLE ETERNO LOOR, /nAL INVICTO GLORIOSO JESÚS...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡EN EL MUNDO FELIZ, /nREINAREMOS CON NUESTRO SEÑOR! /n¡EN EL MUNDO FELIZ, /nREINAREMOS CON NUESTRO SEÑOR!',
            },
            {
                estilo: '',
                texto: '¡CANTAREMOS CON GOZO A JESÚS! /n¡AL CORDERO QUE NOS RESCATO! /n¡Y CON SANGRE VERTIDA EN LA CRUZ /nLOS PECADOS DEL MUNDO QUITO...!',
            },
            {
                estilo: '',
                texto: '¡PARA SIEMPRE EN EL MUNDO FELIZ... /nCON LOS SERES DAREMOS HONOR! /n¡AL INVICTO, GLORIOSO JESÚS, A JESÚS, /nNUESTRO REY Y SEÑOR...!',
            },
        ],
    },

    {
        id: '65',
        pag: '66',
        titulo: '¡TRAS LA TORMENTA DEL ARCOÍRIS!',
        contenido: [
            {
                estilo: '',
                texto: '¡TRAS LA TORMENTA DEL ARCO IRIS  /nY TRAS LA OBSCURIDAD LA LUZ!  /n¡TRAS LA AMARGURA, LA ALEGRÍA  /nQUE A LOS CREYENTES DA JESÚS...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡ALEGRE CANTO AL ALMA ELEVA,  /nPUES TRAS EL VELO CRISTO ESTA! /n¡SOSTIÉNEME LA FE EN SU NOMBRE  /nY HE DE MIRAR SU AUGUSTA FAZ...!',
            },
            {
                estilo: '',
                texto: '¡TRAS EL INVIERNO, PRIMAVERA;  /nTRAS EL COMBATE RUDO, PAZ...!  /n¡TRAS TRISTE VALLE EXCELSA CUMBRE;  /nTRAS CAUTIVERIO, LIBERTAD...!',
            },
            {
                estilo: '',
                texto: '¡TRAS CUANTO VEMOS DIOS EL PADRE,  /nSU AMOR QUE NUNCA FALTARA...!  /n¡TRAS ESTE MUNDO EL CIELO ADONDE  /nJESÚS NOS HA DE TRASLADAR...!',
            },
        ],
    },
    {
        id: '66',
        pag: '67',
        titulo: '¡OH, MADRE AMOROSA...!',
        contenido: [
            {
                estilo: '',
                texto: '¡OH MADRE AMOROSA, /nA QUIEN ACLAMAREMOS! /n¡A QUIEN PEDIREMOS /nAMPARO MEJOR...!',
            },
            {
                estilo: '',
                texto: '¡TU MANO, SEÑORA,  /nBENÉFICA EXTIENDE!  /n¡MIS RUEGOS ATIENDE  /nY ESCUCHA EL CLAMOR...!  /n¡MIS ATIENDE,  /nY ESCUCHA EL CLAMOR...!',
            },
            {
                estilo: '',
                texto: '¡SI TU NOS AMPARAS,  /n¡OH VIRGEN MARÍA...!  /n¡VEREMOS UN DÍA  /nLA ETERNA MANSIÓN....!',
            },
            {
                estilo: '',
                texto: '¡TU VISTA RISUEÑA  /nALLÍ GOZAREMOS...!  /n¡ALLÍ TE DIREMOS  /nGLORIOSA ORACIÓN...!  /n¡TU VISTA RISUEÑA  /nALLÍ GOZAREMOS...!',
            },
            {
                estilo: '',
                texto: '¡ALLÍ TE DIREMOS /n¡GLORIOSA ORACIÓN, /nGLORIOSA ORACIÓN...! /nGLORIOSA ORACIÓN!',
            },
        ],
    },
    {
        id: '67',
        pag: '68',
        titulo: '¡VENID, VENID A LAS BODAS!',
        contenido: [
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡VENID, VENID A LAS BODAS  /nDE AQUEL CELESTIAL ESPOSO!  /n¡QUE AMANTE, DULCE Y GOZOSO  /nCONVENIDA A LAS ALMAS TODAS!',
            },
            {
                estilo: '',
                texto: '¡HOY VENIMOS CUAL HERMANOS  /nA LA CENA DEL SEÑOR!  /n¡ACERQUÉMONOS, CRISTIANOS,  /nRESPIRANDO TIERNO AMOR...!',
            },
            {
                estilo: '',
                texto: '¡INVOQUEMOS LA PRESENCIA  /nDEL DIVINO REDENTOR!  /n¡QUE NOS CUBRA DE CLEMENCIA  /nY NOS LLENE DE SU AMOR...!',
            },
            {
                estilo: '',
                texto: '¡EN TU MESA PROMETEMOS /nEN TU SANTA LEY VIVIR! /nY QUE FIELES TE SEREMOS /nBUEN JESÚS HASTA EL MORIR...!',
            },
            {
                estilo: '',
                texto: 'PARA LA CENA',
            },
        ],
    },
    {
        id: '68',
        pag: '69',
        titulo: '¡ADIÓS, OH, MADRE!',
        contenido: [
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡ADIÓS, OH, MADRE, TODOS NOS VAMOS,/nY TE DEJAMOS EL CORAZÓN...! /n¡SOLO PEDIMOS, MADRE AMOROSA, /nQUE NO NOS FALTE TU BENDICIÓN...!',
            },
            {
                estilo: '',
                texto: '¡ADIÓS, OH, VIRGEN INCOMPARABLE,/nLOS CORAZONES LATEN POR VOS...!/n¡ADIÓS, OH, MADRE, LA MAS AMABLE,/nUNA Y MIL VECES, ADIÓS, ADIÓS...!',
            },
            {
                estilo: '',
                texto: '¡CASTA PALOMA, BLANCA AZUCENA,/nMÍSTICO ENCANTO DEL SALVADOR..../n¡CUANTA TRISTEZA MI PECHO LLEVA/nAL DARTE, MADRE, MI TIERNO ADIÓS!',
            },
            {
                estilo: '',
                texto: '¡RECIBE, OH, MADRE, LA DESPEDIDA, /nMAS CARIÑOSA DEL CORAZÓN...! /n¡ADIÓS, OH, VIRGEN INCOMPARABLE, /nDAME, SEÑORA, TU BENDICIÓN...!',
            },
            {
                estilo: '',
                texto: '¡TE VAS, PRINCESA DEL UNIVERSO, /nLLEVA CONSIGO MI CORAZÓN...! /n¡ERES, SEÑORA, NUESTRO EMBELESO, /nDEJA A ESTE PUEBLO, TU BENDICIÓN!',
            },
            {
                estilo: '',
                texto: '¡ADIÓS, ESTRELLA DE LA MAÑANA, /nINMACULADA ROSA DE AMOR...! /n¡LA FLOR MAS PURA, LA MAS GALANA, /nDEL PARAÍSO, ADIÓS, ADIÓS...!',
            },
        ],
    },
    {
        id: '69',
        pag: '70',
        titulo: '¡OFRENDA!',
        contenido: [
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡HAY QUE CANTAR, /nA GRAN JEHOVÁ! /n¡QUE ESTA EN SU REINO, /nEN SU TRONO CELESTIAL...!',
            },
            {
                estilo: '',
                texto: '¡OH, GRAN JEHOVÁ! /n¡OH, GRAN SEÑOR! /nRECIBE ESTA OFRENDA /nDE MI CORAZÓN.',
            },
            {
                estilo: '',
                texto: '¡OH, QUE FELIZ ME SIENTO YO, /nAL ELEVAR LA PLEGARIA DE AMOR! /n¡PARA JEHOVÁ/nQUE ES EL PADRE ETERNO!',
            },
            {
                estilo: '',
                texto: 'QUE ESTA EN EL CIELO! ¡PARA JEHOVÁ/n¡SUPREMO HACEDOR /nDEL CIELO Y DE LA TIERRA! /n¡CUANDO YO TE CANTO /nSE ALIVIAN MIS PENAS...!',
            },
            {
                estilo: '',
                texto: '¡OH, GRAN JEHOVÁ! /n¡OH, GRAN SEÑOR! /nRECIBE ESTA OFRENDA /nDE MI CORAZÓN.',
            },
        ],
    },
    {
        id: '70',
        pag: '71',
        titulo: 'HAY UN JARDÍN MEMORABLE Y HERMOSO',
        contenido: [
            {
                estilo: '',
                texto: '¡HAY UN JARDÍN MEMORABLE Y HERMOSO,  /nDONDE FLORES ESPARCEN SU OLOR...!  /n¡DONDE EL MAESTRO PASABA LAS HORAS,  /nEXHALAN TAN DULCE ORACIÓN...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡AL HERMOSO JARDÍN, /nAL JARDÍN DE ORACIÓN...! /nAL HERMOSO JARDÍN DE ORACIÓN /nEL MAESTRO ESTA ALLÍ, /nY LA PUERTA ABRE EL, /nAL HERMOSO JARDÍN DE ORACIÓN...!',
            },
            {
                estilo: '',
                texto: '¡AUN LAS AVES GORGOJEABAN SUS TRINOS,  /nAL COMPAS DE TAN DULCE ORACIÓN...!  /n¡CUANDO EL MAESTRO IMPLORABA A LOS CIELOS  /nPARA EL MUNDO LA GRAN REDENCIÓN…!',
            },
            {
                estilo: '',
                texto: '¡Y EL OLIVO ESPARCE SU AROMA  /nY LA LUNA SU SUAVE FULGOR!  /n¡TODA EL ALMA SE SIENTE SERENA,  /nCON TAN DULCE Y AMABLE QUIETUD!',
            },
            {
                estilo: '',
                texto: '¡Y LA FRAGANCIA DEL OLEO DIVINO,  /nSE ESPARCÍA POR TODO EL JARDÍN!  /n¡CUANDO EL MAESTRO DEL CIELO ERA UNGIDO  /nPORQUE PRONTO YA EL IBA A PARTIR....!',
            },
            {
                estilo: '',
                texto: 'INVITACIÓN A LA ORACIÓN',
            },
        ],
    },
    {
        id: '71',
        pag: '72',
        titulo: '¿QUIEN PUDIERA VOLAR A TU TRONO?',
        contenido: [
            {
                estilo: '',
                texto: '¿QUIEN PUDIERA VOLAR A TU TRONO, /nY TUS BRAZOS DIVINOS DORMIRSE? /n¿QUIEN PUDIERA A TU PECHO ADHERIRSE/nO MIS LABIOS TUS PLANTAS BESAR...?',
            },
            {
                estilo: '',
                texto: '¡MAS NOS LLEVA TU VOZ SUBLIME, /nCUANDO TRISTE EN LA TIERRA ME QUEDO! /n¡AUNQUE AL CIELO SUBIR YO NO PUEDO, /n¡TU TE DIGNAS, OH, PADRE BAJAR...! /n¡TU TE DIGNAS, OH, PADRE BAJAR...!',
            },
            {
                estilo: '',
                texto: '¡DEJA QUE TENGA LA DICHA /nDE PRONUNCIAR, PADRE MÍO, /nTU DULCE NOMBRE: ¡ELÍAS! /nANTE TU REAL MAJESTAD ELÍAS /n¡DANOS ETERNO AMOR, SEÑOR, /nHAZ QUE EN MI ANIMO SE VIERTA! /n¡AUNQUE VENGA AQUÍ LA MUERTE, /nMORIRÉ, MORIRÉ DE TANTO AMOR...!',
            },
        ],
    },
    {
        id: '72',
        pag: '73',
        titulo: '¡MADRE AMOROSA Y DIVINA!',
        contenido: [
            {
                estilo: '',
                texto: '¡MADRE AMOROSA Y DIVINA, /nMADRE DE DIOS...! /n¡INMACULADA Y HERMOSA, /nMAS QUE UNA FLOR...! /n¡SIEMPRE, SIEMPRE TE VENERO, /nMADRE DE DIOS...! /n¡MADRE DE AQUEL NAZARENO /nQUE EN LA CRUZ MURIÓ...!',
            },
            {
                estilo: '',
                texto: '¡UN RAMILLETE DE ROSAS /nES MI ORACIÓN..! /n¡QUE VENGO, MADRE A OFRECERTE /nCON GRANDE AMOR....! /n¡ERES, MARÍA, LA MADRE /nDEL BUEN JESÚS...! /n¡QUE HAS DESLUMBRADO A MIS OJOS /nCON TU LUZ...!',
            },
            {
                estilo: '',
                texto: '¡INMACULADA MARÍA, /nCANTO LLENO DE ALEGRÍA...! /n¡ESTA PLEGARIA DE AMOR /nQUE NACE DEL CORAZÓN...!',
            },
            {
                estilo: '',
                texto: '¡UN RAMILLETE DE ROSAS ES /nMI ORACIÓN...! /n¡QUE VENGO, MADRE A OFRECERTE /nCON GRANDE AMOR…! /n¡ERES, MARÍA, LA MADRE /nDEL BUEN JESÚS...!/n¡QUE HAS DESLUMBRADO A MIS OJOS /nCON TU LUZ...!',
            },
        ],
    },
    {
        id: '73',
        pag: '74',
        titulo: '¡DIOS BENDIGA LAS ALMAS UNIDAS!',
        contenido: [
            {
                estilo: '',
                texto: '¡DIOS BENDIGA LAS ALMAS UNIDAS  /nPOR LOS LAZOS DE AMOR SACRO SANTO!  /n¡Y LOS GUARDE DE TODO QUEBRANTO  /nEN EL MUNDO DE ESPINAS ERIAL...!',
            },
            {
                estilo: '',
                texto: '¡QUE EL HOGAR A FORMARSE COMIENZA  /nCON LA UNIÓN DE ESTOS DOS CORAZONES,  /nGOCE SIEMPRE DE MIL BENDICIONES  /nAL AMPARO DE DIOS DE ISRAEL...!',
            },
            {
                estilo: '',
                texto: '¡QUE EL SEÑOR CON SU DULCE PRESENCIA /nCARIÑOSO ESTAS BODAS PRESIDA, /nY CONDUZCA POR SENDAS DE VIDA /nA LOS QUE, HOY SE JURAN LEALTAD!',
            },
            {
                estilo: '',
                texto: '¡LES RECUERDE QUE NADA EN EL MUNDO  /nES ETERNO, QUE TODO TERMINA!  /n¡Y POR TANTO CON GRACIA DIVINA,  /nCIFRAR DEBEN LA DICHA EN SU DIOS...!',
            },
            {
                estilo: '',
                texto: '¡QUE LOS DOS QUE AL ALTAR SE APROXIMAN  /nA JURARSE FE MUTUAMENTE!  /n¡BUSQUEN SIEMPRE DE DIOS EN LA FUENTE,  /nEL SECRETO DE DICHA INMORTAL...!',
            },
            {
                estilo: '',
                texto: '¡Y SI ACASO DE DUELO Y TRISTEZA  /nSE EMPEÑASEN SUS SENDAS UN DÍA!  /n¡EN JESÚS HALLARAN DULCE GUÍA,  /nQUE OTRA SENDA LES MUESTRE MEJOR...!',
            },
            {
                estilo: '',
                texto: 'MATRIMONIO',
            },
        ],
    },
    {
        id: '74',
        pag: '75',
        titulo: 'SI EN VERDAD QUIERES SER',
        contenido: [
            {
                estilo: '',
                texto: '¡SI EN VERDAD QUIERES SER  /nEL LABRIEGO DE DIOS...!  /n¡SEMBRARAS, SEMBRARAS CON AMOR...! /n¡SI EL SEÑOR TE DONO COM PRECIOSA HEREDAD  /n¡A TU DIOS SEGUIRÁS CON FERVOR...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡MORARAS CON JESÚS Y FELIZ TU SERÁS, /nPALPARAS SU GRANDEZA Y SU AMOR...! /n¡EL DICHOSO SERÁS, /nCON TU DIOS Y SEÑOR...! /n¡PORQUE FUISTE LABRIEGO /nDE DIOS, EN VERDAD...!',
            },
            {
                estilo: '',
                texto: '¡SI EN VERDAD QUIERES /nSER EL SOLDADO DE DIOS...! /n¡LUCHARAS, LUCHARAS CON VALOR...! /n¡CON TU ESCUDO DE FE, /nY TUS ARMAS DE LUZ.../nCUAL SOLDADO FUERTE DE JESÚS!',
            },
            {
                estilo: '',
                texto: '¡SI EN VERDAD QUIERES SER, /nEL BUEN SIERVO DE DIOS... /nCUMPLIRÁS, CUMPLIRÁS CON TEMOR...! /n¡Y SI QUIERES CUMPLIR/nCON AFÁN TU MISIÓN, /nDEJA AL MUNDO QUE NADA TE DA!',
            },
        ],
    },
    {
        id: '75',
        pag: '76',
        titulo: '¡CORAZÓN DE JESÚS!',
        contenido: [
            {
                estilo: '',
                texto: '¡AL DIVINO CORAZÓN DE JESÚS, /nELEVEMOS UN HIMNO DE AMOR! /n¡CON GRAN GOZO CANTEMOS SU LOOR, /nOLVIDEMOS LA PENA Y EL DOLOR...! /n¡Y ENSALCEMOS AL GRAN REDENTOR!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡VEN, GRAN CONSUELO DE NUESTRO LLANTO, /nCORAZÓN SANTO, FUENTE DE AMOR...! /n¡NUESTRA ALMA SIENTE UN GOZO SIN FIN /nPORQUE SABE QUE TU ERES AMOR...!',
            },
            {
                estilo: '',
                texto: '¡EL PURÍSIMO AMOR QUE DERRAMA /nESE DULCE Y SANTO CORAZÓN...! /n¡PARA EL MUNDO ES LA LUZ REDENTORA; /nDEL DIVINO Y SACRO CORAZÓN...! /n¡OH, GLORIA ETERNA AL BUEN SALVADOR!',
            },
            {
                estilo: '',
                texto: '¡Y FELIZ EL MORTAL QUE TE ALABA, /nPUES LE COLMAS DE AMOR Y DE LUZ...! /n¡LOOR A TI, CORAZÓN DE JESÚS, /nISRAEL CANTARA POR DOQUIER...! /n¡OH, GLORIA ETERNA AL GRAN REDENTOR!',
            },
        ],
    },
    {
        id: '76',
        pag: '77',
        titulo: '¿QUE LE DARÁS A CRISTO?',
        contenido: [
            {
                estilo: '',
                texto: '¿QUE LE DARÁS A CRISTO /nSI TIENES GRAN CAUDAL!  /n¡TODA TU PLATA U ORO, NO LE PODRÁS DAR MÁS...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¿QUE LE DARÁS A CRISTO?  /nEL TODO DIO POR TI...  /n¡DALE TU VIDA ENTERA  /nY ASÍ SERÁS FELIZ...!',
            },
            {
                estilo: '',
                texto: '¿QUE LE DARÁS A CRISTO?  /nSINO TODO TU SER...  /n¡SI NADA TE RESERVAS  /nEL MAL PODRÁS VENCER!',
            },
            {
                estilo: '',
                texto: '¡SI EL MUNDO ENTERO GIME /nBAJO EL MORTAL DOLOR! /n¿PORQUE NO LLEVAR PRONTO /nLAS NUEVAS DE SU AMOR...?',
            },
            {
                estilo: '',
                texto: '¿SI QUIERES AGRADARLE /nNO DES MUNDANO DON; /nTODO TU SER OFRECE /nEN FIEL CONSAGRACIÓN!',
            },
        ],
    },
    {
        id: '77',
        pag: '78',
        titulo: 'DIOS MÍO',
        contenido: [
            {
                estilo: '',
                texto: '¡DIOS MÍO, DIOS MÍO ACÉRCATE A MI, /nPALOMA SEDIENTA QUE VUELA HACIA TI...! ',
            },
            {
                estilo: '',
                texto: '¡A TI, ¡OH!... DIOS MÍO, PERDÓN PARA MÍ, /nDICHOSOS LOS SERES QUE LLEGAN A TI...!/n¡ARRULLOS DE AMORES DEL ALMA SALID, /nSUSPIROS DE ALIENTO AL CIELO SUBID...! /n¡VIVIR EN TUS LEYES, AL MUNDO ES MORIR, /nMORIR PARA EL MUNDO, ES VIVIR PARA TI...!',
            },
            {
                estilo: '',
                texto: '¡HOY DÍA, DIOS MÍO, TE DIGNAS ABRIR, /nLA FUENTE DICHOSA DE ETERNO VIVIR!/n¡A TI, ¡OH!.. DIOS MÍO, PUES VIENES A MI, /nDICHOSOS LOS SERES QUE LLEGAN A TI...!',
            },
        ],
    },
    {
        id: '78',
        pag: '79',
        titulo: '¡VIRGEN SAGRADA Y BENDITA!',
        contenido: [
            {
                estilo: '',
                texto: '¡VIRGEN SAGRADA Y BENDITA, /nMADRE DEL MAS PURO AMOR...!  /nDE ESTE TU PUEBLO QUE IMPLORA  /nESCUCHA LA TRISTE VOZ!',
            },
            {
                estilo: '',
                texto: '¡TU PUEDES SECAR EL LLANTO,  /nDEL QUE SE POSTRA A TUS PIES!  /n¡MIRA MI ANGUSTIA Y MI ANHELO,  /nMADRE QUERIDA, PERDÓNAME...!',
            },
            {
                estilo: '',
                texto: '¡ANTE TUS PLANTAS UN DÍA,  /nPUDE LLORAR MI DOLOR  /n¡MADRE, TU FUISTE ELEGIDA, /nPARA EL AMPARO Y PERDÓN...!',
            },
            {
                estilo: '',
                texto: '¡QUE NO TE OLVIDAS DEL TRISTE,  /nQUE VA LLORANDO A TUS PIES!  /n¡MIRA MI ANGUSTIA Y MI ANHELO  /nMADRE QUERIDA, PERDÓNAME...!',
            },
            {
                estilo: '',
                texto: '¡NO DESOIGAS MI SUPLICA Y LLANTO  /nCONSUELA MI PENA, MÍA MARGO DOLOR!  /n¡YO TE RUEGO LE PIDAS A TU HIJO,  /nQUE PRONTO A SUS PLANTAS YO PIDA PERDÓN',
            },
            {
                estilo: '',
                texto: '¡YO TE OFREZCO LAS FLORES DEL VALLE /nQUE DÍA TRAS DÍA YO VENDRÉ A REGAR! /n¡YO TE OFREZCO, VIRGEN SAGRADA; /nDENTRO DE MI ALMA, FORMARTE UN ALTAR!',
            },
        ],
    },
    {
        id: '79',
        pag: '80',
        titulo: '¡OH, SEÑOR CLEMENTE Y SANTO!',
        contenido: [
            {
                estilo: '',
                texto: '¡OH! SEÑOR, CLEMENTE Y SANTO /nQUE EN EL CIELO DONDE MORAS! /n¡DE JESÚS A TODAS HORAS, /nACOGES LA INTERSECCIÓN!',
            },
            {
                estilo: '',
                texto: '¡TU LAS LAGRIMAS RECIBES /nDEL PECADOR HUMILLADO! /n¡CIERTO ES, QUE EN TI CONFIAMOS /nESPERANDO TU PERDÓN...!',
            },
            {
                estilo: '',
                texto: '¡VUELVE TUS AMANTES OJOS /nY TUS BRAZOS PATERNALES! /n¡A TUS HIJOS CUYOS MALES /nPUEDES, PADRE SOCORRER!',
            },
            {
                estilo: '',
                texto: '¡Y CON TU GRACIA DIVINA, /nEL CAMINO SEGUIREMOS! /n¡CIERTOS DE QUE AS! PODREMOS, /nSUS ESCOLLOS PRECAVER...!',
            },
            {
                estilo: '',
                texto: '¡SOL DE LA ESPERANZA TIERNA /nOH! MADRE MÍA /n¡OYE LOS LAMENTOS, /nDULCE, ¡OH! MADRE MÍA!',
            },
            {
                estilo: '',
                texto: '¡OYE LOS LAMENTOS, /nOYE MI ORACIÓN...! /n¡OH! REINA DEL CIELO,/nDANOS, DANOS TU PERDÓN!',
            },
        ],
    },
    {
        id: '80',
        pag: '81',
        titulo: '¡PADRE NUESTRO!',
        contenido: [
            {
                estilo: '',
                texto: '¡PADRE NUESTRO QUE ESTAS EN LOS CIELOS, /nCIRCUNDADO DE GLORIA INMORTAL...! /n¡ESPERANZA DEL ALMA QUE ELEVA /nA MI PADRE, A SU GLORIA, UN ALTAR...!',
            },
            {
                estilo: '',
                texto: '¡SANTIFICA A LA TIERRA TU NOMBRE, /nVENGA A NOS, TU REINADO DE PAZ...! /n¡Y QUE SEAN CUMPLIDAS TUS LEYES /nEN EL CIELO, EN LA TIERRA; EN EL MAR!',
            },
            {
                estilo: '',
                texto: '¡DEJA, DEJA QUE EN NUESTROS HOGARES NUNCA  /nFALTE, ¡OH! DIOS DE BONDAD! ¡UNA CHISPA DE LUZ  /nPARA EL ALMA, PARA EL CUERPO UN PEDAZO DE  /nPAN...!',
            },
            {
                estilo: '',
                texto: '¡Y SI ACASO TU LEY INMUTABLE /nA QUIEN PUEDE IGNORANTE FALTAR! /n¡PADRE NUESTRO, PERDONA A TUS HIJOS /nQUE TE OFRECEN TAMBIÉN PERDONAR...! /n¡PERDONAD, PERDONAD...!',
            },
        ],
    },
    {
        id: '81',
        pag: '82',
        titulo: 'HERMOSA AZUCENA',
        contenido: [
            {
                estilo: '',
                texto: '¡HERMOSA AZUCENA, /nNACIDA EN EL VALLE! /n¡TE TRAEMOS, ¡OH! MADRE, /nEN PRUEBA DE AMOR!',
            },
            {
                estilo: '',
                texto: 'CLAVELES Y ROSAS, /nJAZMÍN Y AMARANTO, /nSUS SUAVES AROMAS /nA TI SUBIRÁN...!',
            },
            {
                estilo: '',
                texto: '¡LAS FLORES DEL CAMPO /nLAS SECA EL ESTILO...! /n¡LAS FLORES DE MI ALMA /nJAMÁS MORIRÁN...!',
            },
            {
                estilo: '',
                texto: '¡Y RIEGAN SUS HOJAS /nCELESTE ROCIÓ...! /n¡A TI CONSAGRADAS /n¡OH! VIRGEN, ESTÁN, /n¡OH! VIRGEN, ESTÁN...!',
            },
        ],
    },
    {
        id: '82',
        pag: '83',
        titulo: '¡PECADOR, VEN AL DULCE JESÚS!',
        contenido: [
            {
                estilo: '',
                texto: '¡PECADOR VEN AL DULCE JESÚS /nY FELIZ PARA SIEMPRE SERÁS! /n¡SI EN VERDAD LE QUISIERAS TENER /nAL DIVINO SEÑOR HALLARAS...!',
            },
            {
                estilo: '',
                texto: '¡VEN A EL, PECADOR! /n¡VEN A EL, PECADOR!/n¡QUE TE ESPERA TU BUEN SALVADOR!',
            },
            {
                estilo: '',
                texto: '¡SI CUAL HIJO QUE NECIO PECO /nVAS BUSCANDO A SU PIES COMPASIÓN’ /n¡TIERNO PADRE EN JESÚS HALLARAS /nY TENDRÁS EN SUS PADRES PERDÓN...’',
            },
            {
                estilo: '',
                texto: 'OVEJUELA QUE HUYO DEL REDIL, /nHE AQUÍ TU BENIGNO SEÑOR! /n¡EN LOS HOMBROS LLEVADA SERÁS /nDE TAN DULCE Y AMANTE PASTOR!',
            },
            {
                estilo: '',
                texto: '¡SI DE ENFERMO TE SIENTES MORIR /nEL SERÁ TU DIVINO DOCTOR! /n¡Y SU SANGRE DIVINA HALLARAS, /nMEDICINA QUE CURE TU MAL...!',
            },
        ],
    },
    {
        id: '83',
        pag: '84',
        titulo: '¡MADRE DEL VERBO DIVINO!',
        contenido: [
            {
                estilo: '',
                texto: '¡MADRE DEL VERBO DIVINO, /nARCA CIERTA DE LA ALIANZA, /n¡IRIS DE PAZ Y ESPERANZA, /nTORRE BENDITA DE ISRAEL...!',
            },
            {
                estilo: '',
                texto: '¡SIN TU AMPARO, TU HIJOS LLORAN /nCUAL OVEJAS SOLITARIAS...! /n¡LLEVA, OH, VIRGEN MI PLEGARIA /nHACIA EL TRONO, HACIA EL TRONO /nDEL SEÑOR...!',
            },
            {
                estilo: '',
                texto: '¡SIN TU AMPARO, TUS HIJOS LLORAN /nCUAL OVEJAS SOLITARIAS...! /n¡LLEVA, OH, VIRGEN MI PLEGARIA, /nHACIA EL TRONO, HACIA EL TRONO /nDEL SEÑOR…!',
            },
        ],
    },
    {
        id: '84',
        pag: '85',
        titulo: '¡HIMNO NACIONAL ESPIRITUAL!',
        contenido: [
            {
                estilo: '',
                texto: '¡ISRAELITAS DEL PUEBLO MARIANO, /nENTONEMOS UN HIMNO AL SEÑOR...! /n¡OFRECIENDO CUMPLIR CON SUS LEYES /nY SEGUIR EL CAMINO DE LUZ.../n! OFRECIENDO CUMPLIR CON SUS LEYES /nY SEGUIR EL CAMINO DE LUZ...!',
            },
            {
                estilo: '',
                texto: 'I',
            },
            {
                estilo: '',
                texto: '¡PADRE, PADRE, TUS HIJOS JURAN TRABAJAR EN TU /nOBRA BENDITA...! ¡RESPETAR Y CUMPLIR CON TUS /nLEYES, Y SEGUIR EL CAMINO DEL BIEN...! ¡CON TU /nAYUDA, OH, PADRE BENDITO, CUMPLIREMOS LO QUE /nHOY TE OFRECEMOS ¡SER POR SIEMPRE TUS FIELES /nSOLDADOS QUE DEFIENDAN TU CAUSA INMORTAL...! /n¡QUE DEFIENDAN TU CAUSA INMORTAL...!',
            },
            {
                estilo: '',
                texto: 'II',
            },
            {
                estilo: '',
                texto: '¡GLORIA, GLORIA AL SEÑOR DE CLEMENCIA QUE NOS /nBRINDA SU AMOR PATERNAL! ¡GLORIA, GLORIA /nENTONEMOS MIL VECES, POR SU AYUDA Y SU SANTA /nBONDAD! ¡SALUDAMOS AL SOL DE JUSTICIA QUE SUS /nRAYOS DIVINOS NOS DA...! ¡SALUDAMOS AL QUINCE /nDE SEPTIEMBRE DÍA BENDITO DE GLORIA Y DE PAZ!',
            },
        ],
    },
    {
        id: '85',
        pag: '86',
        titulo: 'A JESÚS ELEVEMOS ESTE CORO',
        contenido: [
            {
                estilo: '',
                texto: '¡A JESÚS ELEVEMOS ESTE CORO /nALABEMOS SU GRANDEZA Y SU AMOR! /n¡A JESÚS QUE DESCIENDE DE SU TRONO, /nNUESTRO REY, NUESTRO DIOS Y SEÑOR!',
            },
            {
                estilo: '',
                texto: '¡GLORIA A TI, OH, DIVINO RABÍ, /nGLORIA A TI, OH, REDENTOR...! /n¡PARA TI ESTE CANTAR MAESTRO, /nCANTEMOS SIEMPRE A TI SEÑOR...! /n¡OH, JESÚS TIERNO PADRE AMOROSO, /nDEJA QUE SIEMPRE CANTEMOS TU LOOR! /n¡PORQUE ERES AMANTE Y BONDADOSO, /nDULCE BIEN CELESTIAL, DULCE AMOR!',
            },
            {
                estilo: '',
                texto: '¡A JESÚS ENTONEMOS ESTE CANTO, /nENSALCEMOS SU TERNURA Y CARIDAD! /n¡VIENE EL A CUBRIRNOS CON SU MANTO /nSIN MIRAR NUESTRA INIQUIDAD...!',
            },
        ],
    },
    {
        id: '86',
        pag: '87',
        titulo: '¡YO GUIARE, YO GUIARE!',
        contenido: [
            {
                estilo: '',
                texto: '¡YO GUIARE AL PEREGRINO EXTRAVIADO, /nBONDADOSO, HASTA EL PIE DE LA CRUZ! /n¡YO DIRÉ AL CORAZÓN ANGUSTIADO:/nHALLARAS TU CONSUELO EN JESÚS...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡YO GUIARE, YO GUIARE, /nAL SEDIENTO DE VIDA Y DE LUZ! /n¡YO GUIARE, YO GUIARE, YO GUIARE /nAL PERDIDO, A LOS PIES DE JESÚS!',
            },
            {
                estilo: '',
                texto: '¡YO DIRÉ AL QUE BUSCARA LA CALMA /nQUE ME ALLEGUE AL AMANTE JESÚS! /n¡YO DIRÉ CON PLACER A AQUELLA ALMA, /nQUE LE INUNDE SUS ONDAS DE LUZ...!',
            },
            {
                estilo: '',
                texto: '¡AL QUE VAGUE BUSCANDO UNA FUENTE, /nDO APAGAR DE SU SED EL ARDOR...! /n¡LO GUIARE CON AMOR DILIGENTE /nA JESÚS LA GRAN FUENTE DE AMOR...!',
            },
        ],
    },
    {
        id: '87',
        pag: '88',
        titulo: '¡VEN, OH TIERNO Y AMANTE JESÚS!',
        contenido: [
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡VEN, OH TIERNO Y AMANTE JESÚS, /nY CONSUELA A NUESTRO TRISTE CORAZÓN! /n¡VEN, DULCÍSIMO PADRE CELESTIAL /nVEN, SEÑOR...’',
            },
            {
                estilo: '',
                texto: '¡Y DERRAMA TAMBIÉN TU BENDICIÓN! /n¡VEN DULCÍSIMO PADRE CELESTIAL, /nVEN, SEÑOR...!/n¡Y DERRAMA TAMBIÉN TU BENDICIÓN',
            },
            {
                estilo: '',
                texto: 'ESTROFA',
            },
            {
                estilo: '',
                texto: '¡SI NUESTRA ALMA AL CIELO SE ELEVA /nEXHALANDO SUSPIROS DE AMOR! /n¡SIEMPRE, SIEMPRE, OH, DIVINO SEÑOR, /nTU CARICIA Y TU AMOR LE ENTREGARAS!',
            },
        ],
    },
    {
        id: '88',
        pag: '89',
        titulo: '¡CUANDO DE AFANES YA LIBRE ESTE!',
        contenido: [
            {
                estilo: '',
                texto: '¡CUANDO DE AFANES YA LIBRE ESTE YO, /nLLENO DE GOZO QUE ALIENTA LA FE! /n¡CERCA DE CRISTO QUE A MI ME SALVO, /nGLORIA ETERNA CON EL GOZARE...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡GLORIA, SERÁ, SI PARA MI, /nSI, PARA MI, SI, PARA MI...!/n¡EL CONTEMPLAR CON SU GLORIA A JESÚS /nGLORIA SERÁ, GLORIA SERÁ PARA MI...! /n¡GLORIA SERÁ, GLORIA SERÁ PARA MI...!',
            },
            {
                estilo: '',
                texto: '¡CUANDO MEDIANTE SU GRACIA SIN PAR /nEN SU PRESENCIA ME PUEDA YO VER! /n¡JUNTO A TU TRONO OCUPANDO UN LUGAR /nGLORIA ETERNA, CON EL GOZARE...!',
            },
            {
                estilo: '',
                texto: '¡SERES QUERIDOS ME AGUARDAN ALLÍ, /nGOZO INEFABLE CON ELLO TENDRÉ! /n¡POR EL CORDERO INMOLADO POR MI /nGLORIA ETERNA, CON EL GOZARE...!',
            },
            {
                estilo: '',
                texto: '¡SERES QUERIDOS ME AGUARDAN ALLÍ, /nGOZO INEFABLE CON ELLOS TENDRÉ! /n¡POR EL CORDERO INMOLADO POR MI /nGLORIA ETERNA CON EL GOZARE...!',
            },
        ],
    },
    {
        id: '89',
        pag: '90',
        titulo: '¡GLORIA AL REY DE REYES!',
        contenido: [
            {
                estilo: '',
                texto: '¡GLORIA AL INMORTAL INVISIBLE REY, /nGLORIA AL SOBERANO DIOS Y SEÑOR! /n¡TRAED REGIAS CORONAS A EMMANUEL,  /nRINDAN LOS ÁNGELES, UN HOMENAJE  /nHOY AL SALVADOR...!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'DIGNO, DIGNO ES EL CORDERO CELESTIAL, /nCIELO Y TIERRA, TODOS TRIBUTEN LOOR! /nCORONADLE CON SEÑORÍO UNIVERSAL, /nGLORIA AL INVICTO CORDERO, /nA CRISTO REDENTOR...!',
            },
            {
                estilo: '',
                texto: 'ADMIRAD AL QUE ES PRÍNCIPE Y GRAN SEÑOR /nSEGUID SU HUELLA DE REFULGENTE LUZ! /n¡VIENE A SALVARNOS POR SU GRANDE AMOR, /nTODOS CANTÉMOSLE, CON TODA EL ALMA /nHOY AL BUEN JESÚS...!',
            },
        ],
    },
    {
        id: '90',
        pag: '91',
        titulo: '¡QUE MI VIDA ENTERA ESTE...!',
        contenido: [
            {
                estilo: '',
                texto: '¡QUE MI VIDA ENTERA ESTE,/nCONSAGRADA A TI, SEÑOR! /n¡QUE MI ALMA PUEDA GUIAR /nEL IMPULSO DE TU AMOR!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡LÁVEME LA SANGRE DEL SEÑOR. /nLÍMPIEME DE TODA INIQUIDAD! /n¡A EL ME CONSAGRO PARA SER FELIZ /nSUYO POR LA ETERNIDAD!',
            },
            {
                estilo: '',
                texto: '¡QUE MIS PIES TAN SOLO EN POS /nDE LO SANTO PUEDAN IR! /n¡Y QUE A TI, SEÑOR, MI VOZ /nSE COMPLAZCA EN BENDECIR!',
            },
            {
                estilo: '',
                texto: '¡QUE MIS LABIOS AL HABLAR, /nHABLEN SOLO DE SU AMOR/n¡SIEMPRE PUEDAN ELEVAR /nALABANZAS AL SEÑOR...!',
            },
            {
                estilo: '',
                texto: '¡TOMA, OH, DIOS, MI VOLUNTAD/nY HAZLA TUYA NADA MÁS!/n¡TOMA, SI, MI CORAZÓN/nY UN SANTUARIO EN EL TENDRÁS!',
            },
        ],
    },
    {
        id: '91',
        pag: '92',
        titulo: '¡VEN, SEÑOR!',
        contenido: [
            {
                estilo: '',
                texto: '¡PADRE, HIJO Y ESPÍRITU SANTO, /nTRES PERSONAS Y UN SOLO PODER! /n¡TE ROGAMOS, OH, DIOS DE LOS CIELOS, /nQUE DESCIENDAS Y TU AMOR NOS DES..!',
            },
            {
                estilo: '',
                texto: '¡PADRE, HIJO Y ESPÍRITU SANTO, /nYA DESCIENDE, OH, DIOS DE BONDAD! /n¡LA DULZURA DE TU VOZ DIVINA, /nBUEN PASTOR, QUEREMOS ESCUCHAR!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡TE ROGAMOS, SEÑOR DESCIENDAS, /nSUPLICAMOS, OH, DIOS LA CLEMENCIA! /n¡PARA QUE AQUELLOS QUE ESTÁN SIN TU LUZ, /nVEN SEÑOR, VEN DÁSELA TU!',
            },
            {
                estilo: '',
                texto: '¡PADRE, HIJO Y ESPÍRITU SANTO, /nYA DESCIENDE, OH, DIOS DE BONDAD!/n¡LA DULZURA DE TU VOS DIVINA,’ /nBUEN JESÚS, QUEREMOS ESCUCHAR!',
            },
            {
                estilo: '',
                texto: 'AL CORO',
            },
            {
                estilo: '',
                texto: '¡PADRE, HIJO Y ESPÍRITU SANTO /nYA DESCIENDE, OH DIOS DE BONDAD! /n¡LA DULZURA DE TU VOZ DIVINA, /n¡GRAN SEÑOR! ¡QUEREMOS ESCUCHAR!',
            },
        ],
    },
    {
        id: '92',
        pag: '93',
        titulo: 'TRISAGIO',
        contenido: [
            {
                estilo: '',
                texto: '¡ISRAEL ENTONA /nCANTOS SIN IGUAL! /n¡SUS VOCES RESUENAN /nEN LA INMENSIDAD!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡OH, BENDITOS TRINOS /nPOR DOQUIER SE OIRÁN! /n¡CANTOS DE ALABANZA /nA LA TRINIDAD!',
            },
            {
                estilo: '',
                texto: '¡CON TUS TOSCAS LIRAS /nSALMOS ENTONAD! /n¡A LA ETERNA GLORIA /nDE LA TRINIDAD!',
            },
            {
                estilo: '',
                texto: '¡OH, TIERNAS /nCRIATURAS, /nCANTEN SIN CESAR! /n¡Y MOSTRAD AL HOMBRE /nCUAL ES LA VERDAD!',
            },
            {
                estilo: '',
                texto: '¡FUENTE DE LA GRACIA /nPULSAD TU LAÚD!/n¡Y ENSEÑAD AL MUNDO /nUN CANTO DE LUZ!',
            },
            {
                estilo: '',
                texto: '¡CIELOS Y ESTRELLAS/nENSALZAD A DIOS! /n¡EN EL ORBE ENTERO /nSE ESCUCHA SU VOZ!',
            },
            {
                estilo: '',
                texto: '¡SOL Y LUNA, JUNTOS /nMUESTRAN HUMILDAD! /n¡AL SANTO TRISAGIO /nDE LA TRINIDAD!',
            },
        ],
    },
    {
        id: '93',
        pag: '94',
        titulo: 'DIOS TE SALVE',
        contenido: [
            {
                estilo: '',
                texto: '¡DIOS TE SALVE REINA HERMOSA /nHIJA DEL PADRE ELEGIDA! /n¡ENTRE FLORES ESCOGIDA /nCOMO LA PRIMERA ROSA!',
            },
            {
                estilo: '',
                texto: '¡SALVE, O VIRGEN CANDOROSA /nLLENA DE GRACIA Y DE AMOR! /n¡RUEGA POR NOS AMOROSA, /nRUEGA POR NOS A NUESTRO SEÑOR! /n¡RUEGA, RUEGA, POR NOSOTROS /nHACIA EL TRONO DEL SEÑOR!',
            },
        ],
    },
    {
        id: '94',
        pag: '95',
        titulo: 'ME HIRIÓ EL PECADO',
        contenido: [
            {
                estilo: '',
                texto: 'ME HIRIÓ EL PECADO, FUI A JESÚS /nMOSTRELE MI DOLOR, /nPERDIDO, ERRANTE, VI SU LUZ, /nBENDIJOME EN SU AMOR.',
            },
            {
                estilo: '',
                texto: 'EN LA CRUZ, EN LA CRUZ, /nYO PRIMERO VI LA LUZ, /nY LAS MANCHAS DE MI ALMA YO LAVE, /nFUE ALLÍ POR LA FE QUE VI A JESÚS /nY FELIZ PARA SIEMPRE SERÉ',
            },
            {
                estilo: '',
                texto: 'EN UNA CRUZ MI BUEN JESÚS /nSU SANGRE DERRAMO /nPOR ESTE POBRE PECADOR /nA QUIEN ASÍ, SALVO.',
            },
            {
                estilo: '',
                texto: '¡VENCIÓ A LA MUERTE, CON PODER, /nY EL PADRE LO EXALTO, /nCONFIAR EN EL ES MI PLACER /nMORIR NO TEMO YO.',
            },
            {
                estilo: '',
                texto: 'AUNQUE EL SE FUE, CONMIGO ESTA /nEL GRAN CONSOLADOR, /nPOR EL ENTRADA TENGO YA /nAL REINO DEL SEÑOR.',
            },
            {
                estilo: '',
                texto: 'VIVIR EN CRISTO TRAE LA PAZ /nCON EL HABITARE, /nYO SUYO SOY Y DE HOY EN MAS, /nA NADIE TEMERÉ.',
            },
        ],
    },
    {
        id: '95',
        pag: '96',
        titulo: 'PADRE ETERNO',
        contenido: [
            {
                estilo: '',
                texto: '¡TIERNOS HIJOS DE ISRAEL HERMOSO  /nDEL PLANCARTE, PRECIOSA HEREDAD...!  /n¡DULCES HIMNOS HENCHIDOS DEL GOZO,  /nAL SEÑOR DE LOS CIELOS CANTAD, /nAL SEÑOR DE LOS CIELOS CANTAD!',
            },
            {
                estilo: '',
                texto: 'DIOS ETERNO, TUS HIJOS AMANTES /nEDUCÁNDOSE EN PUEBLOS LEJANOS /nA TI ELEVAN FERVIENTES SUS MANOS /nA LA SOMBRA DEL PADRE REDENTOR',
            },
            {
                estilo: '',
                texto: 'SUS PLEGARIAS, ACOGE BENIGNO, /nEN SU RUEGOS INCLINAN SU FRENTE /nY DE GRACIA COPIOSO TORRENTE /nEN SUS ALMAS DERRAMA, OH SEÑOR.',
            },
            {
                estilo: '',
                texto: 'DE VIRTUDES Y DICHAS CUBIERTOS /nVOLVEREMOS AL MUNDO TEMIBLE, SI, /nPUES TU DIESTRA, SEÑOR, INVENCIBLE /nNOS HARÁ SOBRE EL MUNDO TRIUNFAR. /nSI, TU DIESTRA, SEÑOR, INVENCIBLE /nNOS HARÁ SOBRE EL MUNDO TRIUNFAR.',
            },
        ],
    },
    {
        id: '96',
        pag: '97',
        titulo: 'NO TE DE TEMOR',
        contenido: [
            {
                estilo: '',
                texto: '¡NO TE DE TEMOR, HABLAR CON CRISTO, /nHASTA QUE BRILLE EN TI LA LUZ!  /n¡SIEMPRE A QUIEN REDIMIÓ,  /nCONFIESA TODO ¡TODO DEBES A JESÚS!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡NO TE DE TEMOR...! ¡NO TE DE TEMOR!  /n¡NUNCA...! ¡NUNCA!... ¡NUNCA!.  /n¡ES TU AMANTE SALVADOR SALVADOR...! /n¡NO TE DE TEMOR...!  /n¡PUES NUNCA, TE DE TEMOR..!',
            },
            {
                estilo: '',
                texto: '¡NO TE DE TEMOR, HACER POR CRISTO: /nCUANDO DE TU PARTE ESTE!  /n¡OBRAR CON AMOR, CON FE Y CONSTANCIA, /nTUS TRABAJOS PREMIARÁ’',
            },
            {
                estilo: '',
                texto: '¡NO TE DE TEMOR, SUFRIR POR CRISTO  /nLOS REPROCHES O EL DOLOR!  /n¡SUFRE CON AMOR, TUS PRUEBAS TODAS,  /nCUAL SUFRIÓ TU SALVADOR!',
            },
            {
                estilo: '',
                texto: '¡NO TE DE TEMOR, VIVIR POR CRISTO,  /nESA VIDA QUE TE DA...! /n¡SI EN TODO TU AFÁN EN EL CONFIARAS;  /nEL, CON BIEN TE HABRÁ DE GUIAR!',
            },
            {
                estilo: '',
                texto: '¡NO TE DE TEMOR, VIVIR POR CRISTO! ',
            },
            {
                estilo: '',
                texto: '¡VIDA DE VERDAD...! ¡V VIDA ES EL! DIOS TE LLEVARA CON SU  /nTERNURA... ¡A SU CÉLICA VERGEL!',
            },
        ],
    },
    {
        id: '97',
        pag: '98',
        titulo: 'DE LA NOCHE EN EL SILENCIO',
        contenido: [
            {
                estilo: '',
                texto: '¡DE LA NOCHE EN EL SILENCIO,/nDE LA RUSTICA BELÉN! /nNACE UN NIÑO EN UN PESEBRE... /n¡DULCES ÁNGELES LO VEN!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡CANTAN GLORIA, GLORIA! /nEN LA TIERRA... ¡GOZO Y PAZ! /n¡Y LOS MÍSEROS MORTALES, /nTENGAN BUENA VOLUNTAD!',
            },
            {
                estilo: '',
                texto: '¡LOS PASTORES Y LOS MAGOS, /nSE ENCAMINAN AL PORTAL! /nY LOS REYES SE POSTRARON... /n¡MIRRA, INCIENSO Y ORO DAN!',
            },
            {
                estilo: '',
                texto: '¡AUNQUE POBRE ESTA SU CUNA, /nSU ROPAJE; HUMILDE ES! /nLE PROCLAMAN CONMOVIDOS.../nDE LOS POBRES...DUEÑO Y REY!',
            },
        ],
    },
    {
        id: '98',
        pag: '99',
        titulo: 'LOS NIÑOS SON DE CRISTO',
        contenido: [
            {
                estilo: '',
                texto: 'LOS NIÑOS SON DE CRISTO, /nEL ES SU SALVADOR, /nSON JOYAS MUY PRECIOSAS /nCOMPROLAS CON SU AMOR.',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'JOYAS, JOYAS, JOYAS /nSON DEL SALVADOR /nESTÁN EN ESTA SU TIERRA /nCUAL LUZ Y DULCE AMOR.',
            },
            {
                estilo: '',
                texto: 'LOS NIÑOS SON TESOROS, /nPUES QUE EL CIELO SON /nLUZ REFULGENTE ESPARCEN /nEN HORAS DE AFLICCIÓN.',
            },
            {
                estilo: '',
                texto: 'LOS NIÑOS SON ESTRELLAS /nDE GRATA CLARIDAD /nQUIERE JESÚS QUE ANUNCIEN /nAL MUNDO SU VERDAD',
            },
            {
                estilo: '',
                texto: 'LOS NIÑOS SON DE CRISTO, /nPOR ELLOS EL VENDRÁ /nY CON DIOS, PARA SIEMPRE /nDICHOSOS VIVIRÁN.',
            },
        ],
    },
    {
        id: '99',
        pag: '100',
        titulo: '“ALELUYA, ALELUYA; OH! DIOS”',
        contenido: [
            {
                estilo: '',
                texto: 'POR LA MAÑANA MUY TEMPRANITO/nCUANDO APENAS SE VE BRILLAR/nLA LUZ PRIMERA LOS PAJARITOS/nTODOS SE PONEN A CANTAR.',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'LUEGO APARECE ALLÁ EN EL ORIENTE/nEL PRIMER RAYITO DE SOL/nLUEGO SE ESPARCE POR EL AMBIENTE/nPOR LA BONDAD DE NUESTRO DIOS.',
            },
            {
                estilo: '',
                texto: 'ES LA HORA DE LA COMUNIÓN/nCON EL SEÑOR EL GRAN CREADOR/nNOS DEBEMOS ELEVAR A SU MANSIÓN/nCON GRAN FERVOR,/nDANDO GRACIAS POR SU AMOR/nCOMO HACE TODA LA CREACIÓN/nPOR DEJARNOS UN DÍA MÁS/nVOLVER A VER SALIR EL SOL.',
            },
            {
                estilo: '',
                texto: 'QUE MOMENTO MÁS HERMOSO/nCUANTO GOZO EN CADA SER/nTODO SE MUESTRA DICHOSO/nANTE DIOS DE GRAN PODER,/nLOS CAMPOS VERDE ESMERALDA/nLA MONTAÑA EL CIELO AZUL/nTODO SE VISTE DE GALA/nPARA RECIBIR LA LUZ.',
            },
            {
                estilo: '',
                texto: 'LAS AVES CON DULCE AFÁN/nENTONAN TODAS SU CANTAR/nY EN SUS CANTOS DEJAN VER/nSU AMOR A DIOS SU GRATITUD/nIGUAL HACEN A SU VEZ/nLA EXUBERANTE FLORACIÓN/nELEVANDO SUS PERFUMES/nA SU DIOS SU GRAN CREADOR.',
            },
            {
                estilo: '',
                texto: 'SOLO EL HOMBRE SIENDO EL/nLO MAS AMADO DE JESÚS/nSE HA OLVIDADO QUE EL TAMBIÉN/nLO DEBE TODO A SU CREADOR./nLE DEBEMOS DEDICAR, CINCO MINUTOS DE ORI/nEN CAMBIO EL SEÑOR NOS DA, EL PAN, LA LUZ/nEL VIENTO EL SOL.',
            },
        ],
    },
    {
        id: '100',
        pag: '101',
        titulo: 'A LA VIRGEN',
        contenido: [
            {
                estilo: '',
                texto: '¡MADRE DEL DIVINO VERBO, /nLLEVAS EN TI EL DON DEL CIELO! /n¡OYE EL FERVIENTE CANTAR /nDE ESTOS HIJOS DE ABRAHAM!',
            },
            {
                estilo: '',
                texto: '¡ESCUCHA, OH, VIRGEN DIVINA /nLOS PAJARILLOS TRINAR! /n¡TODOS...¡CANTEMOS CON ELLOS! /n¡A TU INFINITA BONDAD!',
            },
            {
                estilo: '',
                texto: '¡ERES LA MADRE AMOROSA, /nROSA DE AMOR Y PIEDAD! /n¡HAZ QUE TU SANTO PERFUME, /nVENGA EL DOLOR; A CALMAR!',
            },
        ],
    },
    {
        id: '101',
        pag: '102',
        titulo: 'MIL VECES',
        contenido: [
            {
                estilo: '',
                texto: '¡MIL VECES CON EL MAESTRO, /nEN SANTA COMUNIÓN! /n¡ESCUCHO LOS ACENTOS /nDE HERMOSA AGRUPACIÓN!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'ALELUYA, A DIOS, /nALELUYA, A EL /nALELUYA, A DIOS /nALELUYA A ÉL',
            },
            {
                estilo: '',
                texto: 'DE AQUELLOS QUE SUFRIERON /nDE SED, HAMBRE Y DOLOR /nMÁS HOY GLORIFICADOS /nESTÁN CON EL SEÑOR',
            },
            {
                estilo: '',
                texto: 'ESCUCHO LOS ACENTOS /nDEL CANTO SIN IGUAL /nY MI ALMA AL PUNTO SE UNE /nAL CORO CELESTIAL',
            },
            {
                estilo: '',
                texto: 'UNIDO ESTOY CON ELLOS /nAHORA POR LA FE /nMÁS PRONTO FRENTE AL TRONO /nCON ELLOS CANTARE',
            },
        ],
    },
    {
        id: '102',
        pag: '103',
        titulo: 'LA LUZ DE DIOS',
        contenido: [
            {
                estilo: '',
                texto: 'SI AL CRUEL ENEMIGO TEMES COMBATIR /nSI LA DUDA AGOBIA SIEMPRE TU EXISTIR /nQUE LA HERMOSA LUZ DE DIOS FULGURE EN TI /nY SERÁS FELIZ ASÍ',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'DEJA PENETRAR LA LUZ DE DIOS /nDEJA PENETRAR LA LUZ /nQUE LA HERMOSA LUZ DE DIOS FULGURE EN TI /nY SERÁS FELIZ ASÍ',
            },
            {
                estilo: '',
                texto: 'SI TU FE EN JESÚS MUY FLACA Y DÉBIL ES /nSI DIOS NO CONTESTA TU FERVIENTE PREZ /nQUE LA HERMOSA LUZ DE DIOS FULGURE EN TI /nY SERÁS FELIZ ASÍ',
            },
            {
                estilo: 'REPETIR CORO',
                texto: '',
            },
            {
                estilo: '',
                texto: 'SI FELIZ AL CIELO ANHELAS ALCANZAR /nY DEL MAL Y LAS TINIEBLAS ESCAPAR /nQUE LA HERMOSA LUZ DE DIOS FULGURE EN TI /nY SERÁS FELIZ ASÍ',
            },
            {
                estilo: '',
                texto: 'SI ANDUVIÉRAMOS EN LUZ DIVINA LUZ /nLIMPIOS NOS HARÁ LA SANGRE DE JESÚS /nCLARIDAD TENDREMOS EN EL CORAZÓN /nSI VIVIMOS EN LA LUZ',
            },
            {
                estilo: '',
                texto: 'REPETIR CORO',
            },
            {
                estilo: '',
                texto: 'SI EL ESPÍRITU DE DIOS CONSOLADOR /nLUZ DEL CIELO TRAE DIVINO ESPLENDOR /nCUANDO TENGA ENTRADA EL EN TU CORAZÓN /nEL SERÁ TU ETERNA LUZ',
            },
            {
                estilo: '',
                texto: 'REPETIR CORO',
            },
        ],
    },
    {
        id: '103',
        pag: '104',
        titulo: 'CON TORRENTES',
        contenido: [
            {
                estilo: '',
                texto: '1. CON TORRENTES DE LUZ QUE TE INUNDAN, /nLOS ARCÁNGELES BESAN TU PIE, /nLAS ESTRELLAS TU FRENTE CIRCUNDAN, /nY HASTA DIOS COMPLACIDO TE VE.',
            },
            {
                estilo: '',
                texto: '2. PUES, LLAMÁNDOTE PURA Y SIN MANCHA, /nDE RODILLAS LOS MUNDOS, ESTÁN, /nY TU ESPÍRITU ARROBA Y ENSANCHA /nTANTA FE, TANTO AMOR, TANTO AFÁN.',
            },
            {
                estilo: '',
                texto: '3.- SALVE, SALVE, OH PIADOSA MARÍA, /nQUE MÁS PURA QUE TÚ, SÓLO DIOS. /nY EN EL CIELO LOS ECOS REPITEN: /n"MÁS QUE TÚ, SÓLO DIOS, SÓLO DIOS."',
            },
            {
                estilo: '',
                texto: '4.-FLORES, FLORES, QUE AL TEMPLO YA VIENEN /nY EN SU TRONO DE LUZ Y A SUS PIES /nQUERUBINES Y ARCÁNGELES TIENEN /nMÁS QUE ESPIGAS Y GRANOS, LA MIES',
            },
            {
                estilo: '',
                texto: '5. FLORES, FLORES LOS NIÑOS DERRAMEN, /nDE LA VIRGEN SIN MANCHA EN HONOR, /nY SU REINA LOS CIELOS LA LLAMEN, /nY LOS HOMBRES SU MADRE Y SU AMOR.',
            },
            {
                estilo: '',
                texto: '6.- FLORES, FLORES, QUE AL TEMPLO YA VIENEN /nY EN SU TRONO DE LUZ Y A SUS PIES /nQUERUBINES Y ARCÁNGELES TIENEN /nMÁS QUE ESPIGAS Y GRANOS, LA MIES',
            },
        ],
    },
    {
        id: '104',
        pag: '105',
        titulo: 'BIENVENIDOS',
        contenido: [
            {
                estilo: '',
                texto: '1. CON GRAN GOZO Y GRAN PLACER /nNOS VOLVEMOS HOY A VER; /nNUESTRAS MANOS OTRA VEZ ESTRECHAMOS.',
            },
            {
                estilo: '',
                texto: 'SE CONTENTA EL CORAZÓN, /nENSANCHÁNDOSE DE AMOR. /nTODOS A UNA VOZ A DIOS, GRACIAS DEMOS.',
            },
            {
                estilo: '',
                texto: '¡BIENVENIDOS! ¡BIENVENIDOS! /nLOS HERMANOS DE AQUÍ /nSE COMPLACEN EN DECIR: ¡BIENVENIDOS!  /nAL VOLVERNOS A REUNIR, ¡BIENVENIDOS!',
            },
            {
                estilo: '',
                texto: '2.-HASTA AQUÍ DIOS TE AYUDÓ, /nNI UN MOMENTO TE DEJÓ, /nY A NOSOTROS TE VOLVIÓ: ¡BIENVENIDOS! /nEL SEÑOR TE ACOMPAÑÓ, /nSU PRESENCIA TE AMPARÓ, /nDEL PELIGRO TE GUARDÓ: ¡BIENVENIDOS!',
            },
            {
                estilo: '',
                texto: '¡BIENVENIDOS! ¡BIENVENIDOS! /nLOS HERMANOS DE AQUÍ /nSE COMPLACEN EN DECIR: ¡BIENVENIDOS!  /nAL VOLVERNOS A REUNIR, ¡BIENVENIDOS!',
            },
            {
                estilo: '',
                texto: '3. DIOS NOS GUARDE EN ESTE AMOR, /nPARA QUE DE CORAZÓN, /nCONSAGRADOS AL SEÑOR, LE ALABEMOS. /nEN LA ETERNA REUNIÓN, /nDO NO HABRÁ SEPARACIÓN, /nNI TRISTEZA, NI AFLICCIÓN, BIENVENIDOS.',
            },
            {
                estilo: '',
                texto: '¡BIENVENIDOS! ¡BIENVENIDOS! /nLOS HERMANOS DE AQUÍ /nNOS GOZAMOS EN DECIR: ¡BIENVENIDOS!  /nAL VOLVERNOS A REUNIR, ¡BIENVENIDOS!',
            },
        ],
    },
    {
        id: '105',
        pag: '106',
        titulo: 'ADIÓS, PADRE',
        contenido: [
            {
                estilo: '',
                texto: '¡ADIÓS PADRE, HIJO, /nY ESPÍRITU SANTO! /n¡ESCUCHA DE GRACIAS /nDE ISRAEL EL CANTO!',
            },
            {
                estilo: '',
                texto: '¡LA DULCE ENSEÑANZA /nQUE HAS VENID A DARNOS! /n¡HACIA TU MORADA… /nNOS CONDUCIRÁ!',
            },
            {
                estilo: '',
                texto: '¡ADIÓS, PADRE AMADO /nTODOS NOS VAMOS! /n¡ALEGRES LLEVAMOS /nNUESTROS CORAZONES!',
            },
            {
                estilo: '',
                texto: '¡PUES TUS BENDICIONES, /nHAN HECHO EL MILAGRO! /nQUE ÉSTE TU PUEBLO… /n¡SE SIENTA FELIZ!',
            },
        ],
    },
    {
        id: '106',
        pag: '107',
        titulo: 'OH, YO QUIERO',
        contenido: [
            {
                estilo: '',
                texto: '¡OH, YO QUIERO ANDAR CON CRISTO /nQUIERO OÍR SU TIERNA VOZ! /n¡MEDITAR EN SUS PALABRAS, /nY CUMPLIR SU VOLUNTAD!',
            },
            {
                estilo: '',
                texto: '¡CONSAGRAR A EL MI VIDA, /nMIS DOLORES Y MI AFÁN! /n¡Y ALGÚN DÍA CON MI CRISTO, /nGOZARE LA CLARIDAD!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡OH, SI, YO QUIERO, ANDAR CON CRISTO! /nOH, SI, YO QUIERO, VIVIR CON CRISTO! /n¡OH, SI, YO QUIERO, MORIR CON CRISTO, /nQUIERO SERLE, UN TESTIGO FIEL!',
            },
            {
                estilo: '',
                texto: 'OH, YO QUIERO ANDAR CON CRISTO /nDE MI SENDA EL ES LA LUZ! /n¡DEJARE EL PERVERSO MUNDO, /nPARA IR AL SALVADOR!',
            },
            {
                estilo: '',
                texto: '¡ESTE MUNDO NADA OFRECE /nCRISTO DA LA SALVACIÓN! /n¿Y ES MI ÚNICA ESPERANZA, /nVIDA ETERNA HALLAR EN DIOS!',
            },
        ],
    },
    {
        id: '107',
        pag: '108',
        titulo: 'MÁS ALLÁ DEL SOL',
        contenido: [
            {
                estilo: '',
                texto: 'AUNQUE EN ESTA VIDA, NO TENGO RIQUEZAS /nSÉ QUÉ ALLÁ EN LA GLORIA TENGO MI MANSIÓN. /nPOR ESO DE GOZO ESTA MI ALMA LLENA /nY CANTO GOZOSO DE MI SALVACIÓN.',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'MÁS ALLÁ DEL SOL, MÁS ALLÁ DEL SOL /nYO TENGO UNA HOGAR, HOGAR /nBELLO HOGAR /nMÁS ALLÁ DE SOL',
            },
            {
                estilo: '',
                texto: 'CUAL OVEJA PERDIDA ENTRE LA MALEZA /nMI SEÑOR JESUCRISTO BÚSCOME Y ME HALLO /nYA MI ALMA PERDIDA EN DOLOR Y TRISTEZAS /nMI DIOS POR SU GRACIA LE DIO SALVACIÓN',
            },
            {
                estilo: '',
                texto: 'ASÍ POR EL MUNDO, YO VOY CAMINANDO /nDE PRUEBAS RODEADO Y DE TENTACIÓN, /nPERO JESUCRISTO QUE ME ESTA CUIDANDO /nME LLEVARÁ SALVO, HASTA MI MANSIÓN,',
            },
            {
                estilo: '',
                texto: '(CORO)',
            },
            {
                estilo: '',
                texto: 'A TODAS LAS RAZA DEL LINAJE HUMANO /nCRISTO QUIERE DARLE PLENA SALVACIÓN /nTAMBIÉN UNA CASA NO HECHA DE MANO /nFUERA A PREPARARNOS A LA SANTA SION.',
            },
        ],
    },
    {
        id: '108',
        pag: '109',
        titulo: 'LUZ DEL MEDIO DÍA',
        contenido: [
            {
                estilo: '',
                texto: '¡ES LA LUZ DEL MEDIO DÍA /nDE LA FUENTE DEL AMOR! /nQUE DERRAMA LUZ FERVIENTE /n¡PARA TODO CORAZÓN!',
            },
            {
                estilo: '',
                texto: '¡ES EL ÁRBOL DE LA VIDA, /nES EL ÁRBOL DEL AMOR! /nDONDE SIEMPRE ES DERRAMADA, /n¡LA PALABRA DEL SEÑOR!',
            },
            {
                estilo: '',
                texto: 'CAMINEN… ¡PUEBLOS ENTEROS! /n¡CAMINEN…SIN DESCANSAR! /nQUE AQUÍ NOS REUNIREMOS, /n¡EN LA CASA DE JEHOVÁ! /n¡GUARDIANES, PEDROS Y GUÍAS; /nDE LAS CASAS DE ORACIÓN!',
            },
            {
                estilo: '',
                texto: '¡ES EL ÁRBOL DE LA VIDA /nES LA LLAMA DEL AMOR /n¡DONDE TODO CAMINANTE /nDESCANSANDO VA EL DOLOR!',
            },
            {
                estilo: '',
                texto: '¡A LA FUENTE DE LA GRACIA /nA LA FUENTE DEL AMOR! /n¡DONDE EN ALTO ESTA EL BALUARTE, /nDE LA CASA DEL SEÑOR!',
            },
            {
                estilo: '',
                texto: 'SOL DEL MEDIO DÍA, /nQUE CALIENTAS CON AMOR! /nAL QUE LLEGA AQUÍ FRIOLENTO, /n¡Y LE DAS TU BENDICIÓN, /nY LE DAS TU BENDICIÓN!',
            },
        ],
    },
    {
        id: '109',
        pag: '110',
        titulo: 'EL SANTO TRISAGIO',
        contenido: [
            {
                estilo: '',
                texto: 'EL SANTO TRISAGIO CANTEMOS TODOS, /nAL PADRE, AL HIJO Y AL ESPÍRITU SANTO /nES NUESTRO SALMO BENDITO QUE LE OFRECEMOS, /nCOMO TRIBUTO DE GRACIA, SE LO ELEVEMOS.',
            },
            {
                estilo: '',
                texto: 'DIOS TRINO Y UN SOLO DIOS VERDADERO, /nTE HACEMOS PRESENTE NUESTRO TRISAGIO /nQUE SEA EL EMBLEMA DE TODOS LOS CORAZONES, /nDE ESTOS TUS HIJOS, QUE LLENAS DE BENDICIONES.',
            },
            {
                estilo: '',
                texto: 'ESTROFA:',
            },
            {
                estilo: '',
                texto: 'OH TRINIDAD SACROSANTA /nQUE TU DEIDAD ENSALZAMOS, /nFESTIVOS TODOS TE CANTAN /nTU NOMBRE GLORIFICAMOS /nFUENTE DE AMOR Y DE GRACIA /nDONDE ESTÁ EL VERBO DIVINO /nISRAEL SU HOMBRE Y SED SACIA /nY PRESTO, SIGUE EL CAMINO /nTODOS LOS SABIOS DEL MUNDO /nQUE EN SUS IDEAS HAY PRESAGIO, /nSEPAN DE TU AMOR PROFUNDO /nY CANTEN ESTE TRISAGIO /nTODA LA GRAN JERARQUÍA /nQUE EN LA TIERRA SE HA FORMADO /nTE RINDAN GRAN PLEITESÍA /nY SE REÚNAN A TU LADO.',
            },
            {
                estilo: '',
                texto: 'GRACIAS TE DAN LAS ESTRELLAS /nEL SOL, LA LUNA Y LAS FLORES /nQUE A CADA INSTANTE CON ELLAS /nMUESTRAS TUS GRANDES AMORES /nLOS HOMBRES Y LAS MUJERES /nEL MANCEBO Y LA DONCELLA /nTODOS PROCLAMEN QUE ERES /nPOR SIGLOS UNA EPOPEYA.',
            },
        ],
    },
    {
        id: '110',
        pag: '111',
        titulo: 'GRACIAS, PADRE',
        contenido: [
            {
                estilo: '',
                texto: 'ISRAELITAS CANTEMOS UNIDOS /nEL CANTAR QUE NOS RECORDARA /nUNA FECHA GLORIOSA EN LA HISTORIA /nDE LA FE EN LA ESPIRITUALIDAD /nUNA FECHA GLORIOSA EN LA HISTORIA /nDE LA FE, EL AMOR Y HUMILDAD./n',
            },
            {
                estilo: '',
                texto: 'PADRE AMADO, LAS GRACIAS TE DAMOS, /nREBASAMOS CIEN AÑOS DE LUZ /nLA CENTURIA QUE YA FESTEJAMOS /nDE ENSEÑANZAS DE NUESTRO JESÚS',
            },
            {
                estilo: '',
                texto: 'HOY LOS PUEBLOS UNIDOS ENSALZAN /nTU GRANDEZA QUE ELÍAS NOS LEGO /nY LA GRACIA TAMBIÉN…DE MARÍA /nMADRE Y VIRGEN DEL MAS PURO AMOR /nMADRE Y VIRGEN DEL MAS PURO AMOR.',
            },
        ],
    },
    {
        id: '111',
        pag: '112',
        titulo: 'A ROQUE ROJAS',
        contenido: [
            {
                estilo: '',
                texto: 'ROQUE ROJAS, FUE ESCOGIDOS /nPOR LA MANO BENDITA DE DIOS /nPALADÍN DE SU CAUSA /nDIVINA DE AMOR /nQUE IMPLANTARA LAS LEYES /nEN LA NUEVA SION',
            },
            {
                estilo: '',
                texto: 'SIETE SELLOS QUE SON /nSIETE IGLESIAS DE AMOR /nVEINTIDÓS LOS PRECEPTOS /nQUE ELÍAS NOS DEJO',
            },
            {
                estilo: '',
                texto: 'ROQUE ROJAS, FUE ENVOLTURA /nDEL ENVIADO DE NUESTROS SEÑOR /nDE SU ESPÍRITU SANTO /nEL NOS DIO LA LUZ /nVIDA ETERNA TAMBIÉN EN JESÚS /nVIDA ETERNA TAMBIÉN EN JESÚS',
            },
        ],
    },
    {
        id: '112',
        pag: '113',
        titulo: 'GLORIA A JESÚS',
        contenido: [
            {
                estilo: '',
                texto: 'CUANDO YO MORE A LA DIESTRA DE DIOS /nGLORIA AL SEÑOR, GLORIA AL SEÑOR /nCUANDO MI VIDA SE INUNDE DE LUZ /nGLORIA AL SEÑOR MI JESÚS',
            },
            {
                estilo: '',
                texto: 'CORO:',
            },
            {
                estilo: '',
                texto: 'GLORIA A JESÚS /nGLORIA AL SEÑOR /nGLORIA A JESÚS /nMI SEÑOR',
            },
            {
                estilo: '',
                texto: 'CUANDO DE AFANES LIBERADO ESTE /nGLORIA AL SEÑOR, YO CANTARE /nDE GRACIA Y DONES SE AMOR ME COLMO /nGLORIA A JESÚS MI SEÑOR',
            },
            {
                estilo: '',
                texto: 'CORO:',
            },
            {
                estilo: '',
                texto: 'DE LA MALDAD RESCATADO YO FUI /nPOR SU BONDAD, SOY TAN FELIZ. /nYO SOY LABRIEGO QUE SIEMBRA LA LUZ /nGLORIA AL SEÑOR MI JESÚS.',
            },
        ],
    },
    {
        id: '113',
        pag: '114',
        titulo: 'ROSA CELESTIAL',
        contenido: [
            {
                estilo: '',
                texto: 'CANTEMOS CON AMOR /nCANTEMOS A MARÍA /nA LA MADRE DE NUESTRO SEÑOR',
            },
            {
                estilo: '',
                texto: 'TODA MI FE HE PUESTO EN TI /nOH VIRGEN QUE TE APIADAS DE ISRAEL /nMI CORAZÓN LATE FELIZ /nRECIBE TODO MI AMOR',
            },
            {
                estilo: '',
                texto: 'OH BELLÍSIMA ROSA CELESTIAL /nTÚ, EL MÍSTICO ENCANTO DE DIOS /nYO TE OFREZCO, OH, VIRGEN MARÍA /nEL SANTUARIO DE MI CORAZÓN.',
            },
        ],
    },
    {
        id: '114',
        pag: '115',
        titulo: 'LLENA A JESÚS MI CORAZÓN.',
        contenido: [
            {
                estilo: '',
                texto: 'QUE BELLO ES LLEGAR /nAL REGAZO DE JESÚS /nQUE HERMOSO ES PASAR… /nDE TINIEBLAS, A LA LUZ',
            },
            {
                estilo: '',
                texto: 'JAMÁS OLVIDAR, /nQUE ME DIO, VIDA Y SALUD /nY EL CORAZÓN REBOSAR, /nDE INMENSA GRATITUD',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'LLENA JESÚS MI CORAZÓN /nLLÉNALO MAS Y MAS, SEÑOR /nY CUANDO ALCANCE TU PERDÓN /nLLÉNALO DE TU SANTO AMOR',
            },
            {
                estilo: '',
                texto: 'HUNDIDO EN EL MAL /nMUCHO TIEMPO YO VIVÍ /nTU AMOR SIN IGUAL /nME SALVO DE NO MORIR',
            },
            {
                estilo: '',
                texto: 'Y AL RECORDAR… /nQUE TE LO DEBO TODO A TI /nME DAN GANAS DE LLORAR /nDE GRATITUD SIN FIN.',
            },
        ],
    },
    {
        id: '115',
        pag: '116',
        titulo: 'LIRIO DEL VALLE',
        contenido: [
            {
                estilo: '',
                texto: 'PODER INFINITO /nDEL ARCANO CIELO /nTU NOMBRE ENSALCEMOS /nCON GUSTO Y AMOR',
            },
            {
                estilo: '',
                texto: 'ERES EL ALIENTO /nDE TODO LO CREADO /nQUE ALUMBRA A LOS MUNDOS /nEN SU ALREDEDOR',
            },
            {
                estilo: '',
                texto: 'LIRIO DEL VALLE /nAROMA FRAGANTE /nRECIBE PLEGARIA /nEN ESTA ORACIÓN',
            },
            {
                estilo: '',
                texto: 'POR ESO A TUS PLANTAS /nESTA LA OBEDIENCIA /nESPÍRITU SANTO /nPIDIENDO EL PERDÓN',
            },
            {
                estilo: '',
                texto: 'DEL PUEBLO QUE TE AMA /nPODER DE GRANDEZA /nALLÁ EN LONTANANZA /nESTA EL GALARDÓN.',
            },
        ],
    },
    {
        id: '116',
        pag: '117',
        titulo: 'HOMENAJE A MARÍA',
        contenido: [
            {
                estilo: '',
                texto: 'ALBORADA TEMPRANERA /nDONDE CANTAN SERAFINES /nQUE BONITA PRIMAVERA /nQUE ENGALANAN LOS JARDINES',
            },
            {
                estilo: '',
                texto: 'ES FESTÍN QUE HOY SE CELEBRA /nDE HOMENAJE A TI MARÍA /nES LA INFANCIA QUE TE ELEVA /nSU ALELUYA EN ESTE DÍA',
            },
            {
                estilo: '',
                texto: 'NUESTROS CORAZONES /nFORMAN UNA AUREOLA /nLA SUTIL FRAGANCIA /nTE DA, LA COROLA',
            },
            {
                estilo: '',
                texto: 'GOZO HAY EN EL CIELO /nTAMBIÉN, EN LA TIERRA /nPORQUE CON ANHELO /nSE ENCUENTRA… LA REINA',
            },
            {
                estilo: '',
                texto: 'REINA Y MADRE, VIRGEN PURA, /nQUE HOMENAJE, TE RENDIMOS /nESPERANDO TU DULZURA /nTU CARICIA…TE PEDIMOS',
            },
            {
                estilo: '',
                texto: 'CON LA ANTORCHA DE ESPERANZA /nSIEMPRE, FIRMES…SEGUIREMOS /nY EN NUESTRA ALMA, LA CONFIANZA /nQUE EN TU REINO MORAREMOS',
            },
        ],
    },
    {
        id: '117',
        pag: '118',
        titulo: 'DIOS DE ISRAEL',
        contenido: [
            {
                estilo: '',
                texto: 'NO HAY ALTEZA OH DIOS QUE LA SUYA /nINEFABLE SERA, QUE DE LEJOS /nQUE A TU PUEBLO, HAS DADO A MIRAR',
            },
            {
                estilo: '',
                texto: 'NO DESOIGAS MI HUMILDE PLEGARIA /nY A TU TRONO SE ELEVA MI CANTO /nDAME LUZ, DE TU ESPÍRITU SANTO /nY TU GLORIA PUEDA CONTEMPLAR',
            },
            {
                estilo: '',
                texto: 'NO DESPRECIES, MIS LAGRIMAS TRISTES /nNI TAMPOCO; MIS PRECES FILIALES /nLIBRA AL MUNDO DE TODOS SUS MALES /nSALVA A MUNDO, OH DIOS DE ISRAEL /nSALVA AL PUEBLO BENDITO DE ISRAEL.',
            },
        ],
    },
    {
        id: '118',
        pag: '119',
        titulo: 'JESÚS TE NECESITA',
        contenido: [
            {
                estilo: '',
                texto: 'JESÚS TE NECESITA /nCRISTIANA JUVENTUD /nTU FUERZA SOLICITA, /nTU CELO Y TU VIRTUD /nLA FRENTE PUES, LEVANTA /nY EMPUÑA CON VALOR /nLA ENSEÑA SACROSANTA /nDE CRISTO TU SEÑOR',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'A CRISTO PERTENECES /nAL MAL, NO SIRVAS MAS /nSI A EL, HOY TODO OFRECES /nCON CRISTO REINARAS',
            },
            {
                estilo: '',
                texto: 'ES TIEMPO DE QUE ENCIENDAS /nEN FUEGO CELESTIAL /nTU PECHO, Y LUEGO EMPRENDAS, /nLA LUCHA SIN IGUAL /nQUE LIBRA A LOS HUMANOS /nDEL VICIO Y LA MALDAD /nQUITANDO DE SUS MANOS /nLOS GRILLOS DE IMPIEDAD',
            },
            {
                estilo: '',
                texto: 'QUEBRANTA LAS CADENAS /nDEL MUNDO PECADOR, /nREDÍMELO DE PENAS; /nLLEVÁNDOLO AL SEÑOR! /nANÚNCIALES QUE CRISTO /nLES TRAJO LIBERTAD. /nQUE TODO FUE PREVISTO /nPOR DIOS EN SU BONDAD',
            },
            {
                estilo: '',
                texto: 'A NOBLE LUCHA LLAMA /nJESÚS TU SALVADOR, /nLEVÁNTATE Y PROCLAMA /nLOS DONES DE SU AMOR /nSI SIEMBRAS DESALIENTOS /nEL MALO, CON SU VOZ /nNO EXPRESES LOS LAMENTOS /nQUE VA CONTIGO, DIOS!',
            },
        ],
    },
    {
        id: '119',
        pag: '120',
        titulo: 'ETERNO MEDIO DÍA',
        contenido: [
            {
                estilo: '',
                texto: 'LA LUZ RADIANTE, DEL ETERNO MEDIO DÍA /nDONDE EL ARCA, DE LA NUEVA ALIANZA, ESTA /nCRECIÓ EL GRAN ÁRBOL CORPULENTO, DE LA VIDA /nY SU RAMAJE SE EXTENDIÓ, PARA SOLAZ',
            },
            {
                estilo: '',
                texto: 'EN EL, LOS PUEBLOS, CONCIBIERON LA ESPERANZA /nCON ESA LUZ QUE LOS HABRÍA DE LIBRAR… /nDE LA CULPA, LA IGNOMINIA…Y SIN TARDANZA; /nCUAL LABRIEGOS, APRENDIERON A SEMBRAR',
            },
            {
                estilo: '',
                texto: 'LIBRO DE ORO, DE LA CASA, DE MI PADRE… /nSOY DICHOSO…EN EL TEMPLO DE JEHOVÁ /nREGOCIJO CON JESÚS…QUE UN MUNDO ABRE /nCON ELÍAS Y MI MADRE CELESTIAL.',
            },
        ],
    },
    {
        id: '120',
        pag: '121',
        titulo: 'ALMA MÍA',
        contenido: [
            {
                estilo: '',
                texto: 'CORO:',
            },
            {
                estilo: '',
                texto: 'ALMA MÍA NO DELIRES /nNI SUSPIRES DE DOLOR /nQUE NO VES, QUE EN EL CIELO /nTU CONSUELO ES JESÚS',
            },
            {
                estilo: '',
                texto: 'I',
            },
            {
                estilo: '',
                texto: 'DIOS TE MUESTRA EL CAMINO /nQUE HOY MISMO APRENDERÁS /nEN EL CIELO HAY CONSUELO /nY EN JESÚS ETERNA PAZ',
            },
            {
                estilo: '',
                texto: 'II',
            },
            {
                estilo: '',
                texto: 'DEJA EL MUNDO UN INSTANTE  /nQUE EN TU PECHO MORE DIOS /nNO TE APARTES DEL SENDERO /nEN QUE DIOS TE APOSENTO.',
            },
        ],
    },
    {
        id: '121',
        pag: '122',
        titulo: 'SÁLVAME VIRGEN MARÍA',
        contenido: [
            {
                estilo: '',
                texto: 'MADRE QUE AL DESVALIDO /nLE DAS DE TU PROTECCIÓN /nDAME HOY LA ESPERANZA /nDE CALMAR ESTE DOLOR',
            },
            {
                estilo: '',
                texto: 'CORO:',
            },
            {
                estilo: '',
                texto: 'SÁLVAME, VIRGEN MARÍA /nSÁLVAME, TE IMPLORO CON FE /nMI ALMA EN TU BONDAD CONFÍA /nVIRGEN MARÍA, SÁLVAME /nVIRGEN MARÍA… SÁLVAME…SÁLVAME',
            },
            {
                estilo: '',
                texto: 'IMPLORA A TU HIJO DIVINO, /nLA LUZ DE SU REDENCIÓN" /nPARA EL MUNDO QUE SE PIERDE /nEN SUS FALTAS Y EN SU ERROR. ',
            },
            {
                estilo: '',
                texto: 'YO TE OFREZCO MADRE MÍA, /nMI PLEGARIA Y MI ORACIÓN /nPOR TUS HIJOS QUE ESPERAN /nEL EFLUVIO DE TU AMOR.',
            },
        ],
    },
    {
        id: '122',
        pag: '123',
        titulo: 'VENID, VENID HERMANOS',
        contenido: [
            {
                estilo: '',
                texto: 'CORO I',
            },
            {
                estilo: '',
                texto: 'VENID, VENID HERMANOS /nVENID A ESCUCHAR /nLA PALABRA DE CRISTO /nQUE NOS VIENE A ENTREGAR',
            },
            {
                estilo: '',
                texto: 'ES CUAL SEMILLA FÉRTIL /nQUE DEBEMOS SEMBRAR /nEN LOS CORAZONES /nDE LA HUMANIDAD',
            },
            {
                estilo: '',
                texto: 'CORO II',
            },

            {
                estilo: '',
                texto: 'SEMILLA LUMINOSA /nQUE FRUCTIFICARA /nSI CON AMOR CULTIVAS /nAL MUNDO SALVARA',
            },
            {
                estilo: '',
                texto: 'AL CORO I',
            },
            {
                estilo: '',
                texto: 'CON TODA SU GRANDEZA /nY SU DIVINIDAD /nEN SU SANTA ENSEÑANZA /nSOLO BONDAD NOS DA',
            },
            {
                estilo: '',
                texto: 'ÁNGELES, QUERUBINES /nY TODA LA CREACIÓN /nENTONEMOS UN CANTO /nA CRISTO REDENTOR',
            },
            {
                estilo: '',
                texto: 'AL CORO I',
            },
        ],
    },
    {
        id: '123',
        pag: '124',
        titulo: 'OH MI BUEN PASTOR',
        contenido: [
            {
                estilo: '',
                texto: 'EN ESTA ERA DE LUZ /nVAMOS A ELEVAR /nPLEGARIAS DE AMOR /nAL GUÍA ESPIRITUAL',
            },
            {
                estilo: '',
                texto: 'CORO I',
            },
            {
                estilo: '',
                texto: '¡OH, MI BUEN PASTOR!, /nNOS VIENES A MOSTRAR /nEL CAMINO HACIA DIOS /nCON TU LEY, DE LUZ Y PAZ',
            },
            {
                estilo: '',
                texto: 'PERMITE QUE AL ORAR /nLIMPIEMOS FALTAS MIL /nY PODER CONSAGRAR /nMI ESPÍRITU HACIA TI',
            },
            {
                estilo: '',
                texto: 'AL CORO I',
            },
            {
                estilo: '',
                texto: 'DESEAMOS APRENDER /nCOMO CUMPLIR TU LEY /nY ASÍ LLEGAR A SER /nLABRIEGOS DE ISRAEL',
            },
            {
                estilo: '',
                texto: 'CORO II',
            },
            {
                estilo: '',
                texto: 'ELÍAS EL PASTOR /nNOS VIENE A MOSTRAR /nLA GLORIA EN NUESTRO DIOS /nCON SU LEY, DE LUZ Y PAZ.',
            },
        ],
    },
    {
        id: '124',
        pag: '125',
        titulo: 'HABLA SEÑOR A MI ALMA',
        contenido: [
            {
                estilo: '',
                texto: 'ESTROFAS',
            },
            {
                estilo: '',
                texto: 'HABLA SEÑOR A MI ALMA /nHABLE TU DULCE VOZ /nQUE GRABE CON MIS OÍDOS /n¡TU NO ESTAS SOLA!… ¡NO!',
            },
            {
                estilo: '',
                texto: 'MI CORAZÓN PREPARA /nPRESTO A ESCUCHAR TU LEY /nLOORES MI ALMA ENTONEN /nDE CONTRICIÓN Y FE',
            },
            {
                estilo: '',
                texto: 'COROS',
            },
            {
                estilo: '',
                texto: 'HÁBLAME EN DULCES NOTAS /nHÁBLAME CON AMOR /nYA LA VICTORIA ES TUYA /n¡NO TENGAS MAS… TEMOR!',
            },
            {
                estilo: '',
                texto: 'HÁBLAME CADA DÍA /nHABLE TU TIERNA VOZ /nQUE LLEGUE A MIS OÍDOS /n¡TU NO ESTAS SOLA!, ¡NO!',
            },
            {
                estilo: '',
                texto: 'ESTROFAS',
            },
            {
                estilo: '',
                texto: 'HABLA A TUS HIJOS PADRES /nDALES TU CARIDAD /nLLÉNALES DE TU GOZO /nENSÉÑALES A ORAR.',
            },
            {
                estilo: '',
                texto: 'A TI CONSAGREN TODO, /nVIVAN TAN SOLO EN TI /n¡MIREN TU REINO PRONTO, /nVENA TU ROSTRO AQUÍ!',
            },
            {
                estilo: '',
                texto: 'ESTROFAS',
            },
            {
                estilo: '',
                texto: 'HABLA, CUAL EN ANTAÑO /nDISTE TU SANTA LEY /nTU TESTIMONIO SIEMPRE /nQUIERO GUARDAR, CON FE',
            },
            {
                estilo: '',
                texto: 'QUIERO MAGNIFICARTE /nY A TU GLORIA DAR /nEL GRATO TESTIMONIO /nDE OBEDECER Y AMAR.',
            },
        ],
    },
    {
        id: '125',
        pag: '127',
        titulo: '¿QUIÉN ES ESA ESTRELLA?',
        contenido: [
            {
                estilo: '',
                texto: 'I',
            },
            {
                estilo: '',
                texto: 'SIGAMOS HERMANOS /nLA BRILLANTE ESTELA /nIRÁN PREGUNTANDO /nQUIEN ES ESA ESTRELLA',
            },
            {
                estilo: '',
                texto: 'CORO:',
            },
            {
                estilo: '',
                texto: '¿QUIÉN ES ESA ESTRELLA? /nQUE A LOS PUEBLOS GUÍA /nLA REINA DEL CIELO; /nLA VIRGEN MARÍA',
            },
            {
                estilo: '',
                texto: 'II',
            },
            {
                estilo: '',
                texto: 'ERES MADRE MÍA /nLA ROSA MÁS BELLA /nQUE EL SOL RESPLANDECE /nTU FULGOR DE ESTRELLA',
            },
            {
                estilo: '',
                texto: 'III',
            },
            {
                estilo: '',
                texto: 'CUAL SOL REFULGENTE /nEN CUALQUIER ESFERA /nCON TANTA HERMOSURA /nALUMBRA DOQUIERA',
            },
        ],
    },
    {
        id: '126',
        pag: '128',
        titulo: '¡OH, VIRGEN DIVINA!',
        contenido: [
            {
                estilo: '',
                texto: '¡OH! VIRGEN DIVINA /nQUE INTERCEDES ANTE DIOS /nPOR ESTOS TUS HIJOS /nLLENOS DE DOLOR /nQUE ESPERAN DEL PADRE, /nLUZ, PAZ Y PERDÓN',
            },
            {
                estilo: '',
                texto: 'VENIMOS HUMILDES /nESTA ALBA A ENTONAR /nUN CANTO DE GRACIAS /nPOR TU CARIDAD /n¡OH! MADRE AMOROSA /nROSA CELESTIAL',
            },
            {
                estilo: '',
                texto: 'CORO:',
            },
            {
                estilo: '',
                texto: 'HERMOSA DONCELLA /nDE BLANCO ESPLENDOR /nINUNDA MI ALMA /nCON SUBLIME AMOR /nY SIENTA, EN TU ESENCIA /nTIERNA BENDICIÓN',
            },
            {
                estilo: '',
                texto: 'ARCA DE LA ALIANZA /nQUE EL ETERNO ENVIÓ /nA UNIR NUESTRAS ALMAS /nEN SANTA ORACIÓN /nY ASÍ UNIFICADOS, /nLLEGAR, HASTA DIOS.',
            },
            {
                estilo: '',
                texto: 'UNAMOS MIL VECES /nAL CORO ESPIRITUAL /nY GRACIAS HOY DEMOS /nA TANTA BONDAD /nDE LA VIRGEN PURA /nMADRE CELESTIAL',
            },
        ],
    },
    {
        id: '127',
        pag: '130',
        titulo: 'VEN DULCE PAZ',
        contenido: [
            {
                estilo: '',
                texto: 'CORO:',
            },
            {
                estilo: '',
                texto: 'VEN DULCE PAZ, VEN HASTA MÍ /nPARA ELEVARSE UN INSTANTE HACIA TI /nY EN COMUNIÓN ESPIRITUAL /nMI ALMA RECIBA, TU VOLUNTAD',
            },
            {
                estilo: '',
                texto: 'ESTROFAS',
            },
            {
                estilo: '',
                texto: '¡OH! GRAN JEHOVÁ, VEN A ENTREGAR /nDE TU MANDATO, A LA HUMANIDAD /nYA QUE JESÚS DE NAZARET, /nNOS DA ENSEÑANZA, SUBLIME DE FE',
            },
            {
                estilo: '',
                texto: '¡OH! REDENTOR QUIERO MORAR /nYA SIN TEMORES FORMARTE UN ALTAR /nY DENTRO DE MÍ, PUEDA LLEVAR /nVIDA DE GRACIA, UNA ETERNIDAD',
            },
            {
                estilo: '',
                texto: 'PADRE DE AMOR Y DE BONDAD /nTU VOZ SONORA A MI ALMA LLEGARA /nDAME TU LUZ, GUÍA ESPIRITUAL /nPARA CUMPLIR CON LA LEY DE JEHOVÁ.',
            },
        ],
    },

    {
        id: '128',
        pag: '131',
        titulo: 'AVE MARÍA',
        contenido: [
            {
                estilo: '',
                texto: 'AVE MARÍA /n¡MADRE DE AMOR Y DE BONDAD! /nPROTEGE MI ALMA, SE MI GUÍA /n¡OH MADRE MÍA DE MI TEN PIEDAD! /nSOLO TU PODRÁS MIS DOLORES /nCALMAR…MIS DOLORES CALMAR.',
            },
            {
                estilo: '',
                texto: '¡AMARTE, MADRE ES MI CONSUELO, /nAMARTE SIEMPRE Y EN TI CONFIAR! /n¡OH, MADRE MÍA QUE EN EL CIELO /nALGUNA VEZ YO TE PUEDA MIRAR!',
            },
            {
                estilo: '',
                texto: 'SANTA MARÍA… /n¡LUZ DE DIVINA CLARIDAD! /nINUNDA MI ALMA DE ALEGRÍ /nCELESTE AMOR DE INFINITA BONDA /n¡YO QUIERO EN TI, MIS PESARES CONFIAR /n¡MIS PESARES CONFIAR!',
            },
            {
                estilo: '',
                texto: 'AMARTE, MADRE ES MI CONSUELO, /nAMARTE SIEMPRE Y CADA VEZ MAS /n¡OH MADRE MÍA QUE EN EL CIELO. /nALGUNA VEZ YO TE PUEDA MIRAR! /n¡AVE MARÍA!',
            },
        ],
    },
    {
        id: '129',
        pag: '132',
        titulo: 'BIENVENIDOS SEÁIS HERMANOS',
        contenido: [
            {
                estilo: '',
                texto: 'BIENVENIDOS SEÁIS HERMANOS /nEN EL NOMBRE BENDITO DE DIOS /nHOY UNIDOS NOS GOZAMOS /nAL SABER QUE NOS UNE SU AMOR /nDEMOS GRACIAS POR SER SALVOS /nY NUESTRA ALMA SIENTA GRATITUD /nPORQUE SOLO JESÚS NOS DA LA VIDA Y SALUD /nY LA GLORIA QUE LLEVA SU CRUZ',
            },
            {
                estilo: '',
                texto: 'UNID LOS CANTOS /nTODOS LOS SERES /nCON DULCE VOZ /nCON REVERENCIA /nPORQUE EN PRESENCIA /nESTÁIS DE DIOS',
            },
            {
                estilo: '',
                texto: 'TODO HUMANO /nAMA SU HERMANO /nDE CORAZÓN /nNO VE FRONTERAS /nVA POR LA TIERRA /nSEMBRANDO AMOR',
            },
            {
                estilo: '',
                texto: 'TODOS UNIDOS /nLOS ESCOGIDOS /nVERÁN A DIOS /nALLÁ EN EL CIELO /nTENDRÁN EL PREMIO /nDE SU LABOR.',
            },
        ],
    },
    {
        id: '130',
        pag: '133',
        titulo: 'ELÍAS, GUÍA Y PASTOR',
        contenido: [
            {
                estilo: '',
                texto: 'QUERUBES DE LOS CIELOS /nCANTAD CON ARPAS DE ORO /nCANTAD FORMANDO CORO /nCON NUESTRA DÉBIL, VOZ.',
            },
            {
                estilo: '',
                texto: 'CANTAD CON REGOCIJO /nA ELÍAS EL ENVIADO /nLA LEY NOS HA ENTREGADO /nDE NUESTRO GRAN CREADOR',
            },
            {
                estilo: '',
                texto: 'OH PASTOR QUE EL INSTANTE, /nSUBLIME, E INDESCRIPTIBLE /nA DIOS OMNIPOTENT /nIMPLORASTE CON AMOR',
            },
            {
                estilo: '',
                texto: 'DE NUESTRO TIERNO PECHO, /nUNIDO AL CORO SANTO /nACEPTA HUMILDE CANTO /nELÍAS, GUÍA Y PASTOR.',
            },
        ],
    },
    {
        id: '131',
        pag: '134',
        titulo: 'CERCA DE TI SEÑOR',
        contenido: [
            {
                estilo: '',
                texto: 'CERCA DE TI SEÑOR /nQUIERO MORAR /nTU GRANDE Y TIERNO AMOR /nQUIERO GOZAR',
            },
            {
                estilo: '',
                texto: 'LLENA MI POBRE SER /nLIMPIA MI CORAZÓN /nHAZME TU ROSTRO VER /nEN COMUNIÓN',
            },
            {
                estilo: '',
                texto: '¡PASOS INCIERTOS DOY /nEL SOL SE VA MAS! /nSI CONTIGO ESTOY /n¡NO TEMO YA!',
            },
            {
                estilo: '',
                texto: '¡PLEGARIAS DE GRATITUD! /nFERVIENTE CANTARE /nY FIEL A TI JESÚS… /nSIEMPRE SERÉ',
            },
            {
                estilo: '',
                texto: '¡DÍA FELIZ TENDRÉ /nCREYENDO EN TI! /nVEN QUE YO HABITARE… /n¡CERCA DE TI!',
            },
            {
                estilo: '',
                texto: '¡MI VOZ ALABARA /nTU DULCE NOMBRE AHÍ! /nY MI ALMA GOZARA… /n¡CERCA DE TI!',
            },
        ],
    },
    {
        id: '132',
        pag: '135',
        titulo: 'GRANDE GOZO',
        contenido: [
            {
                estilo: '',
                texto: '¡GRANDE GOZO HAY EN MI ALMA HOY, /nPUES JESÚS CONMIGO ESTA! /n¡Y SU PAZ, QUE YA GOZANDO ESTOY, /nPOR SIEMPRE DURARA!',
            },
            {
                estilo: '',
                texto: 'GRANDE GOZO, CUAN HERMOSO, /nPASO TODO EL TIEMPO MUY FELIZ! /n¡PORQUE VEO DE CRISTO, LA SONRIENTE FAZ; /nGRANDE GOZO, SIENTO EN MI!',
            },
            {
                estilo: '',
                texto: 'ESTROFAS',
            },
            {
                estilo: '',
                texto: '¡HAY UN CANTO EN MI ALMA HOY, /nMELODÍAS A MI REY /n¡EN SU AMOR FELIZ Y LIBRE SOY, /nY A SALVO POR LA FE!',
            },
            {
                estilo: '',
                texto: 'PAZ DIVINA, HAY EN MI ALMA HOY, /nPORQUE CRISTO ME SALVO! /n¡LAS CADENAS ROTAS YA ESTÁN, /nJESÚS ME LIBERO!',
            },
            {
                estilo: '',
                texto: '¡GRATITUD HAY EN MI ALMA HOY, /nALABANZAS A JESÚS! /n¡POR SU GRACIA, A LA GLORIA VOY, /nGOZÁNDOME EN SU LUZ!',
            },
        ],
    },
    {
        id: '133',
        pag: '136',
        titulo: 'CON DULCES ACENTOS',
        contenido: [
            {
                estilo: '',
                texto: 'CON DULCES ACENTOS… /n¡FELIZ OH, LENGUA MÍA! /n¡ENSALZA A MARÍA! /nMAS BELLA QUE EL SOL! /n¡TE ENSALZAN QUERUBES, /nEN FULGIDO CORO, /nLAS ARPAS DE ORO; /nMODULAN POR TI!',
            },
            {
                estilo: '',
                texto: '¡LA MIRA EL ETERNO /nCON SUMA CARICIA! /n¡INMENSA DELICIA,  /nDE AMOR VIRGINAL! /n¡PUES SI ERES TAN BELLA /nQUE DIOS EMBELESAS! /n¿QUÉ QUIERES QUE HAGA, /nESTE POBRE MORTAL?',
            },
            {
                estilo: '',
                texto: '¡VOLAR A LOS CIELOS /nY ALLÍ EMBELESARSE! /n¡GOZAR Y SACIARSE, /nDE PLACIDO AMOR! /n¡GOZAR Y SACIARSE, /nDE PLACIDO AMOR!',
            },
        ],
    },
    {
        id: '134',
        pag: '137',
        titulo: 'MÁS BLANCO QUE LA NIEVE',
        contenido: [
            {
                estilo: '',
                texto: 'MÁS BLANCO QUE LA NIEVE /nMÁS BLANCO QUE LA NIEVE /nMÁS BLANCO QUE LA NIEVE /nQUEDO MI CORAZÓN',
            },
            {
                estilo: '',
                texto: 'SEÑOR AUMÉNTAME LA FE /nSI, AUMÉNTAME LA FE /n¡OH CRISTO TÚ LO PUEDES HACER!',
            },
            {
                estilo: '',
                texto: '¡SEÑOR AUMÉNTAME LA FE… /nSI, AUMÉNTAME LA FE! /n¡OH, MI CRISTO /nTÚ LO PUEDES HACER',
            },
            {
                estilo: '',
                texto: 'CORO:',
            },
            {
                estilo: '',
                texto: '¡YA SALVO SOY! /n¡YA SALVO SOY! /nALELUYA, YA SALVO SOY!',
            },
            {
                estilo: '',
                texto: '¡MIS CULPAS Y PECADOS, /nPOR CRISTO SON BORRADOS! /n¡ALELUYA YA SALVO SOY!',
            },
            {
                estilo: '',
                texto: '¡HAY VIDA, HAY VIDA DE JESÚS, /nHAY GOZO, HAY GOZO EN JESÚS! /nYO QUIERO MORAR, EN LA PATRIA CELESTIAL /n¡PORQUE HAY VIDA, HAY VIDA EN JESÚS!',
            },
        ],
    },
    {
        id: '135',
        pag: '138',
        titulo: 'DIVINO SEÑOR',
        contenido: [
            {
                estilo: '',
                texto: '¡GRACIAS, DIVINO SEÑOR, /nPOR ESTAR CERCA DE MI! /nY CONCEDERME TU LUZ… /nPARA CON ELLA… CUMPLIR! /n¡ME HAS ENTREGADO LA PAZ, /nAL SUBLIMARME TU AMOR! /n¡FORTALECIDO, YA ESTOY; /nAL RECIBIR TU PERDÓN!',
            },
            {
                estilo: '',
                texto: 'CORO:',
            },
            {
                estilo: '',
                texto: '¡GRACIAS! /n¡GRACIAS! /n¡DIVINO SEÑOR!',
            },
            {
                estilo: '',
                texto: '¡EL DON QUE DIOS ME CONFIÓ, /nAL RECIBIR LA HEREDAD! /n¡ES EL SERVIR CON AMOR, /nA TODA LA HUMANIDAD! /n¡ANHELO UN DÍA MORAR,  /nEN LA MANSIÓN CELESTIAL! /n¡Y PUEDA YO CONTEMPLAR, /nSU GRANDEZA ESPIRITUAL!',
            },
            {
                estilo: '',
                texto: '¡GRACIAS, TE DAMOS OH, DIOS /nPOR ESCUCHAR EL CLAMOR! /n¡DEL CORAZÓN PECADOR, /nY CONCEDERNOS PERDÓN! /n¡AL ELEVAR LA ORACIÓN, /nY UNA PLEGARIA HACIA TI /n¡TUS HIJOS TE AMAN SEÑOR, /nDANOS HOY TU BENDICIÓN!.',
            },
        ],
    },
    {
        id: '136',
        pag: '139',
        titulo: 'AMOR Y ALIANZA',
        contenido: [
            {
                estilo: '',
                texto: '¡AMOR Y ALIANZA, DULCE ESPERANZA, /nCONVERTIDA EN REALIDAD! /nLLENE MI VIDA DE BIENANDANZA… /n¡CON LA LUZ DE LA VERDAD!',
            },
            {
                estilo: '',
                texto: '¡CUANTOS MOMENTOS, DE DICHA PLENA, /nMENSAJEROS SON DE PAZ! /nAMOR Y ALIANZA, EN DÓNDE REINA /n¡TU INFINITA CARIDAD!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡JESÚS BIEN MÍO, DIOS Y MAESTRO, /nMI REGOCIJO YO TE DOY! /n¡POR TUS BONDADES Y EL PAN NUESTRO, /nQUE NOS HAS DADO, AYER Y HOY!',
            },
            {
                estilo: '',
                texto: '¡TERCERA ERA, DE AMOR Y ALIANZA, /nEN TU PUEBLO AHORA ESTA! /nASÍ TENEMOS, CON TU ENSEÑANZA… /n¡RESURRECCIÓN…!¡ESPIRITUAL!',
            },
            {
                estilo: '',
                texto: '¡MADRE AMOROSA, PASTOR DIVINO, /nPADRE ETERNO…¡GRAN JEHOVÁ! /n¡HOY PROMETEMOS; AMOR Y ALIANZA! /n¡Y CUMPLIR TU VOLUNTAD!',
            },
        ],
    },
    {
        id: '137',
        pag: '140',
        titulo: 'GLORIA A CRISTO REDENTOR',
        contenido: [
            {
                estilo: '',
                texto: '¡ GLORIA, GLORIA A CRISTO REDENTOR /nGLORIA, GLORIA A JESUS NUESTRO SEÑOR! /nVIENE A SALVARNOS CON SU AMOR... /nDESCIENDE DE SU TRONO A NUESTRO CORAZON',
            },
            {
                estilo: '',
                texto: 'SI CERCA DE TI EL CIEGO NO PUEDE CONTEMPLAR /nLA LUZ QUE VA GUIANDO DALE TU MANO YA /n CONDUCELE HASTA CRISTO, Y EL LE ENTREGARA... /nLA LUZ EN SU TINIEBLA, DE AMOR LE COLMARA.',
            },
            {
                estilo: '',
                texto: 'SI CERCA EL ENFERMO LE PUEDE CONTEMPLAR /n MUY GRANDE ES SU TRISTEZA Y ACERVO SU PENAR /nCONDUCELE HASTA CRISTO Y EL LE ENTREGARA CONSUELO A SU TRISTEZA, SU AMOR LE SANARA.',
            },
            {
                estilo: '',
                texto: 'SI CONTEMPLAS QUE INERTE TU HERMANO ESTA YA /nY SU ALMA CONFUNDIDA NO SABE DONDE VA /nHASLO PRESENTE A CRISTO EL LO RECIBIRA... /nPERDONARA SUS FALTAS Y RESUCITARA...',
            },
        ],
    },
    {
        id: '138',
        pag: '141',
        titulo: '¡QUE HERMOSO ES JEHOVA!',
        contenido: [
            {
                estilo: '',
                texto: 'QUE HERMOSO ES JEHOVA ENTREGA EL /nPERDON Y A TODOS SUS HIJOS NOS DA BENDICION, LLEVAS CARIDAD, LA LUZ /nY LA PAZ GUARDALAS EN TU ALMA UNA /nETERNIDAD.',
            },
            {
                estilo: '',
                texto: 'COROS',
            },
            {
                estilo: '',
                texto: 'QUE HERMOSO ES LLEVAR /nLA LUZ DEL SEÑOR /nQUE EN ERA DE GRACIA /nNOS DA EL REDENTOR...',
            },
            {
                estilo: '',
                texto: 'SUBLIME LECCION JESUS TE ENTREGO /nLLEVALE EN TU ALMA, ES TU SALVACION /nSUMISO SERAS A SU VOLUNTAD /nSEMBANDO EN EL MUNDO, AMOR Y HUMILDAD.',
            },
            {
                estilo: '',
                texto: 'ELIAS EL PASTOR, GUIA ESPIRITUAL /nCONDUCE AL REBAÑO SU AMOR PATERNAL /nY BUSCANDO VA CON SU CARIDAD /nLA PEQUEÑA OVEJA QUE EXTRAVIADA ESTA',
            },
            {
                estilo: '',
                texto: 'QUE HERMOSA ES MARIA, MADRE CELESTIAL /nCUBRE CON SU EFLUVIO A LA HUMANIDAD /nLLEVA EN SU REGAZO DE AMOR MATERNAL /nAL PEQUEÑO NIÑO LLORANDO VA.',
            },
        ],
    },
    {
        id: '139',
        pag: '142',
        titulo: 'ELIAS PROFETA',
        contenido: [
            {
                estilo: '',
                texto: '¡ELIAS PROFETA GUIA Y PASTOR /nCONDUCENOS, CONDUCENOSAL APRISCO DE TU AMOR!',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: '¡ELIAS PROFETA Y GUIA DE ISRAEL!/nEN EL DESIERTO Y EL MUNDO /nQUEREMOS ESCUCHAR TU VOZ./nEN EL DESIERTO Y EL MUNDO /nQUEREMOS ESCUCHAR TU VOZ.',
            },
            {
                estilo: '',
                texto: '¡ MUESTRANOS EL CAMINO /nPOR EL QUE HEMOS DE TRANSITAR !/nPARA QUE AHI NUESTRAS /nFALTAS PODAMOS LIMPIAR',
            },
            {
                estilo: '',
                texto: 'SE REPITE CORO)',
            },
            {
                estilo: '',
                texto: 'CON EL PODER DE TU LUZ/nENSEÑANOS A TRABAJAR /nPARA QUE ATRAVEZ DE NOSOTROS RECIBA LA HUMANIDAD.',
            },
            {
                estilo: '',
                texto: 'SE REPITE CORO)',
            },
            {
                estilo: '',
                texto: 'TOMAMOS EN TUS BRAZOS /nY ESCUCHA NUESTRO DOLOR /nY SANA NUESTRAS HERIDAS/nCON EL BALSAMO DE TU AMOR',
            },
            {
                estilo: '',
                texto: 'SE REPITE CORO)',
            },
        ],
    },
    {
        id: '140',
        pag: '143',
        titulo: 'MISERICORDIA 2',
        contenido: [
            {
                estilo: '',
                texto: 'ISRAEL ELEVA TU ESPIRITU /nAL ETERNO CREADOR DEL UNIVERSO /nPADRE ETERNO DE INFINITA BONDAD. /nENVIA TU LUZ, TU AMOR Y TU PAZ. /nTU MANO GUIE NUESTRO CAMINO GRABANDO TU LEY EN EL CORAZON.',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'MISERICORDIA PARA LA TIERRA /nQUE GIME Y LLORA MISERICORDIA /nMISERICORDIA PARA TU PUEBLO /nTUS escapeLeadingUnderscores, MISERICORDIA.',
            },
            {
                estilo: '',
                texto: 'ISRAEL ELEVA TU ESPIRITU /nAL ETERNO PODER DEL UNIVERSO /nPADRE ETERNO DE INFINITO PODER /nDETERN EL HAMBRE, LA GUERRA Y LA MUERTE /nTU MANO DETENGA LOS ELEMENTOS,  /nPARA QUE ENTREGUEN CON CARIDAD',
            },
            {
                estilo: '',
                texto: 'SE REPITE)',
            },
            {
                estilo: '',
                texto: 'ISRAEL ELEVA TU ESPIRITU /nA LA LUZ ETERNA LUZ DEL UNIVERSO /nETERNO PADRE DE INFINITO AMOR  /nESCUCHA NUESTRO CLAMOR /nY MANIFIESTA TU PRESENCIA /nEN NUESTRO CORAZON.',
            },
            {
                estilo: '',
                texto: 'SE REPITE)',
            },
        ],
    },
    {
        id: '141',
        pag: '144',
        titulo: 'TE SUPLICAMOS SEÑOR',
        contenido: [
            {
                estilo: '',
                texto: 'TE SUPLICAMOS SEÑOR /nQUE CON EL PODER DE TU DIESTRA /nNOS LIBERES DE LAS ATADURAS /nQUE IMPIDEN DEL ESPIRITU LA EVOLUCION  /nNOS LIBRES DE LAS ATADURAS /nQUE IMPIDEN DEL ESPIRITU LA EVOLUCION',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'BENDITO SEA TU REINO /nGLORIOSO ETERNAMENTE /nBENDITO SEA TU REINO /nGLORIOSO ETERNAMENTE.',
            },
            {
                estilo: '',
                texto: 'ESCUCHA LA SUPLICA DE TU PUEBLO /nY DANOS TU BENDICION  /nPROTEJENOS Y TRANSFORMANOS  /nCON EL PODER DE TU AMOR  /nPROTEJENOS Y TRANSFORMANOS  /nCON EL PODER DE TU AMOR.',
            },
            {
                estilo: '',
                texto: 'CORO',
            },
            {
                estilo: '',
                texto: 'BENDITO SEA TU REINO /nGLORIOSO ETERNAMENTE /nBENDITO SEA TU REINO /nGLORIOSO ETERNAMENTE',
            },
        ],
    },
]
