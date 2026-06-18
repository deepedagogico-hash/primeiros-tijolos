const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyDA1QsojZugAo4j1ZeU_si21GVHAf0ShH4AYoCuqrepPPy3hwcEMGMGPLhbIEHgiFy/exec';

/* ── 1. COORDENADAS — 399 MUNICÍPIOS DO PARANÁ ── */
const CITY_COORDS = {
  'Abatia': [-23.3006,-50.3125],
  'Adrianopolis': [-24.6617,-48.9917],
  'Agudos do Sul': [-25.9906,-49.3386],
  'Almirante Tamandare': [-25.3133,-49.3003],
  'Altamira do Parana': [-24.8011,-52.7097],
  'Alto Paraiso': [-23.5081,-53.7328],
  'Alto Parana': [-23.1272,-52.3217],
  'Alto Piquiri': [-24.0189,-53.4411],
  'Altonia': [-23.8708,-53.8919],
  'Alvorada do Sul': [-22.7803,-51.2292],
  'Amapora': [-23.0975,-52.7867],
  'Ampere': [-25.9169,-53.4733],
  'Andira': [-23.0517,-50.2264],
  'Angulo': [-23.1928,-51.9175],
  'Antonina': [-25.4303,-48.7128],
  'Antonio Olinto': [-25.9867,-50.1981],
  'Arapongas': [-23.4136,-51.4383],
  'Arapoti': [-24.1467,-49.8247],
  'Arapua': [-24.3086,-51.7914],
  'Araruna': [-23.9283,-52.4997],
  'Araucaria': [-25.5917,-49.4019],
  'Ariranha do Ivai': [-24.3833,-51.5881],
  'Assai': [-23.3728,-50.8417],
  'Assis Chateaubriand': [-24.4086,-53.5211],
  'Astorga': [-23.2367,-51.6697],
  'Atalaia': [-23.1517,-52.0558],
  'Balsa Nova': [-25.5786,-49.6317],
  'Bandeirantes': [-23.0925,-50.3719],
  'Barbosa Ferraz': [-24.0278,-52.0072],
  'Barra do Jacare': [-23.1206,-50.1878],
  'Barracao': [-26.2525,-53.635],
  'Bela Vista da Caroba': [-25.8794,-53.6661],
  'Bela Vista do Paraiso': [-22.9922,-51.1942],
  'Bituruna': [-26.1608,-51.5564],
  'Boa Esperanca': [-24.2394,-52.7928],
  'Boa Esperanca do Iguacu': [-25.6358,-53.2172],
  'Boa Ventura de Sao Roque': [-24.8786,-51.5394],
  'Boa Vista da Aparecida': [-25.4303,-53.4117],
  'Bocaiuva do Sul': [-25.215,-49.1058],
  'Bom Jesus do Sul': [-26.1928,-53.5997],
  'Bom Sucesso': [-23.7075,-51.7644],
  'Bom Sucesso do Sul': [-26.0744,-52.8319],
  'Borrazopolis': [-23.9378,-51.5844],
  'Braganey': [-24.815,-53.1211],
  'Brasilandia do Sul': [-24.1939,-53.5242],
  'Cafeara': [-22.7883,-51.715],
  'Cafelandia': [-24.6156,-53.325],
  'Cafezal do Sul': [-23.9047,-53.5111],
  'California': [-23.6661,-51.3581],
  'Cambara': [-23.0414,-50.0775],
  'Cambe': [-23.2817,-51.2778],
  'Cambira': [-23.6006,-51.5817],
  'Campina da Lagoa': [-24.595,-52.8136],
  'Campina do Simao': [-25.1025,-51.8147],
  'Campina Grande do Sul': [-25.3033,-49.0533],
  'Campo Bonito': [-25.0397,-52.9969],
  'Campo do Tenente': [-25.9811,-49.6903],
  'Campo Largo': [-25.4594,-49.5289],
  'Campo Magro': [-25.3681,-49.4278],
  'Campo Mourao': [-24.0411,-52.3811],
  'Candido de Abreu': [-24.5647,-51.3325],
  'Candoi': [-25.5681,-52.0556],
  'Cantagalo': [-25.3744,-52.1267],
  'Capanema': [-25.6831,-53.8003],
  'Capitao Leonidas Marques': [-25.4794,-53.6172],
  'Carambei': [-24.9508,-50.1131],
  'Carlopolis': [-23.4278,-49.7186],
  'Cascavel': [-24.9539,-53.4597],
  'Castro': [-24.7956,-50.0028],
  'Catanduvas': [-25.1964,-53.1536],
  'Centenario do Sul': [-22.815,-51.5936],
  'Cerro Azul': [-24.8189,-49.2603],
  'Ceu Azul': [-25.1497,-53.8572],
  'Chopinzinho': [-25.8547,-52.5339],
  'Cianorte': [-23.6539,-52.6092],
  'Cidade Gaucha': [-23.3742,-52.9406],
  'Clevelandia': [-26.4053,-52.3531],
  'Colombo': [-25.2944,-49.2275],
  'Colorado': [-22.8378,-51.9744],
  'Congonhinhas': [-23.5469,-50.5544],
  'Conselheiro Mairinck': [-23.6217,-50.1717],
  'Contenda': [-25.6808,-49.5317],
  'Corbelia': [-24.7997,-53.2964],
  'Cornelio Procopio': [-23.1833,-50.6514],
  'Coronel Domingos Soares': [-26.2267,-52.0344],
  'Coronel Vivida': [-25.9781,-52.5672],
  'Corumbatai do Sul': [-24.0975,-52.1242],
  'Cruzeiro do Iguacu': [-25.6167,-53.1269],
  'Cruzeiro do Oeste': [-23.7769,-53.0819],
  'Cruzeiro do Sul': [-22.9653,-52.1639],
  'Cruzmaltina': [-23.9933,-51.4442],
  'Curitiba': [-25.4331,-49.2719],
  'Curiuva': [-24.0358,-50.4594],
  'Diamante D\'Oeste': [-24.9422,-54.1036],
  'Diamante do Norte': [-22.6572,-52.8642],
  'Diamante do Sul': [-25.0353,-52.6881],
  'Dois Vizinhos': [-25.7461,-53.0547],
  'Douradina': [-23.3819,-53.2964],
  'Doutor Camargo': [-23.5558,-52.2228],
  'Doutor Ulysses': [-24.5678,-49.4197],
  'Eneas Marques': [-25.9408,-53.1661],
  'Engenheiro Beltrao': [-23.8011,-52.26],
  'Entre Rios do Oeste': [-24.7081,-54.245],
  'Esperanca Nova': [-23.7247,-53.8106],
  'Espigao Alto do Iguacu': [-25.4267,-52.8383],
  'Farol': [-24.0992,-52.6261],
  'Faxinal': [-24.0039,-51.32],
  'Fazenda Rio Grande': [-25.6414,-49.3233],
  'Fenix': [-23.9208,-51.9844],
  'Fernandes Pinheiro': [-25.4122,-50.5475],
  'Figueira': [-23.8433,-50.4092],
  'Flor da Serra do Sul': [-26.2553,-53.3086],
  'Florai': [-23.3197,-52.3031],
  'Floresta': [-23.6103,-52.0831],
  'Florestopolis': [-22.8592,-51.3839],
  'Florida': [-23.0878,-51.9558],
  'Formosa do Oeste': [-24.2942,-53.3161],
  'Foz do Iguacu': [-25.5425,-54.5872],
  'Foz do Jordao': [-25.7333,-52.1256],
  'Francisco Alves': [-24.0675,-53.8439],
  'Francisco Beltrao': [-26.0783,-53.0561],
  'General Carneiro': [-26.4258,-51.3169],
  'Godoy Moreira': [-24.1928,-51.9244],
  'Goioere': [-24.1892,-53.0272],
  'Goioxim': [-25.2017,-52.0056],
  'Grandes Rios': [-24.1461,-51.5086],
  'Guaira': [-24.0853,-54.2467],
  'Guairaca': [-22.9383,-52.6911],
  'Guamiranga': [-25.19,-50.81],
  'Guapirama': [-23.5167,-50.0425],
  'Guaporema': [-23.3431,-52.7783],
  'Guaraci': [-22.9744,-51.6503],
  'Guaraniacu': [-25.0986,-52.8697],
  'Guarapuava': [-25.3936,-51.4633],
  'Guaraquecaba': [-25.3006,-48.3261],
  'Guaratuba': [-25.8742,-48.5758],
  'Honorio Serpa': [-26.1431,-52.3831],
  'Ibaiti': [-23.8497,-50.1906],
  'Ibema': [-25.1128,-53.0231],
  'Icaraima': [-23.3967,-53.6256],
  'Iguaracu': [-23.1947,-51.8247],
  'Iguatu': [-24.7114,-53.0861],
  'Imbau': [-24.4428,-50.7494],
  'Imbituva': [-25.2306,-50.5975],
  'Inacio Martins': [-25.5722,-51.075],
  'Inaja': [-22.7492,-52.2022],
  'Indianopolis': [-23.4797,-52.7011],
  'Ipiranga': [-25.0131,-50.5811],
  'Ipora': [-24.0025,-53.7181],
  'Iracema do Oeste': [-24.4292,-53.3581],
  'Irati': [-25.4736,-50.6581],
  'Iretama': [-24.4211,-52.1017],
  'Itaguaje': [-22.6147,-51.9694],
  'Itaipulandia': [-25.1386,-54.305],
  'Itambaraca': [-23.0147,-50.4092],
  'Itambe': [-23.66,-51.99],
  'Itapejara D\'Oeste': [-25.9708,-52.8139],
  'Itaperucu': [-25.2144,-49.3428],
  'Itauna do Sul': [-22.7269,-52.885],
  'Ivai': [-25.0083,-50.8614],
  'Ivaipora': [-24.2419,-51.6744],
  'Ivate': [-23.4097,-53.3739],
  'Ivatuba': [-23.6183,-52.2178],
  'Jaboti': [-23.7358,-50.0733],
  'Jacarezinho': [-23.16,-49.9786],
  'Jaguapita': [-23.1178,-51.5406],
  'Jaguariaiva': [-24.2531,-49.7122],
  'Jandaia do Sul': [-23.6011,-51.6433],
  'Janiopolis': [-24.1414,-52.7825],
  'Japira': [-23.8075,-50.1386],
  'Japura': [-23.4686,-52.5567],
  'Jardim Alegre': [-24.1811,-51.6944],
  'Jardim Olinda': [-22.5525,-52.0381],
  'Jataizinho': [-23.2572,-50.9742],
  'Jesuitas': [-24.3772,-53.3881],
  'Joaquim Tavora': [-23.5006,-49.9244],
  'Jundiai do Sul': [-23.4378,-50.2494],
  'Juranda': [-24.4164,-52.8444],
  'Jussara': [-23.6164,-52.4731],
  'Kalore': [-23.8233,-51.6653],
  'Lapa': [-25.765,-49.7186],
  'Laranjal': [-24.8883,-52.4717],
  'Laranjeiras do Sul': [-25.4017,-52.4089],
  'Leopolis': [-23.08,-50.755],
  'Lidianopolis': [-24.1067,-51.6542],
  'Lindoeste': [-25.2561,-53.5772],
  'Loanda': [-22.9303,-53.1344],
  'Lobato': [-23.0042,-51.9536],
  'Londrina': [-23.3122,-51.1628],
  'Luiziana': [-24.28,-52.2819],
  'Lunardelli': [-24.0781,-51.7444],
  'Lupionopolis': [-22.7519,-51.6569],
  'Mallet': [-25.8739,-50.8275],
  'Mambore': [-24.3219,-52.5292],
  'Mamboro': [-24.3219,-52.5292],
  'Mandaguacu': [-23.3428,-52.0942],
  'Mandaguari': [-23.5175,-51.6814],
  'Mandirituba': [-25.7597,-49.3228],
  'Manfrinopolis': [-26.1439,-53.3125],
  'Mangueirinha': [-25.9431,-52.1764],
  'Manoel Ribas': [-24.5217,-51.6692],
  'Maria Helena': [-23.6175,-53.2047],
  'Marialva': [-23.4847,-51.7981],
  'Marilandia do Sul': [-23.7458,-51.3092],
  'Marilena': [-22.7319,-53.0372],
  'Mariluz': [-24.0036,-53.1514],
  'Maringa': [-23.4222,-51.94],
  'Mariopolis': [-26.3558,-52.5578],
  'Maripa': [-24.4172,-53.8336],
  'Marmeleiro': [-26.1486,-53.0261],
  'Marquinho': [-25.1122,-52.2569],
  'Marumbi': [-23.7064,-51.6411],
  'Matelandia': [-25.2381,-53.9744],
  'Matinhos': [-25.8164,-48.5339],
  'Mato Rico': [-24.7072,-52.1464],
  'Maua da Serra': [-23.9014,-51.2264],
  'Medianeira': [-25.2925,-54.0917],
  'Mercedes': [-24.4489,-54.1644],
  'Mirador': [-23.2575,-52.7769],
  'Miraselva': [-22.9661,-51.4858],
  'Missal': [-25.0911,-54.2431],
  'Moreira Sales': [-24.0447,-53.0133],
  'Morretes': [-25.4786,-48.8317],
  'Munhoz de Melo': [-23.1456,-51.7758],
  'Nossa Senhora das Gracas': [-22.9106,-51.7953],
  'Nova Alianca do Ivai': [-23.1775,-52.6019],
  'Nova America da Colina': [-23.3328,-50.7144],
  'Nova Aurora': [-24.5286,-53.2575],
  'Nova Cantu': [-24.6708,-52.5711],
  'Nova Esperanca': [-23.1842,-52.205],
  'Nova Esperanca do Sudoeste': [-25.8989,-53.2642],
  'Nova Fatima': [-23.4322,-50.5622],
  'Nova Laranjeiras': [-25.3067,-52.5394],
  'Nova Londrina': [-22.7639,-52.9864],
  'Nova Olimpia': [-23.4711,-53.0911],
  'Nova Prata do Iguacu': [-25.6319,-53.3481],
  'Nova Santa Barbara': [-23.5856,-50.7642],
  'Nova Santa Rosa': [-24.4647,-53.955],
  'Nova Tebas': [-24.4383,-51.9503],
  'Novo Itacolomi': [-23.7653,-51.5069],
  'Ortigueira': [-24.2119,-50.9269],
  'Ourizona': [-23.4044,-52.195],
  'Ouro Verde do Oeste': [-24.7708,-53.8994],
  'Paicandu': [-23.4578,-52.0525],
  'Palmas': [-26.4814,-51.9889],
  'Palmeira': [-25.4186,-50.0033],
  'Palmital': [-24.8822,-52.2131],
  'Palotina': [-24.2794,-53.8389],
  'Paraiso do Norte': [-23.2872,-52.6036],
  'Paranacity': [-22.9269,-52.1561],
  'Paranagua': [-25.5069,-48.5247],
  'Paranapoema': [-22.6556,-52.0808],
  'Paranavai': [-23.0819,-52.4625],
  'Pato Bragado': [-24.6256,-54.2314],
  'Pato Branco': [-26.23,-52.6775],
  'Paula Freitas': [-26.22,-50.9347],
  'Paulo Frontin': [-26.0456,-50.8333],
  'Peabiru': [-23.9142,-52.3478],
  'Perobal': [-23.8944,-53.4114],
  'Perola': [-23.7975,-53.6733],
  'Perola D\'Oeste': [-25.8283,-53.74],
  'Pien': [-26.0969,-49.4283],
  'Pinhais': [-25.4422,-49.1992],
  'Pinhal de Sao Bento': [-26.0328,-53.4831],
  'Pinhalao': [-23.7872,-50.0625],
  'Pinhao': [-25.6964,-51.6483],
  'Piraquara': [-25.4467,-49.0653],
  'Pitanga': [-24.7528,-51.7631],
  'Pitangueiras': [-23.2303,-51.5858],
  'Planaltina do Parana': [-23.0189,-52.9178],
  'Planalto': [-25.7122,-53.7708],
  'Ponta Grossa': [-25.0925,-50.1614],
  'Pontal do Parana': [-25.5942,-48.4483],
  'Porecatu': [-22.7561,-51.3775],
  'Porto Amazonas': [-25.5417,-49.8897],
  'Porto Barreiro': [-25.5453,-52.4047],
  'Porto Rico': [-22.7783,-53.2681],
  'Porto Vitoria': [-26.1636,-51.2367],
  'Prado Ferreira': [-23.0339,-51.4433],
  'Pranchita': [-26.0156,-53.7425],
  'Presidente Castelo Branco': [-23.2817,-52.1578],
  'Primeiro de Maio': [-22.8525,-51.0278],
  'Prudentopolis': [-25.2161,-50.9836],
  'Quatigua': [-23.5642,-49.9153],
  'Quatro Barras': [-25.3736,-49.0853],
  'Quatro Pontes': [-24.5733,-53.9728],
  'Quedas do Iguacu': [-25.4567,-52.9097],
  'Querencia do Norte': [-23.0867,-53.4869],
  'Quinta do Sol': [-23.8439,-52.135],
  'Quitandinha': [-25.8683,-49.4967],
  'Ramilandia': [-25.1189,-54.0272],
  'Rancho Alegre': [-23.0758,-50.9164],
  'Rancho Alegre D\'Oeste': [-24.3089,-52.9511],
  'Realeza': [-25.7625,-53.5325],
  'Reboucas': [-25.6264,-50.6814],
  'Renascenca': [-26.1561,-52.9722],
  'Reserva': [-24.6517,-50.8506],
  'Reserva do Iguacu': [-25.8308,-52.0289],
  'Ribeirao Claro': [-23.1964,-49.7564],
  'Ribeirao do Pinhal': [-23.4083,-50.3581],
  'Rio Azul': [-25.7161,-50.7872],
  'Rio Bom': [-23.7622,-51.4153],
  'Rio Bonito do Iguacu': [-25.4869,-52.5269],
  'Rio Branco do Ivai': [-24.3203,-51.3119],
  'Rio Branco do Sul': [-25.1903,-49.3167],
  'Rio Negro': [-26.1003,-49.7978],
  'Rolandia': [-23.3136,-51.3628],
  'Roncador': [-24.595,-52.2761],
  'Rondon': [-23.4128,-52.7625],
  'Rosario do Ivai': [-24.2536,-51.25],
  'Sabaudia': [-23.3183,-51.5567],
  'Salgado Filho': [-26.1706,-53.3622],
  'Salto do Itarare': [-23.6058,-49.6308],
  'Salto do Lontra': [-25.7767,-53.315],
  'Santa Amelia': [-23.2681,-50.4233],
  'Santa Cecilia do Pavao': [-23.5128,-50.7828],
  'Santa Cruz de Monte Castelo': [-22.9586,-53.2972],
  'Santa Fe': [-23.0361,-51.8064],
  'Santa Helena': [-24.8572,-54.3364],
  'Santa Ines': [-22.6386,-51.9028],
  'Santa Isabel do Ivai': [-23.0011,-53.1958],
  'Santa Izabel do Oeste': [-25.8144,-53.4836],
  'Santa Lucia': [-25.4114,-53.5711],
  'Santa Maria do Oeste': [-24.9342,-51.8678],
  'Santa Mariana': [-23.1464,-50.5211],
  'Santa Monica': [-23.1056,-53.1114],
  'Santa Tereza do Oeste': [-25.0586,-53.6272],
  'Santa Terezinha de Itaipu': [-25.4422,-54.3994],
  'Santana do Itarare': [-23.7531,-49.6333],
  'Santo Antonio da Platina': [-23.2969,-50.0772],
  'Santo Antonio do Caiua': [-22.7339,-52.3447],
  'Santo Antonio do Paraiso': [-23.4947,-50.6469],
  'Santo Antonio do Sudoeste': [-26.075,-53.7231],
  'Santo Inacio': [-22.7,-51.7953],
  'Sao Carlos do Ivai': [-23.3089,-52.4772],
  'Sao Jeronimo da Serra': [-23.7233,-50.7386],
  'Sao Joao': [-25.8247,-52.7294],
  'Sao Joao do Caiua': [-22.8544,-52.3397],
  'Sao Joao do Ivai': [-23.9931,-51.8203],
  'Sao Joao do Triunfo': [-25.6919,-50.3081],
  'Sao Jorge D\'Oeste': [-25.715,-52.92],
  'Sao Jorge do Ivai': [-23.4356,-52.2944],
  'Sao Jorge do Patrocinio': [-23.7583,-53.8833],
  'Sao Jose da Boa Vista': [-23.9156,-49.6511],
  'Sao Jose das Palmeiras': [-24.8342,-54.06],
  'Sao Jose dos Pinhais': [-25.5378,-49.2],
  'Sao Manoel do Parana': [-23.3961,-52.6469],
  'Sao Mateus do Sul': [-25.8697,-50.3906],
  'Sao Miguel do Iguacu': [-25.3489,-54.2422],
  'Sao Pedro do Iguacu': [-24.9308,-53.86],
  'Sao Pedro do Ivai': [-23.8678,-51.8569],
  'Sao Pedro do Parana': [-22.825,-53.2231],
  'Sao Sebastiao da Amoreira': [-23.4606,-50.7625],
  'Sao Tome': [-23.5356,-52.5925],
  'Sapopema': [-23.9072,-50.5797],
  'Sarandi': [-23.4431,-51.8736],
  'Saudade do Iguacu': [-25.6936,-52.6144],
  'Senges': [-24.1169,-49.4731],
  'Serranopolis do Iguacu': [-25.38,-54.0583],
  'Sertaneja': [-23.0369,-50.8172],
  'Sertanopolis': [-23.0586,-51.0422],
  'Siqueira Campos': [-23.6878,-49.8314],
  'Sulina': [-25.6997,-52.7167],
  'Tamarana': [-23.7153,-51.0986],
  'Tamboara': [-23.2019,-52.5006],
  'Tapejara': [-23.7325,-52.8642],
  'Tapira': [-23.3172,-53.0753],
  'Teixeira Soares': [-25.38,-50.4656],
  'Telemaco Borba': [-24.3286,-50.6231],
  'Terra Boa': [-23.7669,-52.4622],
  'Terra Rica': [-22.7244,-52.6247],
  'Terra Roxa': [-24.1675,-54.0986],
  'Tibagi': [-24.5133,-50.4114],
  'Tijucas do Sul': [-25.9203,-49.1822],
  'Toledo': [-24.7319,-53.7414],
  'Tomazina': [-23.7792,-49.9553],
  'Tres Barras do Parana': [-25.4194,-53.1875],
  'Tunas do Parana': [-24.9725,-49.0861],
  'Tuneiras do Oeste': [-23.8642,-52.8744],
  'Tupassi': [-24.5797,-53.5144],
  'Turvo': [-25.04,-51.5328],
  'Ubirata': [-24.5411,-52.9944],
  'Umuarama': [-23.7639,-53.3083],
  'Uniao da Vitoria': [-26.2283,-51.0906],
  'Uniflor': [-23.0861,-52.16],
  'Urai': [-23.2003,-50.7975],
  'Ventania': [-24.2442,-50.2475],
  'Vera Cruz do Oeste': [-25.0631,-53.88],
  'Vere': [-25.8806,-52.9086],
  'Virmond': [-25.3789,-52.2025],
  'Vitorino': [-26.2644,-52.7769],
  'Wenceslau Braz': [-23.8706,-49.8031],
  'Xambre': [-23.7383,-53.4869]
};

/* ── 2. MAPA NRE POR MUNICÍPIO ── */
const NRE_MAP = {
  'Abatia': 'Jacarezinho',
  'Adrianopolis': 'Área Metropolitana Norte',
  'Agudos do Sul': 'Área Metropolitana Sul',
  'Almirante Tamandare': 'Área Metropolitana Norte',
  'Altamira do Parana': 'Campo Mourão',
  'Alto Paraiso': 'Umuarama',
  'Alto Parana': 'Paranavaí',
  'Alto Piquiri': 'Umuarama',
  'Altonia': 'Umuarama',
  'Alvorada do Sul': 'Londrina',
  'Amapora': 'Paranavaí',
  'Ampere': 'Francisco Beltrão',
  'Andira': 'Jacarezinho',
  'Angulo': 'Maringá',
  'Antonina': 'Paranaguá',
  'Antonio Olinto': 'União da Vitória',
  'Arapongas': 'Apucarana',
  'Arapoti': 'Wenceslau Braz',
  'Arapua': 'Ivaiporã',
  'Araruna': 'Campo Mourão',
  'Araucaria': 'Área Metropolitana Sul',
  'Ariranha do Ivai': 'Ivaiporã',
  'Assai': 'Cornélio Procópio',
  'Assis Chateaubriand': 'Assis Chateaubriand',
  'Astorga': 'Maringá',
  'Atalaia': 'Maringá',
  'Balsa Nova': 'Área Metropolitana Sul',
  'Bandeirantes': 'Cornélio Procópio',
  'Barbosa Ferraz': 'Campo Mourão',
  'Barra do Jacare': 'Jacarezinho',
  'Barracao': 'Francisco Beltrão',
  'Bela Vista da Caroba': 'Francisco Beltrão',
  'Bela Vista do Paraiso': 'Londrina',
  'Bituruna': 'União da Vitória',
  'Boa Esperanca': 'Goioerê',
  'Boa Esperanca do Iguacu': 'Dois Vizinhos',
  'Boa Ventura de Sao Roque': 'Pitanga',
  'Boa Vista da Aparecida': 'Cascavel',
  'Bocaiuva do Sul': 'Área Metropolitana Norte',
  'Bom Jesus do Sul': 'Francisco Beltrão',
  'Bom Sucesso': 'Apucarana',
  'Bom Sucesso do Sul': 'Pato Branco',
  'Borrazopolis': 'Apucarana',
  'Braganey': 'Cascavel',
  'Brasilandia do Sul': 'Assis Chateaubriand',
  'Cafeara': 'Londrina',
  'Cafelandia': 'Cascavel',
  'Cafezal do Sul': 'Umuarama',
  'California': 'Apucarana',
  'Cambara': 'Jacarezinho',
  'Cambe': 'Londrina',
  'Cambira': 'Apucarana',
  'Campina da Lagoa': 'Campo Mourão',
  'Campina do Simao': 'Guarapuava',
  'Campina Grande do Sul': 'Área Metropolitana Norte',
  'Campo Bonito': 'Cascavel',
  'Campo do Tenente': 'Área Metropolitana Sul',
  'Campo Largo': 'Área Metropolitana Sul',
  'Campo Magro': 'Área Metropolitana Norte',
  'Campo Mourao': 'Campo Mourão',
  'Candido de Abreu': 'Ivaiporã',
  'Candoi': 'Guarapuava',
  'Cantagalo': 'Laranjeiras do Sul',
  'Capanema': 'Francisco Beltrão',
  'Capitao Leonidas Marques': 'Cascavel',
  'Carambei': 'Ponta Grossa',
  'Carlopolis': 'Jacarezinho',
  'Cascavel': 'Cascavel',
  'Castro': 'Ponta Grossa',
  'Catanduvas': 'Cascavel',
  'Centenario do Sul': 'Londrina',
  'Cerro Azul': 'Área Metropolitana Norte',
  'Ceu Azul': 'Cascavel',
  'Chopinzinho': 'Pato Branco',
  'Cianorte': 'Cianorte',
  'Cidade Gaucha': 'Cianorte',
  'Clevelandia': 'Pato Branco',
  'Colombo': 'Área Metropolitana Norte',
  'Colorado': 'Maringá',
  'Congonhinhas': 'Cornélio Procópio',
  'Conselheiro Mairinck': 'Ibaiti',
  'Contenda': 'Área Metropolitana Sul',
  'Corbelia': 'Cascavel',
  'Cornelio Procopio': 'Cornélio Procópio',
  'Coronel Domingos Soares': 'Pato Branco',
  'Coronel Vivida': 'Pato Branco',
  'Corumbatai do Sul': 'Campo Mourão',
  'Cruzeiro do Iguacu': 'Dois Vizinhos',
  'Cruzeiro do Oeste': 'Umuarama',
  'Cruzeiro do Sul': 'Paranavaí',
  'Cruzmaltina': 'Apucarana',
  'Curitiba': 'Curitiba',
  'Curiuva': 'Telêmaco Borba',
  'Diamante D\'Oeste': 'Toledo',
  'Diamante do Norte': 'Loanda',
  'Diamante do Sul': 'Laranjeiras do Sul',
  'Dois Vizinhos': 'Dois Vizinhos',
  'Douradina': 'Umuarama',
  'Doutor Camargo': 'Maringá',
  'Doutor Ulysses': 'Área Metropolitana Norte',
  'Eneas Marques': 'Francisco Beltrão',
  'Engenheiro Beltrao': 'Campo Mourão',
  'Entre Rios do Oeste': 'Toledo',
  'Esperanca Nova': 'Umuarama',
  'Espigao Alto do Iguacu': 'Laranjeiras do Sul',
  'Farol': 'Campo Mourão',
  'Faxinal': 'Apucarana',
  'Fazenda Rio Grande': 'Área Metropolitana Sul',
  'Fenix': 'Campo Mourão',
  'Fernandes Pinheiro': 'Irati',
  'Figueira': 'Ibaiti',
  'Flor da Serra do Sul': 'Francisco Beltrão',
  'Florai': 'Maringá',
  'Floresta': 'Maringá',
  'Florestopolis': 'Londrina',
  'Florida': 'Maringá',
  'Formosa do Oeste': 'Assis Chateaubriand',
  'Foz do Iguacu': 'Foz do Iguaçu',
  'Foz do Jordao': 'Guarapuava',
  'Francisco Alves': 'Umuarama',
  'Francisco Beltrao': 'Francisco Beltrão',
  'General Carneiro': 'União da Vitória',
  'Godoy Moreira': 'Ivaiporã',
  'Goioere': 'Goioerê',
  'Goioxim': 'Guarapuava',
  'Grandes Rios': 'Ivaiporã',
  'Guaira': 'Toledo',
  'Guairaca': 'Paranavaí',
  'Guamiranga': 'Irati',
  'Guapirama': 'Ibaiti',
  'Guaporema': 'Cianorte',
  'Guaraci': 'Londrina',
  'Guaraniacu': 'Cascavel',
  'Guarapuava': 'Guarapuava',
  'Guaraquecaba': 'Paranaguá',
  'Guaratuba': 'Paranaguá',
  'Honorio Serpa': 'Pato Branco',
  'Ibaiti': 'Ibaiti',
  'Ibema': 'Cascavel',
  'Icaraima': 'Umuarama',
  'Iguaracu': 'Maringá',
  'Iguatu': 'Cascavel',
  'Imbau': 'Telêmaco Borba',
  'Imbituva': 'Ponta Grossa',
  'Inacio Martins': 'Irati',
  'Inaja': 'Paranavaí',
  'Indianopolis': 'Cianorte',
  'Ipiranga': 'Ponta Grossa',
  'Ipora': 'Umuarama',
  'Iracema do Oeste': 'Assis Chateaubriand',
  'Irati': 'Irati',
  'Iretama': 'Campo Mourão',
  'Itaguaje': 'Paranavaí',
  'Itaipulandia': 'Foz do Iguaçu',
  'Itambaraca': 'Cornélio Procópio',
  'Itambe': 'Maringá',
  'Itapejara D\'Oeste': 'Pato Branco',
  'Itaperucu': 'Área Metropolitana Norte',
  'Itauna do Sul': 'Loanda',
  'Ivai': 'Ponta Grossa',
  'Ivaipora': 'Ivaiporã',
  'Ivate': 'Umuarama',
  'Ivatuba': 'Maringá',
  'Jaboti': 'Ibaiti',
  'Jacarezinho': 'Jacarezinho',
  'Jaguapita': 'Londrina',
  'Jaguariaiva': 'Wenceslau Braz',
  'Jandaia do Sul': 'Apucarana',
  'Janiopolis': 'Goioerê',
  'Japira': 'Ibaiti',
  'Japura': 'Cianorte',
  'Jardim Alegre': 'Ivaiporã',
  'Jardim Olinda': 'Paranavaí',
  'Jataizinho': 'Cornélio Procópio',
  'Jesuitas': 'Assis Chateaubriand',
  'Joaquim Tavora': 'Jacarezinho',
  'Jundiai do Sul': 'Jacarezinho',
  'Juranda': 'Goioerê',
  'Jussara': 'Cianorte',
  'Kalore': 'Apucarana',
  'Lapa': 'Área Metropolitana Sul',
  'Laranjal': 'Pitanga',
  'Laranjeiras do Sul': 'Laranjeiras do Sul',
  'Leopolis': 'Cornélio Procópio',
  'Lidianopolis': 'Ivaiporã',
  'Lindoeste': 'Cascavel',
  'Loanda': 'Loanda',
  'Lobato': 'Maringá',
  'Londrina': 'Londrina',
  'Luiziana': 'Campo Mourão',
  'Lunardelli': 'Ivaiporã',
  'Lupionopolis': 'Londrina',
  'Mallet': 'Irati',
  'Mambore': 'Campo Mourão',
  'Mandaguacu': 'Maringá',
  'Mandaguari': 'Maringá',
  'Mandirituba': 'Área Metropolitana Sul',
  'Manfrinopolis': 'Francisco Beltrão',
  'Mangueirinha': 'Pato Branco',
  'Manoel Ribas': 'Ivaiporã',
  'Maria Helena': 'Umuarama',
  'Marialva': 'Maringá',
  'Marilandia do Sul': 'Apucarana',
  'Marilena': 'Loanda',
  'Mariluz': 'Goioerê',
  'Maringa': 'Maringá',
  'Mariopolis': 'Pato Branco',
  'Maripa': 'Toledo',
  'Marmeleiro': 'Francisco Beltrão',
  'Marquinho': 'Laranjeiras do Sul',
  'Marumbi': 'Apucarana',
  'Matelandia': 'Foz do Iguaçu',
  'Matinhos': 'Paranaguá',
  'Mato Rico': 'Pitanga',
  'Maua da Serra': 'Apucarana',
  'Medianeira': 'Foz do Iguaçu',
  'Mercedes': 'Toledo',
  'Mirador': 'Paranavaí',
  'Miraselva': 'Londrina',
  'Missal': 'Foz do Iguaçu',
  'Moreira Sales': 'Goioerê',
  'Morretes': 'Paranaguá',
  'Munhoz de Melo': 'Maringá',
  'Nossa Senhora das Gracas': 'Maringá',
  'Nova Alianca do Ivai': 'Paranavaí',
  'Nova America da Colina': 'Cornélio Procópio',
  'Nova Aurora': 'Assis Chateaubriand',
  'Nova Cantu': 'Campo Mourão',
  'Nova Esperanca': 'Paranavaí',
  'Nova Esperanca do Sudoeste': 'Dois Vizinhos',
  'Nova Fatima': 'Cornélio Procópio',
  'Nova Laranjeiras': 'Laranjeiras do Sul',
  'Nova Londrina': 'Loanda',
  'Nova Olimpia': 'Umuarama',
  'Nova Prata do Iguacu': 'Dois Vizinhos',
  'Nova Santa Barbara': 'Cornélio Procópio',
  'Nova Santa Rosa': 'Toledo',
  'Nova Tebas': 'Pitanga',
  'Novo Itacolomi': 'Apucarana',
  'Ortigueira': 'Telêmaco Borba',
  'Ourizona': 'Maringá',
  'Ouro Verde do Oeste': 'Toledo',
  'Paicandu': 'Maringá',
  'Palmas': 'Pato Branco',
  'Palmeira': 'Ponta Grossa',
  'Palmital': 'Pitanga',
  'Palotina': 'Toledo',
  'Paraiso do Norte': 'Paranavaí',
  'Paranacity': 'Paranavaí',
  'Paranagua': 'Paranaguá',
  'Paranapoema': 'Paranavaí',
  'Paranavai': 'Paranavaí',
  'Pato Bragado': 'Toledo',
  'Pato Branco': 'Pato Branco',
  'Paula Freitas': 'União da Vitória',
  'Paulo Frontin': 'União da Vitória',
  'Peabiru': 'Campo Mourão',
  'Perobal': 'Umuarama',
  'Perola': 'Umuarama',
  'Perola D\'Oeste': 'Francisco Beltrão',
  'Pien': 'Área Metropolitana Sul',
  'Pinhais': 'Área Metropolitana Norte',
  'Pinhal de Sao Bento': 'Francisco Beltrão',
  'Pinhalao': 'Ibaiti',
  'Pinhao': 'Guarapuava',
  'Piraquara': 'Área Metropolitana Norte',
  'Pitanga': 'Pitanga',
  'Pitangueiras': 'Londrina',
  'Planaltina do Parana': 'Loanda',
  'Planalto': 'Francisco Beltrão',
  'Ponta Grossa': 'Ponta Grossa',
  'Pontal do Parana': 'Paranaguá',
  'Porecatu': 'Londrina',
  'Porto Amazonas': 'Ponta Grossa',
  'Porto Barreiro': 'Laranjeiras do Sul',
  'Porto Rico': 'Loanda',
  'Porto Vitoria': 'União da Vitória',
  'Prado Ferreira': 'Londrina',
  'Pranchita': 'Francisco Beltrão',
  'Presidente Castelo Branco': 'Maringá',
  'Primeiro de Maio': 'Londrina',
  'Prudentopolis': 'Irati',
  'Quatigua': 'Jacarezinho',
  'Quatro Barras': 'Área Metropolitana Norte',
  'Quatro Pontes': 'Toledo',
  'Quedas do Iguacu': 'Laranjeiras do Sul',
  'Querencia do Norte': 'Loanda',
  'Quinta do Sol': 'Campo Mourão',
  'Quitandinha': 'Área Metropolitana Sul',
  'Ramilandia': 'Foz do Iguaçu',
  'Rancho Alegre': 'Cornélio Procópio',
  'Rancho Alegre D\'Oeste': 'Goioerê',
  'Realeza': 'Francisco Beltrão',
  'Reboucas': 'Irati',
  'Renascenca': 'Francisco Beltrão',
  'Reserva': 'Telêmaco Borba',
  'Reserva do Iguacu': 'Guarapuava',
  'Ribeirao Claro': 'Jacarezinho',
  'Ribeirao do Pinhal': 'Jacarezinho',
  'Rio Azul': 'Irati',
  'Rio Bom': 'Apucarana',
  'Rio Bonito do Iguacu': 'Laranjeiras do Sul',
  'Rio Branco do Ivai': 'Ivaiporã',
  'Rio Branco do Sul': 'Área Metropolitana Norte',
  'Rio Negro': 'Área Metropolitana Sul',
  'Rolandia': 'Londrina',
  'Roncador': 'Campo Mourão',
  'Rondon': 'Cianorte',
  'Rosario do Ivai': 'Ivaiporã',
  'Sabaudia': 'Apucarana',
  'Salgado Filho': 'Francisco Beltrão',
  'Salto do Itarare': 'Wenceslau Braz',
  'Salto do Lontra': 'Dois Vizinhos',
  'Santa Amelia': 'Cornélio Procópio',
  'Santa Cecilia do Pavao': 'Cornélio Procópio',
  'Santa Cruz de Monte Castelo': 'Loanda',
  'Santa Fe': 'Maringá',
  'Santa Helena': 'Toledo',
  'Santa Ines': 'Paranavaí',
  'Santa Isabel do Ivai': 'Loanda',
  'Santa Izabel do Oeste': 'Francisco Beltrão',
  'Santa Lucia': 'Cascavel',
  'Santa Maria do Oeste': 'Pitanga',
  'Santa Mariana': 'Cornélio Procópio',
  'Santa Monica': 'Loanda',
  'Santa Tereza do Oeste': 'Cascavel',
  'Santa Terezinha de Itaipu': 'Foz do Iguaçu',
  'Santana do Itarare': 'Wenceslau Braz',
  'Santo Antonio da Platina': 'Jacarezinho',
  'Santo Antonio do Caiua': 'Paranavaí',
  'Santo Antonio do Paraiso': 'Cornélio Procópio',
  'Santo Antonio do Sudoeste': 'Francisco Beltrão',
  'Santo Inacio': 'Maringá',
  'Sao Carlos do Ivai': 'Paranavaí',
  'Sao Jeronimo da Serra': 'Cornélio Procópio',
  'Sao Joao': 'Pato Branco',
  'Sao Joao do Caiua': 'Paranavaí',
  'Sao Joao do Ivai': 'Ivaiporã',
  'Sao Joao do Triunfo': 'Ponta Grossa',
  'Sao Jorge D\'Oeste': 'Dois Vizinhos',
  'Sao Jorge do Ivai': 'Maringá',
  'Sao Jorge do Patrocinio': 'Umuarama',
  'Sao Jose da Boa Vista': 'Wenceslau Braz',
  'Sao Jose das Palmeiras': 'Toledo',
  'Sao Jose dos Pinhais': 'Área Metropolitana Sul',
  'Sao Manoel do Parana': 'Cianorte',
  'Sao Mateus do Sul': 'União da Vitória',
  'Sao Miguel do Iguacu': 'Foz do Iguaçu',
  'Sao Pedro do Iguacu': 'Toledo',
  'Sao Pedro do Ivai': 'Ivaiporã',
  'Sao Pedro do Parana': 'Loanda',
  'Sao Sebastiao da Amoreira': 'Cornélio Procópio',
  'Sao Tome': 'Cianorte',
  'Sapopema': 'Telêmaco Borba',
  'Sarandi': 'Maringá',
  'Saudade do Iguacu': 'Pato Branco',
  'Senges': 'Wenceslau Braz',
  'Serranopolis do Iguacu': 'Foz do Iguaçu',
  'Sertaneja': 'Cornélio Procópio',
  'Sertanopolis': 'Londrina',
  'Siqueira Campos': 'Ibaiti',
  'Sulina': 'Pato Branco',
  'Tamarana': 'Londrina',
  'Tamboara': 'Paranavaí',
  'Tapejara': 'Cianorte',
  'Tapira': 'Umuarama',
  'Teixeira Soares': 'Irati',
  'Telemaco Borba': 'Telêmaco Borba',
  'Terra Boa': 'Cianorte',
  'Terra Rica': 'Paranavaí',
  'Terra Roxa': 'Toledo',
  'Tibagi': 'Ponta Grossa',
  'Tijucas do Sul': 'Área Metropolitana Sul',
  'Toledo': 'Toledo',
  'Tomazina': 'Ibaiti',
  'Tres Barras do Parana': 'Cascavel',
  'Tunas do Parana': 'Área Metropolitana Norte',
  'Tuneiras do Oeste': 'Cianorte',
  'Tupassi': 'Assis Chateaubriand',
  'Turvo': 'Guarapuava',
  'Ubirata': 'Goioerê',
  'Umuarama': 'Umuarama',
  'Uniao da Vitoria': 'União da Vitória',
  'Uniflor': 'Paranavaí',
  'Urai': 'Cornélio Procópio',
  'Ventania': 'Telêmaco Borba',
  'Vera Cruz do Oeste': 'Cascavel',
  'Vere': 'Francisco Beltrão',
  'Virmond': 'Laranjeiras do Sul',
  'Vitorino': 'Pato Branco',
  'Wenceslau Braz': 'Wenceslau Braz',
  'Xambre': 'Umuarama'
};

function getCityLatLng(cityName) {
  if (!cityName) return [-25.4290,-51.2700];

  const normalized = cityName
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  if (CITY_COORDS[normalized]) {
    return CITY_COORDS[normalized];
  }

  const key = Object.keys(CITY_COORDS).find(k => {
    const nk = k
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return (
      normalized.toLowerCase().includes(nk.toLowerCase()) ||
      nk.toLowerCase().includes(normalized.toLowerCase())
    );
  });

  return key
    ? CITY_COORDS[key]
    : [-25.4290,-51.2700];
}

function getNRE(cityName) {
  const normalized = cityName
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  return NRE_MAP[normalized] || '';
}

/* ── 3. DADOS DE EXEMPLO ── */
const seedMurals = [
  {id:1,school:'Colégio Estadual do Paraná',city:'Curitiba',nre:'Curitiba',stage:'Ensino Médio',people:64,action:'Ampliar as formas de expressão da aprendizagem.',actions:['Expressão','Acessibilidade','Escuta'],color:'blue'},
  {id:2,school:'Colégio Estadual Vicente Rijo',city:'Londrina',nre:'Londrina',stage:'Ensino Médio',people:38,action:'Criar momentos de escuta ativa com os estudantes.',actions:['Escuta','Acolhimento','Autonomia'],color:'yellow'},
  {id:3,school:'C.E. Regente Feijó',city:'Ponta Grossa',nre:'Ponta Grossa',stage:'Ensino Médio',people:42,action:'Planejar experiências com diferentes níveis de apoio.',actions:['Inclusão','Colaboração','Acessibilidade'],color:'coral'},
  {id:4,school:'C.E. Wilson Joffre',city:'Cascavel',nre:'Cascavel',stage:'Ensino Fundamental',people:31,action:'Fortalecer o pertencimento por meio de projetos coletivos.',actions:['Pertencimento','Colaboração','Escuta'],color:'yellow'},
  {id:5,school:'C.E. Francisco Carneiro Martins',city:'Guarapuava',nre:'Guarapuava',stage:'Ensino Médio',people:27,action:'Oferecer escolhas para que cada estudante participe.',actions:['Autonomia','Inclusão','Expressão'],color:'blue'},
  {id:6,school:'C.E. Monteiro Lobato',city:'Foz do Iguaçu',nre:'Foz do Iguaçu',stage:'EJA',people:25,action:'Conectar o currículo às histórias e aos territórios.',actions:['Acolhimento','Equidade','Pertencimento'],color:'coral'}
];

const COLORS = ['blue','yellow','coral'];
let murals = [...seedMurals];

/* ── 4. MAPA LEAFLET ── */
let leafletMap = null;
let markerCluster = null;

function initMap() {
  if (leafletMap) return;
  leafletMap = L.map('leaflet-map', { center:[-24.5,-51.5], zoom:7, minZoom:6, maxZoom:14 });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'© <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom:19
  }).addTo(leafletMap);
  markerCluster = L.markerClusterGroup({
    maxClusterRadius:40, spiderfyOnMaxZoom:true, showCoverageOnHover:false, zoomToBoundsOnClick:true,
    iconCreateFunction: cluster => L.divIcon({
      html:`<div class="cluster-icon"><strong>${cluster.getChildCount()}</strong></div>`,
      className:'', iconSize:[44,44]
    })
  });
  leafletMap.addLayer(markerCluster);
  const obs = new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){ leafletMap.invalidateSize(); obs.disconnect(); }
  },{threshold:0.1});
  obs.observe(document.getElementById('mapa'));
}

function makeIcon(color, school, city) {
  const colors = {blue:'#83c5d5', yellow:'#f3d86b', coral:'#ef745b'};
  const bg = colors[color] || colors.coral;
  return L.divIcon({
    html:`<div class="map-pin" style="background:${bg}" role="img" aria-label="${escapeHtml(school)} — ${escapeHtml(city)}"></div>`,
    className:'', iconSize:[20,20], iconAnchor:[10,10], popupAnchor:[0,-12]
  });
}

function renderMap() {
  if (!leafletMap) initMap();
  markerCluster.clearLayers();
  murals.forEach(m => {
    const latlng = getCityLatLng(m.city);
    const label = `${escapeHtml(m.school)}, ${escapeHtml(m.city)}, NRE ${escapeHtml(m.nre)}. Ação: ${escapeHtml(m.action)}. ${format(m.people)} participantes.`;
    const marker = L.marker(latlng, {
      icon: makeIcon(m.color||'coral', m.school, m.city),
      alt: label,
      keyboard: true,
      title: m.school
    });
    marker.bindPopup(`
      <div class="leaflet-popup-inner">
        <small>${escapeHtml(m.city)} · NRE ${escapeHtml(m.nre)}</small>
        <strong>${escapeHtml(m.school)}</strong>
        <p>"${escapeHtml(m.action)}"</p>
        <em>${format(m.people)} participantes</em>
      </div>`, {maxWidth:260});
    marker.on('click', () => {
      document.getElementById('map-detail').innerHTML = `
        <small>${escapeHtml(m.city)} · ${escapeHtml(m.nre)}</small>
        <strong>${escapeHtml(m.school)}</strong>
        <span>${escapeHtml(m.action)}</span>
        <em style="font-size:11px;color:var(--lime);margin-top:6px">${format(m.people)} participantes</em>`;
    });
    markerCluster.addLayer(marker);
  });
}

/* ── 5. HELPERS ── */
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
const format = v => new Intl.NumberFormat('pt-BR').format(v);
function escapeHtml(v=''){const d=document.createElement('div');d.textContent=v;return d.innerHTML}
function refresh(){updateStats();fillFilters();renderGallery();renderMap();renderDashboard();}

/* ── 6. CARREGAR DO SHEETS ── */
async function loadFromSheets() {
  try {
    const res = await fetch(SCRIPT_URL);
    if (!res.ok) throw new Error('Erro');
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return;
    const sheetMurals = data.map((row, i) => ({
      id: row.id||Date.now()+i, school: row.school||'', city: row.city||'',
      nre: row.nre||getNRE(row.city)||'', stage: row.stage||'',
      people: Number(row.people)||0, action: row.action||'',
      actions: Array.isArray(row.actions)?row.actions:(row.actions||'').split('|').filter(Boolean),
      story: row.story||'', photo: row.photo||'', color: COLORS[i%COLORS.length]
    }));
    const sheetKeys = new Set(sheetMurals.map(m => m.school+m.city));
    murals = [...sheetMurals, ...seedMurals.filter(m => !sheetKeys.has(m.school+m.city))];
    refresh();
  } catch(err) { console.warn('Sheets indisponível. Usando exemplos.', err); }
}

/* ── 7. ENVIAR ── */
async function sendToSheets(data) {
  const form = new FormData();
  form.append('payload', JSON.stringify(data));
  const res = await fetch(SCRIPT_URL, {method:'POST', body:form});
  if (!res.ok) throw new Error('Falha');
  return res.json();
}

/* ── 8. STATS ── */
function updateStats() {
  const stats = {
    schools: murals.length,
    people:  murals.reduce((s,m)=>s+Number(m.people),0),
    murals:  murals.length,
    strategies: murals.reduce((s,m)=>s+m.actions.filter(Boolean).length,0),
    cities:  new Set(murals.map(m=>m.city)).size,
    nres:    new Set(murals.map(m=>m.nre).filter(Boolean)).size
  };
  Object.entries(stats).forEach(([k,v])=>$$(`[data-stat="${k}"]`).forEach(el=>el.textContent=format(v)));
}

/* ── 9. FILTROS ── */
function fillFilters() {
  [['filter-nre','nre'],['filter-city','city'],['filter-stage','stage']].forEach(([id,key])=>{
    const sel=$(`#${id}`), cur=sel.value;
    [...new Set(murals.map(m=>m[key]))].sort().forEach(v=>{
      if(![...sel.options].some(o=>o.value===v)) sel.add(new Option(v,v));
    });
    sel.value=cur;
  });
}

/* ── 10. GALERIA ── */
function renderGallery() {
  const nre=$('#filter-nre').value, city=$('#filter-city').value, stage=$('#filter-stage').value;
  const visible=murals.filter(m=>(nre==='all'||m.nre===nre)&&(city==='all'||m.city===city)&&(stage==='all'||m.stage===stage));
  $('#gallery-grid').innerHTML=visible.map(m=>`
    <article class="mural-card">
      <div class="card-photo" style="background-color:var(--${m.color||'blue'})">
        ${m.photo?`<img src="${m.photo}" alt="Mural da ${escapeHtml(m.school)}">`:''}
        <span>${format(m.people)} participantes</span>
      </div>
      <div class="card-body">
        <span class="card-place">${escapeHtml(m.city)} · NRE ${escapeHtml(m.nre)}</span>
        <h3>${escapeHtml(m.school)}</h3>
        <div class="card-action"><small>Ação destaque</small>"${escapeHtml(m.action)}"</div>
      </div>
    </article>`).join('');
  $('#empty-state').hidden=visible.length>0;
}

/* ── 11. DASHBOARD ── */
function renderDashboard() {
  const counts={};
  murals.flatMap(m=>m.actions).filter(Boolean).forEach(a=>{
    const k=a.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    counts[k]=(counts[k]||0)+1;
});
  $('#ranking-list').innerHTML=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,5)
    .map(([name,count],i)=>`<li><b>0${i+1}</b><span>${escapeHtml(name)}</span><small>${count}×</small></li>`).join('')
    ||'<li><span style="color:#999">Aguardando registros...</span></li>';
  const nres={};
  murals.forEach(m=>nres[m.nre]=(nres[m.nre]||0)+1);
  const max=Math.max(...Object.values(nres),1);
  $('#bar-chart').innerHTML=Object.entries(nres).sort((a,b)=>b[1]-a[1]).slice(0,32)
    .map(([name,count])=>`<div class="bar-row"><span>${escapeHtml(name)}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${count/max*100}%"></div></div>
      <b>${count}</b></div>`).join('');
  renderWordCloud();
}

/* ── 12. NUVEM DE PALAVRAS ── */
const STOPWORDS = new Set(['de','a','o','e','da','do','as','os','em','para','com','por','que','se','na','no','um','uma','ao','dos','das','mais','ou','cada','seus','sua','entre','como','são','ser','ter','foi','há','está','não','isso','este','essa','nos','às','pelo','pela','todos','todas','muito','bem','seu','mais','uma','para']);
function renderWordCloud() {
  const counts = {};

  const norm = s => s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');

  // Ações (tags) — peso 3
  murals.flatMap(m => m.actions).filter(Boolean).forEach(w => {
    const k = norm(w);
    if (k.length > 3 && !STOPWORDS.has(k)) counts[k] = (counts[k] || 0) + 3;
  });

  // Palavras das frases de ação — peso 1
  murals.map(m => m.action).filter(Boolean).forEach(phrase => {
    phrase.split(/\s+/).forEach(raw => {
      const w = norm(raw.replace(/[^a-záéíóúãõâêôçü]/gi, ''));
      if (w.length > 4 && !STOPWORDS.has(w)) counts[w] = (counts[w] || 0) + 1;
    });
  });

  const words = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 60);
  if (!words.length) return;

  const canvas = document.getElementById('word-cloud-canvas');
  if (!canvas) return;

  // Ajustar canvas ao tamanho do painel pai
  const panel = canvas.closest('.panel');
  if (panel) {
    canvas.width  = panel.offsetWidth  - 48; // descontar padding
    canvas.height = panel.offsetHeight - 60; // descontar label
  }

  // Escala de tamanho proporcional
  const max = words[0][1];
  const minSize = 14, maxSize = 64;
  const list = words.map(([word, count]) => [
    word,
    Math.round(minSize + (count / max) * (maxSize - minSize))
  ]);

  // Paleta alinhada ao design do site
  const palette = ['#172921','#265b49','#173d32','#d7e84c','#102920'];

  if (typeof WordCloud !== 'undefined') {
    WordCloud(canvas, {
      list,
      gridSize:        Math.round(canvas.width / 60),
      weightFactor:    1,
      fontFamily:      'Manrope, DM Sans, sans-serif',
      fontWeight:      '700',
      color:           () => palette[Math.floor(Math.random() * palette.length)],
      rotateRatio:     0.4,
      rotationSteps:   3,        // horizontal, +45°, -45°
      backgroundColor: 'transparent',
      drawOutOfBound:  false,
      shrinkToFit:     true,
      shuffle:         true,
    });
  }
}

/* ── 13. EVENTOS ── */
const dialog=$('#mural-dialog');
$$('.open-form').forEach(btn=>btn.addEventListener('click',()=>dialog.showModal()));
$('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
$('.menu-toggle').addEventListener('click',e=>{const open=$('#menu').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});
$$('#menu a').forEach(a=>a.addEventListener('click',()=>$('#menu').classList.remove('open')));
$$('#filter-nre,#filter-city,#filter-stage').forEach(s=>s.addEventListener('change',renderGallery));
$('#clear-filters').addEventListener('click',()=>{$$('.filters select').forEach(s=>s.value='all');renderGallery()});
$('[name="story"]').addEventListener('input',e=>$('.counter').textContent=`${e.target.value.length}/300`);
$$('[data-placeholder]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();showToast('Material pronto para receber o link oficial.')}));

/* ── Preenche NRE automaticamente ao selecionar município ── */
document.addEventListener('change', e => {
  if (e.target.name === 'city') {
    const nreInput = document.querySelector('[name="nre"]');
    if (nreInput) {
      nreInput.value = getNRE(e.target.value) || '';
    }
  }
});

/* ── 14. FORMULÁRIO ── */
$('#mural-form').addEventListener('submit', async event=>{
  event.preventDefault();
  const form=event.currentTarget;
  if(!form.reportValidity()) return;
  const submitBtn=form.querySelector('.submit-button');
  submitBtn.textContent='Enviando…'; submitBtn.disabled=true;
  const data=Object.fromEntries(new FormData(form));
  const file=form.elements.photo.files[0];
  const toBase64=f=>new Promise(resolve=>{
    const r=new FileReader(); r.onload=()=>resolve(r.result); r.onerror=()=>resolve(''); r.readAsDataURL(f);
  });
  try {
    const photo=file?await toBase64(file):'';
    const result=await sendToSheets({
      school:data.school, city:data.city, nre:data.nre||getNRE(data.city),
      stage:data.stage, people:data.people, action1:data.action1,
      action2:data.action2, action3:data.action3, story:data.story,
      owner:data.owner, email:data.email, photo
    });
    const photoUrl=result.photoUrl||photo;
    murals.unshift({
      id:Date.now(), school:data.school, city:data.city,
      nre:data.nre||getNRE(data.city), stage:data.stage,
      people:Number(data.people), action:data.action1,
      actions:[data.action1,data.action2,data.action3].filter(Boolean),
      story:data.story, photo:photoUrl, color:COLORS[Math.floor(Math.random()*COLORS.length)]
    });
    refresh(); dialog.close(); form.reset(); $('.counter').textContent='0/300';
    showToast('✅ Mural enviado com sucesso! Obrigada pela participação.');
    location.hash='#galeria';
  } catch(err) {
    console.error(err); showToast('❌ Erro ao enviar. Verifique sua conexão e tente novamente.');
  } finally {
    submitBtn.textContent='Enviar participação ↗'; submitBtn.disabled=false;
  }
});

/* ── 15. TOAST ── */
function showToast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),3800)}

/* ── 16. SCROLL REVEAL ── */
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){
    e.target.classList.add('visible');
    if(e.target.closest('#indicadores')) setTimeout(renderWordCloud,150);
    observer.unobserve(e.target);
  }
}),{threshold:.08});
$$('.reveal').forEach(el=>observer.observe(el));

/* ── 17. INIT ── */
refresh();
loadFromSheets();
