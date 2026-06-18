const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyDA1QsojZugAo4j1ZeU_si21GVHAf0ShH4AYoCuqrepPPy3hwcEMGMGPLhbIEHgiFy/exec';

/* ── 1. COORDENADAS — 399 MUNICÍPIOS DO PARANÁ ── */
const CITY_COORDS = {
  'Abatia': [-23.306,-50.312],
  'Adrianopolis': [-24.659,-48.991],
  'Agudos do Sul': [-25.977,-49.397],
  'Almirante Tamandare': [-25.323,-49.308],
  'Altamira do Parana': [-24.794,-52.919],
  'Alto Paraiso': [-23.522,-53.854],
  'Alto Parana': [-23.48,-52.136],
  'Alto Piquiri': [-24.016,-53.445],
  'Altonia': [-23.876,-53.883],
  'Alvorada do Sul': [-22.78,-51.228],
  'Amapora': [-22.964,-52.993],
  'Ampere': [-25.906,-53.48],
  'Andira': [-23.053,-50.23],
  'Angulo': [-23.189,-51.89],
  'Antonina': [-25.428,-48.712],
  'Antonio Olinto': [-25.946,-50.126],
  'Arapongas': [-23.416,-51.425],
  'Arapoti': [-24.157,-49.826],
  'Arapua': [-24.103,-51.834],
  'Araruna': [-23.931,-52.494],
  'Araucaria': [-25.593,-49.401],
  'Ariranha do Ivai': [-24.137,-51.377],
  'Assai': [-23.375,-50.866],
  'Assis Chateaubriand': [-24.418,-53.519],
  'Astorga': [-23.234,-51.664],
  'Atalaia': [-23.084,-52.003],
  'Balsa Nova': [-25.577,-49.636],
  'Bandeirantes': [-23.109,-50.362],
  'Barbosa Ferraz': [-24.017,-52.001],
  'Barra do Jacare': [-23.114,-50.178],
  'Barracao': [-26.25,-53.631],
  'Bela Vista da Caroba': [-25.966,-53.506],
  'Bela Vista do Paraiso': [-22.998,-51.195],
  'Bituruna': [-26.159,-51.531],
  'Boa Esperanca': [-24.404,-53.096],
  'Boa Esperanca do Iguacu': [-25.727,-52.985],
  'Boa Ventura de Sao Roque': [-24.891,-52.04],
  'Boa Vista da Aparecida': [-25.293,-53.482],
  'Bocaiuva do Sul': [-25.207,-49.127],
  'Bom Jesus do Sul': [-26.101,-53.336],
  'Bom Sucesso': [-23.71,-51.756],
  'Bom Sucesso do Sul': [-26.032,-52.838],
  'Borrazopolis': [-23.936,-51.59],
  'Braganey': [-24.864,-53.115],
  'Brasilandia do Sul': [-24.197,-53.949],
  'Cafeara': [-22.796,-51.139],
  'Cafelandia': [-24.617,-53.324],
  'Cafezal do Sul': [-23.887,-53.678],
  'California': [-23.727,-51.352],
  'Cambara': [-23.044,-50.075],
  'Cambe': [-23.275,-51.278],
  'Cambira': [-23.6,-51.573],
  'Campina da Lagoa': [-24.593,-52.796],
  'Campina do Simao': [-25.097,-51.823],
  'Campina Grande do Sul': [-25.31,-49.053],
  'Campo Bonito': [-25.001,-52.677],
  'Campo do Tenente': [-25.98,-49.683],
  'Campo Largo': [-25.459,-49.528],
  'Campo Magro': [-25.368,-49.437],
  'Campo Mourao': [-24.046,-52.383],
  'Candido de Abreu': [-24.578,-51.273],
  'Candoi': [-25.599,-51.986],
  'Cantagalo': [-25.374,-52.109],
  'Capanema': [-25.671,-53.804],
  'Capitao Leonidas Marques': [-25.052,-53.551],
  'Carambei': [-24.95,-50.097],
  'Carlopolis': [-23.435,-49.726],
  'Cascavel': [-24.958,-53.455],
  'Castro': [-24.793,-50.009],
  'Catanduvas': [-25.199,-53.133],
  'Centenario do Sul': [-22.81,-51.596],
  'Cerro Azul': [-24.82,-49.254],
  'Ceu Azul': [-25.149,-53.847],
  'Chopinzinho': [-25.854,-52.523],
  'Cianorte': [-23.661,-52.604],
  'Cidade Gaucha': [-23.376,-53.055],
  'Clevelandia': [-26.408,-52.357],
  'Colombo': [-25.292,-49.224],
  'Colorado': [-22.838,-51.982],
  'Congonhinhas': [-23.556,-50.543],
  'Conselheiro Mairinck': [-23.57,-50.189],
  'Contenda': [-25.672,-49.537],
  'Corbelia': [-24.802,-53.298],
  'Cornelio Procopio': [-23.182,-50.648],
  'Coronel Domingos Soares': [-26.166,-52.13],
  'Coronel Vivida': [-25.984,-52.561],
  'Corumbatai do Sul': [-24.078,-52.567],
  'Cruzeiro do Iguacu': [-25.628,-53.111],
  'Cruzeiro do Oeste': [-23.781,-53.073],
  'Cruzeiro do Sul': [-23.47,-52.156],
  'Cruzmaltina': [-24.1,-51.666],
  'Curitiba': [-25.429,-49.267],
  'Curiuva': [-24.031,-50.454],
  'Diamante D\'Oeste': [-24.967,-54.101],
  'Diamante do Norte': [-22.618,-52.87],
  'Diamante do Sul': [-25.097,-52.692],
  'Dois Vizinhos': [-25.751,-53.057],
  'Douradina': [-23.381,-53.31],
  'Doutor Camargo': [-23.547,-52.208],
  'Doutor Ulysses': [-24.561,-49.448],
  'Eneas Marques': [-25.966,-53.17],
  'Engenheiro Beltrao': [-23.795,-52.27],
  'Entre Rios do Oeste': [-24.706,-54.239],
  'Esperanca Nova': [-23.657,-53.774],
  'Espigao Alto do Iguacu': [-25.499,-52.504],
  'Farol': [-24.087,-52.576],
  'Faxinal': [-24.001,-51.321],
  'Fazenda Rio Grande': [-25.668,-49.307],
  'Fenix': [-23.906,-51.956],
  'Fernandes Pinheiro': [-25.417,-50.58],
  'Figueira': [-23.854,-50.416],
  'Flor da Serra do Sul': [-25.862,-53.396],
  'Florai': [-23.307,-52.042],
  'Floresta': [-23.601,-52.088],
  'Florestopolis': [-22.857,-51.095],
  'Florida': [-23.396,-52.137],
  'Formosa do Oeste': [-24.306,-53.322],
  'Foz do Iguacu': [-25.548,-54.588],
  'Foz do Jordao': [-25.688,-52.183],
  'Francisco Alves': [-23.796,-53.835],
  'Francisco Beltrao': [-26.081,-53.055],
  'General Carneiro': [-26.424,-51.328],
  'Godoy Moreira': [-24.049,-51.897],
  'Goioere': [-24.188,-53.018],
  'Goioxim': [-25.427,-52.43],
  'Grandes Rios': [-24.14,-51.642],
  'Guaira': [-24.08,-54.256],
  'Guairaca': [-23.364,-52.599],
  'Guamiranga': [-25.479,-50.774],
  'Guapirama': [-23.521,-50.041],
  'Guaporema': [-23.411,-52.942],
  'Guaraci': [-22.969,-51.648],
  'Guaraniacu': [-25.093,-52.876],
  'Guarapuava': [-25.396,-51.458],
  'Guaraquecaba': [-25.298,-48.328],
  'Guaratuba': [-25.883,-48.575],
  'Honorio Serpa': [-26.17,-52.412],
  'Ibaiti': [-23.848,-50.19],
  'Ibema': [-25.103,-53.007],
  'Icaraima': [-23.823,-53.621],
  'Iguaracu': [-23.196,-51.826],
  'Iguatu': [-25.149,-53.288],
  'Imbau': [-24.457,-50.763],
  'Imbituva': [-25.23,-50.601],
  'Inacio Martins': [-25.562,-51.074],
  'Inaja': [-22.773,-52.779],
  'Indianopolis': [-23.536,-52.692],
  'Ipiranga': [-25.017,-50.578],
  'Ipora': [-24.005,-53.68],
  'Iracema do Oeste': [-24.423,-53.764],
  'Irati': [-25.467,-50.65],
  'Iretama': [-24.43,-52.108],
  'Itaguaje': [-22.624,-52.768],
  'Itaipulandia': [-25.128,-54.307],
  'Itambaraca': [-23.373,-50.466],
  'Itambe': [-23.713,-52.353],
  'Itapejara D\'Oeste': [-25.955,-52.86],
  'Itaperucu': [-25.222,-49.34],
  'Itauna do Sul': [-23.03,-53.08],
  'Ivai': [-25.004,-50.869],
  'Ivaipora': [-24.249,-51.683],
  'Ivate': [-23.599,-53.22],
  'Ivatuba': [-23.6,-52.188],
  'Jaboti': [-23.727,-50.024],
  'Jacarezinho': [-23.161,-49.969],
  'Jaguapita': [-23.117,-51.53],
  'Jaguariaiva': [-24.244,-49.705],
  'Jandaia do Sul': [-23.601,-51.642],
  'Janiopolis': [-24.119,-52.776],
  'Japira': [-23.812,-50.135],
  'Japura': [-23.549,-52.551],
  'Jardim Alegre': [-24.175,-51.683],
  'Jardim Olinda': [-22.773,-52.532],
  'Jataizinho': [-23.257,-50.977],
  'Jesuitas': [-24.437,-53.44],
  'Joaquim Tavora': [-23.5,-49.944],
  'Jundiai do Sul': [-23.429,-50.291],
  'Juranda': [-24.433,-52.843],
  'Jussara': [-23.619,-52.466],
  'Kalore': [-23.729,-51.751],
  'Lapa': [-25.769,-49.715],
  'Laranjal': [-24.899,-52.247],
  'Laranjeiras do Sul': [-25.408,-52.414],
  'Leopolis': [-23.454,-50.747],
  'Lidianopolis': [-24.138,-51.648],
  'Lindoeste': [-25.303,-53.556],
  'Loanda': [-22.926,-53.14],
  'Lobato': [-23.127,-51.965],
  'Londrina': [-23.305,-51.17],
  'Luiziana': [-24.295,-52.292],
  'Lunardelli': [-24.065,-51.676],
  'Lupionopolis': [-22.803,-51.56],
  'Mallet': [-25.869,-50.825],
  'Mambore': [-24.319,-52.521],
  'Mamboro': [-24.319,-52.521],
  'Mandaguacu': [-23.349,-52.093],
  'Mandaguari': [-23.541,-51.671],
  'Mandirituba': [-25.771,-49.328],
  'Manfrinopolis': [-25.963,-53.537],
  'Mangueirinha': [-25.942,-52.175],
  'Manoel Ribas': [-24.519,-51.659],
  'Maria Helena': [-23.203,-53.556],
  'Marialva': [-23.488,-51.798],
  'Marilandia do Sul': [-23.755,-51.318],
  'Marilena': [-22.561,-52.994],
  'Mariluz': [-23.997,-53.133],
  'Maringa': [-23.421,-51.933],
  'Mariopolis': [-26.349,-52.554],
  'Maripa': [-24.422,-53.828],
  'Marmeleiro': [-26.148,-53.03],
  'Marquinho': [-25.042,-52.352],
  'Marumbi': [-23.832,-51.648],
  'Matelandia': [-25.241,-54.018],
  'Matinhos': [-25.818,-48.542],
  'Mato Rico': [-24.666,-51.799],
  'Maua da Serra': [-23.875,-51.182],
  'Medianeira': [-25.294,-54.094],
  'Mercedes': [-24.402,-54.169],
  'Mirador': [-23.267,-52.868],
  'Miraselva': [-22.989,-51.545],
  'Missal': [-25.097,-54.251],
  'Moreira Sales': [-24.051,-53.023],
  'Morretes': [-25.474,-48.834],
  'Munhoz de Melo': [-23.342,-52.001],
  'Nossa Senhora das Gracas': [-23.439,-52.025],
  'Nova Alianca do Ivai': [-23.103,-52.706],
  'Nova America da Colina': [-23.299,-50.442],
  'Nova Aurora': [-24.537,-53.313],
  'Nova Cantu': [-24.677,-52.563],
  'Nova Esperanca': [-23.178,-52.212],
  'Nova Esperanca do Sudoeste': [-25.931,-53.31],
  'Nova Fatima': [-23.426,-50.567],
  'Nova Laranjeiras': [-25.303,-52.542],
  'Nova Londrina': [-22.771,-52.991],
  'Nova Olimpia': [-23.479,-53.813],
  'Nova Prata do Iguacu': [-25.63,-53.336],
  'Nova Santa Barbara': [-23.296,-50.603],
  'Nova Santa Rosa': [-24.46,-53.997],
  'Nova Tebas': [-24.42,-51.948],
  'Novo Itacolomi': [-23.698,-51.44],
  'Ortigueira': [-24.212,-50.944],
  'Ourizona': [-23.447,-52.117],
  'Ouro Verde do Oeste': [-24.766,-53.87],
  'Paicandu': [-23.461,-52.057],
  'Palmas': [-26.483,-51.99],
  'Palmeira': [-25.43,-49.999],
  'Palmital': [-24.881,-52.199],
  'Palotina': [-24.284,-53.838],
  'Paraiso do Norte': [-23.277,-52.593],
  'Paranacity': [-22.833,-52.249],
  'Paranagua': [-25.52,-48.509],
  'Paranapoema': [-22.674,-52.746],
  'Paranavai': [-23.074,-52.466],
  'Pato Bragado': [-24.614,-54.22],
  'Pato Branco': [-26.229,-52.669],
  'Paula Freitas': [-26.113,-50.995],
  'Paulo Frontin': [-26.037,-50.831],
  'Peabiru': [-23.903,-52.342],
  'Perobal': [-23.912,-53.526],
  'Perola': [-23.794,-53.684],
  'Perola D\'Oeste': [-25.81,-53.632],
  'Pien': [-26.066,-49.427],
  'Pinhais': [-25.443,-49.192],
  'Pinhal de Sao Bento': [-26.081,-53.316],
  'Pinhalao': [-23.788,-50.054],
  'Pinhao': [-25.694,-51.66],
  'Piraquara': [-25.44,-49.062],
  'Pitanga': [-24.753,-51.763],
  'Pitangueiras': [-22.889,-51.465],
  'Planaltina do Parana': [-22.829,-53.337],
  'Planalto': [-25.728,-53.768],
  'Ponta Grossa': [-25.095,-50.163],
  'Pontal do Parana': [-25.668,-48.508],
  'Porecatu': [-22.755,-51.379],
  'Porto Amazonas': [-25.541,-49.899],
  'Porto Barreiro': [-25.567,-52.699],
  'Porto Rico': [-22.78,-53.27],
  'Porto Vitoria': [-26.168,-51.245],
  'Prado Ferreira': [-22.813,-51.374],
  'Pranchita': [-25.972,-53.749],
  'Presidente Castelo Branco': [-23.637,-52.18],
  'Primeiro de Maio': [-22.855,-51.018],
  'Prudentopolis': [-25.213,-50.978],
  'Quatigua': [-23.589,-49.904],
  'Quatro Barras': [-25.367,-49.072],
  'Quatro Pontes': [-24.618,-53.954],
  'Quedas do Iguacu': [-25.448,-52.907],
  'Querencia do Norte': [-23.101,-53.49],
  'Quinta do Sol': [-23.828,-52.022],
  'Quitandinha': [-25.868,-49.5],
  'Ramilandia': [-25.043,-53.981],
  'Rancho Alegre': [-23.643,-50.907],
  'Rancho Alegre D\'Oeste': [-24.213,-52.945],
  'Realeza': [-25.77,-53.527],
  'Reboucas': [-25.623,-50.682],
  'Renascenca': [-26.166,-52.972],
  'Reserva': [-24.654,-50.843],
  'Reserva do Iguacu': [-25.757,-51.989],
  'Ribeirao Claro': [-23.196,-49.755],
  'Ribeirao do Pinhal': [-23.412,-50.35],
  'Rio Azul': [-25.726,-50.799],
  'Rio Bom': [-23.75,-51.415],
  'Rio Bonito do Iguacu': [-25.47,-52.428],
  'Rio Branco do Ivai': [-24.26,-51.484],
  'Rio Branco do Sul': [-25.189,-49.312],
  'Rio Negro': [-26.101,-49.795],
  'Rolandia': [-23.31,-51.371],
  'Roncador': [-24.603,-52.273],
  'Rondon': [-23.428,-52.772],
  'Rosario do Ivai': [-24.316,-51.521],
  'Sabaudia': [-23.389,-51.529],
  'Salgado Filho': [-25.937,-53.242],
  'Salto do Itarare': [-23.601,-49.639],
  'Salto do Lontra': [-25.789,-53.264],
  'Santa Amelia': [-23.256,-50.426],
  'Santa Cecilia do Pavao': [-23.51,-50.693],
  'Santa Cruz de Monte Castelo': [-23.031,-53.328],
  'Santa Fe': [-23.043,-51.863],
  'Santa Helena': [-24.861,-54.329],
  'Santa Ines': [-23.264,-52.852],
  'Santa Isabel do Ivai': [-23.01,-53.207],
  'Santa Izabel do Oeste': [-25.814,-53.508],
  'Santa Lucia': [-25.021,-53.621],
  'Santa Maria do Oeste': [-24.706,-51.977],
  'Santa Mariana': [-23.153,-50.505],
  'Santa Monica': [-22.829,-53.192],
  'Santa Tereza do Oeste': [-24.78,-53.537],
  'Santa Terezinha de Itaipu': [-25.44,-54.393],
  'Santana do Itarare': [-23.778,-49.56],
  'Santo Antonio da Platina': [-23.302,-50.077],
  'Santo Antonio do Caiua': [-22.756,-52.341],
  'Santo Antonio do Paraiso': [-23.283,-50.525],
  'Santo Antonio do Sudoeste': [-26.079,-53.748],
  'Santo Inacio': [-22.692,-51.81],
  'Sao Carlos do Ivai': [-23.313,-52.479],
  'Sao Jeronimo da Serra': [-23.729,-50.727],
  'Sao Joao': [-26.018,-52.692],
  'Sao Joao do Caiua': [-22.845,-52.354],
  'Sao Joao do Ivai': [-23.989,-51.616],
  'Sao Joao do Triunfo': [-25.68,-50.143],
  'Sao Jorge D\'Oeste': [-25.885,-52.935],
  'Sao Jorge do Ivai': [-23.487,-52.235],
  'Sao Jorge do Patrocinio': [-23.763,-53.866],
  'Sao Jose da Boa Vista': [-23.926,-49.591],
  'Sao Jose das Palmeiras': [-24.835,-54.205],
  'Sao Jose dos Pinhais': [-25.535,-49.208],
  'Sao Manoel do Parana': [-23.573,-52.737],
  'Sao Mateus do Sul': [-25.876,-50.381],
  'Sao Miguel do Iguacu': [-25.348,-54.239],
  'Sao Pedro do Iguacu': [-24.953,-53.875],
  'Sao Pedro do Ivai': [-23.86,-51.852],
  'Sao Pedro do Parana': [-22.752,-53.18],
  'Sao Sebastiao da Amoreira': [-23.1,-50.653],
  'Sao Tome': [-23.527,-52.577],
  'Sapopema': [-24.005,-50.58],
  'Sarandi': [-23.441,-51.874],
  'Saudade do Iguacu': [-25.998,-52.613],
  'Senges': [-24.113,-49.464],
  'Serranopolis do Iguacu': [-25.464,-54.043],
  'Sertaneja': [-23.046,-50.815],
  'Sertanopolis': [-23.052,-51.04],
  'Siqueira Campos': [-23.688,-49.835],
  'Sulina': [-25.71,-52.81],
  'Tamarana': [-23.716,-51.107],
  'Tamboara': [-23.22,-52.468],
  'Tapejara': [-23.753,-52.869],
  'Tapira': [-23.794,-53.629],
  'Teixeira Soares': [-25.37,-50.455],
  'Telemaco Borba': [-24.324,-50.616],
  'Terra Boa': [-23.774,-52.443],
  'Terra Rica': [-22.71,-52.63],
  'Terra Roxa': [-24.163,-54.107],
  'Tibagi': [-24.519,-50.414],
  'Tijucas do Sul': [-25.928,-49.196],
  'Toledo': [-24.724,-53.743],
  'Tomazina': [-23.763,-49.945],
  'Tres Barras do Parana': [-25.447,-53.182],
  'Tunas do Parana': [-24.974,-49.087],
  'Tuneiras do Oeste': [-23.87,-52.799],
  'Tupassi': [-24.31,-53.541],
  'Turvo': [-25.046,-51.526],
  'Ubirata': [-24.554,-52.98],
  'Umuarama': [-23.766,-53.325],
  'Uniao da Vitoria': [-26.228,-51.087],
  'Uniflor': [-23.039,-52.143],
  'Urai': [-23.197,-50.791],
  'Ventania': [-24.241,-50.237],
  'Vera Cruz do Oeste': [-25.058,-53.876],
  'Vere': [-25.871,-52.89],
  'Virmond': [-25.419,-52.193],
  'Vitorino': [-26.217,-52.783],
  'Wenceslau Braz': [-23.871,-49.802],
  'Xambre': [-23.723,-53.481]
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
  if (CITY_COORDS[cityName]) return CITY_COORDS[cityName];
  // busca parcial
  const key = Object.keys(CITY_COORDS).find(k =>
    cityName.toLowerCase().includes(k.toLowerCase()) ||
    k.toLowerCase().includes(cityName.toLowerCase())
  );
  return key ? CITY_COORDS[key] : [-25.43+(Math.random()-.5)*2, -51.27+(Math.random()-.5)*3];
}

function getNRE(cityName) {
  const normalized = cityName
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

function makeIcon(color) {
  const colors = {blue:'#83c5d5', yellow:'#f3d86b', coral:'#ef745b'};
  return L.divIcon({
    html:`<div class="map-pin" style="background:${colors[color]||colors.coral}"></div>`,
    className:'', iconSize:[20,20], iconAnchor:[10,10], popupAnchor:[0,-12]
  });
}

function renderMap() {
  if (!leafletMap) initMap();
  markerCluster.clearLayers();
  murals.forEach(m => {
    const latlng = getCityLatLng(m.city);
    const marker = L.marker(latlng, {icon: makeIcon(m.color||'coral')});
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
    cities:  new Set(murals.map(m=>m.city)).size
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
  murals.flatMap(m=>m.actions).filter(Boolean).forEach(a=>counts[a]=(counts[a]||0)+1);
  $('#ranking-list').innerHTML=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,3)
    .map(([name,count],i)=>`<li><b>0${i+1}</b><span>${escapeHtml(name)}</span><small>${count}×</small></li>`).join('')
    ||'<li><span style="color:#999">Aguardando registros...</span></li>';
  const nres={};
  murals.forEach(m=>nres[m.nre]=(nres[m.nre]||0)+1);
  const max=Math.max(...Object.values(nres),1);
  $('#bar-chart').innerHTML=Object.entries(nres).sort((a,b)=>b[1]-a[1]).slice(0,8)
    .map(([name,count])=>`<div class="bar-row"><span>${escapeHtml(name)}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${count/max*100}%"></div></div>
      <b>${count}</b></div>`).join('');
  renderWordCloud();
}

/* ── 12. NUVEM DE PALAVRAS ── */
const STOPWORDS = new Set(['de','a','o','e','da','do','as','os','em','para','com','por','que','se','na','no','um','uma','ao','dos','das','mais','ou','cada','seus','sua','entre','como','são','ser','ter','foi','há','está','não','isso','este','essa','nos','às','pelo','pela','todos','todas','muito','bem','seu','mais','uma','para']);
function renderWordCloud() {
  const counts={};
  murals.flatMap(m=>m.actions).filter(Boolean).forEach(w=>{
    const k=w.trim().toLowerCase(); if(k.length>3&&!STOPWORDS.has(k)) counts[k]=(counts[k]||0)+3;
  });
  murals.map(m=>m.action).filter(Boolean).forEach(phrase=>{
    phrase.split(/\s+/).forEach(raw=>{
      const w=raw.replace(/[^a-záéíóúãõâêôçü]/gi,'').toLowerCase();
      if(w.length>4&&!STOPWORDS.has(w)) counts[w]=(counts[w]||0)+1;
    });
  });
  const words=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,18);
  if(!words.length) return;
  const max=words[0][1];
  const tags=['span','b','strong','em','i','small'], rots=[0,-8,8,-4,4,0,-6,6];
  const cloud=$('.word-cloud');
  if(cloud) cloud.innerHTML=words.map(([word,count],i)=>{
    const tag=tags[i%tags.length], size=Math.round(13+(count/max)*31);
    return `<${tag} style="font-size:${size}px;transform:rotate(${rots[i%rots.length]}deg);display:inline-block">${escapeHtml(word)}</${tag}>`;
  }).join(' ');
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
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
$$('.reveal').forEach(el=>observer.observe(el));

/* ── 17. INIT ── */
refresh();
loadFromSheets();
