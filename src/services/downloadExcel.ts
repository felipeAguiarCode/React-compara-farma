import * as XLSX from 'xlsx'

export function downloadExcel(uuid: string) {

  alert(uuid)
  console.log("download da loja de id" + uuid)

  const MYdata = [
    {
      Categoria: "Promoções",
      Produto: "Combo - Carefree+Ob+Sl",
      Detail: "---",
      "Código de barras": "5.621.754.811.969",
      Price: "R$ 44,21"
    },
    {
      Categoria: "Promoções",
      Produto: "Combo - Carefree+Ob+Sl",
      Detail: "---",
      "Código de barras": "166.484.343.451",
      Price: "R$ 65,57"
    },
    {
      Categoria: "Promoções",
      Produto: "Combo - Carefree+Ob+Sl",
      Detail: "---",
      "Código de barras": "9.905.456.467.300",
      Price: "R$ 54,25"
    },
    {
      Categoria: "Promoções",
      Produto: "Combo - Carefree+Sl",
      Detail: "---",
      "Código de barras": "5.975.822.092.149",
      Price: "R$ 32,89"
    },
    {
      Categoria: "Promoções",
      Produto: "Combo 4x Nutridrink Baunilha 200ml",
      Detail: "---",
      "Código de barras": "838.520.454.462",
      Price: "R$ 101,16"
    },
    {
      Categoria: "Grandes Marcas Com Desconto",
      Produto: "Acetona Farmax 100ml",
      Detail: "---",
      "Código de barras": "7.596.600.725.787",
      Price: "R$ 5,08"
    },
    {
      Categoria: "Grandes Marcas Com Desconto",
      Produto: "Fluconazol 150mg Cimed Caixa com 2 Cápsulas",
      Detail: "---",
      "Código de barras": "9.860.888.683.260",
      Price: `"R$ 8,02\n-60%\nR$ 20,03"`
    },
    {
      Categoria: "Grandes Marcas Com Desconto",
      Produto: "Acetona Zulu Fashion Removedor de Esmalte Frasco 90ml",
      Detail: "---",
      "Código de barras": "513.951.627.759",
      Price: "R$ 5,18"
    },
    {
      Categoria: "Grandes Marcas Com Desconto",
      Produto: "Unha Postiça Natural Quadrado com Curvatura Ricca 24un",
      Detail: "---",
      "Código de barras": "3.384.480.459.217",
      Price: "R$ 11,53"
    },
    {
      Categoria: "Grandes Marcas Com Desconto",
      Produto: "Esmalte Risqué Gel Vermelho Rubi",
      Detail: "---",
      "Código de barras": "8.020.374.214.937",
      Price: `"R$ 8,95\n-51%\nR$ 18,29"`
    },
    {
      Categoria: "Grandes Marcas Com Desconto",
      Produto: "Resfenol Kley Hertz Farmacêutica Caixa com 20 Cápsulas",
      Detail: "---",
      "Código de barras": "7.014.780.670.012",
      Price: `"R$ 15,89\n-32%\nR$ 23,40"`
    },
    {
      Categoria: "Grandes Marcas Com Desconto",
      Produto: "Omeprazol 20mg Teuto Caixa com 28 Cápsulas",
      Detail: "---",
      "Código de barras": "2.281.951.228.255",
      Price: `"R$ 12,07\n-60%\nR$ 30,16"`
    },
    {
      Categoria: "Grandes Marcas Com Desconto",
      Produto: "Polivitamínico Mulher Beauty Complex Renovitan 60 Cápsulas",
      Detail: "---",
      "Código de barras": "4.769.297.763.178",
      Price: `"R$ 47,76\n-60%\nR$ 119,40"`
    },
    {
      Categoria: "Grandes Marcas Com Desconto",
      Produto: "Omeprazol 20mg Teuto 56 Cápsulas",
      Detail: "---",
      "Código de barras": "1.843.146.785.766",
      Price: `"R$ 19,13\n-60%\nR$ 47,82"`
    },
    {
      Categoria: "Grandes Marcas Com Desconto",
      Produto: "Doralgina 30mg+ 300mg + 30mg com 20 Drágeas",
      Detail: "---",
      "Código de barras": "7.386.040.724.949",
      Price: `"R$ 11,99\n-58%\nR$ 28,50"`
    },
    {
      Categoria: "Higiene e Cuidados Pessoais",
      Produto: "Teste de Gravidez Baby Sure com 1 Unidade",
      Detail: "---",
      "Código de barras": "9.186.904.355.910",
      Price: `"R$ 10,03\n-39%\nR$ 16,43"`
    },
    {
      Categoria: "Higiene e Cuidados Pessoais",
      Produto: "Teste de Gravidez Cegontest Un",
      Detail: "---",
      "Código de barras": "542.180.851.878",
      Price: "R$ 20,90"
    },
    {
      Categoria: "Higiene e Cuidados Pessoais",
      Produto: "Teste de Gravidez Gravtest Cimed 99,5% de Precisão",
      Detail: "---",
      "Código de barras": "2.789.516.561.679",
      Price: "R$ 8,56"
    },
    {
      Categoria: "Higiene e Cuidados Pessoais",
      Produto: "Teste de Gravidez Pregancy Plus Clearblue",
      Detail: "---",
      "Código de barras": "4.467.418.195.455",
      Price: "R$ 18,11"
    },
    {
      Categoria: "Higiene e Cuidados Pessoais",
      Produto: "Teste de Gravidez com Indicador de Semanas Clearblue",
      Detail: "---",
      "Código de barras": "180.281.441.299",
      Price: "R$ 51,17"
    }
  ]

  const worksheet = XLSX.utils.json_to_sheet(MYdata);
  const workbook = XLSX.utils.book_new();

  // worksheet['A1:E1'].s = { fill: { rgb: '#F6F6F6' } }

  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, "data.xlsx")
}