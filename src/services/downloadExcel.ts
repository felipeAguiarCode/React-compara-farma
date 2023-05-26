import * as XLSX from 'xlsx'

export function downloadExcel(uuid: string) {

  alert(uuid)
  console.log("download da loja de id" + uuid)

  const MYdata = [
    {
      "title": "Combo - Carefree+Ob+Sl",
      "detail": "---",
      "price": "R$ 44,21"
    },
    {
      "title": "Combo - Carefree+Ob+Sl",
      "detail": "---",
      "price": "R$ 65,57"
    },
    {
      "title": "Combo - Carefree+Ob+Sl",
      "detail": "---",
      "price": "R$ 54,25"
    },
    {
      "title": "Combo - Carefree+Sl",
      "detail": "---",
      "price": "R$ 32,89"
    },
    {
      "title": "Combo 4x Nutridrink Baunilha 200ml",
      "detail": "---",
      "price": "R$ 101,16"
    },
    {
      "title": "Acetona Farmax 100ml",
      "detail": "---",
      "price": "R$ 5,08"
    },
    {
      "title": "Fluconazol 150mg Cimed Caixa com 2 Cápsulas",
      "detail": "---",
      "price": "R$ 8,02\n-60%\nR$ 20,03"
    },
    {
      "title": "Acetona Zulu Fashion Removedor de Esmalte Frasco 90ml",
      "detail": "---",
      "price": "R$ 5,18"
    },
    {
      "title": "Unha Postiça Natural Quadrado com Curvatura Ricca 24un",
      "detail": "---",
      "price": "R$ 11,53"
    },
    {
      "title": "Esmalte Risqué Gel Vermelho Rubi",
      "detail": "---",
      "price": "R$ 8,95\n-51%\nR$ 18,29"
    },
    {
      "title": "Resfenol Kley Hertz Farmacêutica Caixa com 20 Cápsulas",
      "detail": "---",
      "price": "R$ 15,89\n-32%\nR$ 23,40"
    },
    {
      "title": "Omeprazol 20mg Teuto Caixa com 28 Cápsulas",
      "detail": "---",
      "price": "R$ 12,07\n-60%\nR$ 30,16"
    },
    {
      "title": "Polivitamínico Mulher Beauty Complex Renovitan 60 Cápsulas",
      "detail": "---",
      "price": "R$ 47,76\n-60%\nR$ 119,40"
    },
    {
      "title": "Omeprazol 20mg Teuto 56 Cápsulas",
      "detail": "---",
      "price": "R$ 19,13\n-60%\nR$ 47,82"
    },
    {
      "title": "Doralgina 30mg+ 300mg + 30mg com 20 Drágeas",
      "detail": "---",
      "price": "R$ 11,99\n-58%\nR$ 28,50"
    },
    {
      "title": "Teste de Gravidez Baby Sure com 1 Unidade",
      "detail": "---",
      "price": "R$ 10,03\n-39%\nR$ 16,43"
    },
    {
      "title": "Teste de Gravidez Cegontest Un",
      "detail": "---",
      "price": "R$ 20,90"
    },
    {
      "title": "Teste de Gravidez Gravtest Cimed 99,5% de Precisão",
      "detail": "---",
      "price": "R$ 8,56"
    },
    {
      "title": "Teste de Gravidez Pregancy Plus Clearblue",
      "detail": "---",
      "price": "R$ 18,11"
    },
    {
      "title": "Teste de Gravidez com Indicador de Semanas Clearblue",
      "detail": "---",
      "price": "R$ 51,17"
    }
  ]

  const worksheet = XLSX.utils.json_to_sheet(MYdata);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, "data.xlsx")
}