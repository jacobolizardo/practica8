var graf = document.getElementById('grafico1').getContext('2d');
    var grafico1 = new Chart(graf, {
      type: 'pie',
      data: {
        labels: ['2022-10','2022-20', '2023-10', '2023-20'], //leyenda
        datasets: [{
          label: 'Promedio Notas', //encabezado
          data: [88, 99, 89, 96], //valores
          backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)']
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    
    var graf2 = document.getElementById('grafico2').getContext('2d');
    var grafico2 = new Chart(graf2, {
      type: 'bar',
      data: {
        labels: ['2022-10','2022-20', '2023-10', '2023-20'], //leyenda
        datasets: [{
          label: 'Cantidad Materias', //encabezado
          data: [5, 6, 3, 6], //valores
          backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)']
          
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });