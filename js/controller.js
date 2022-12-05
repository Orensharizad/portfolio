console.log('Starting up');


$(onInit)
$('.submit-btn').on('click', userSendEmail)
$('.open-contact').on('click', openCanvas)

function onInit() {
  renderPortfolioItems()
  renderProtfolioModal()
}

function renderPortfolioItems() {
  var projects = getProjects()
  console.log(projects)

  var StrHTMLs = projects.map(project =>
    `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#${project.id}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/projects-img/${project.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">Illustration</p>
        </div>
      </div>

`
  )

  $('.portfolio-contianer').html(StrHTMLs)

}

function renderProtfolioModal() {

  var projects = getProjects()
  var strHTMLs = projects.map(project =>

    `
        <div class="portfolio-modal modal fade" id="${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${project.name}</h2>
                    <p class="item-intro text-muted">${project.title}</p>
                    <img class="img-fluid d-block mx-auto" src="img/projects-img/${project.id}.png" alt="">
                    <p>${project.desc}</p>
                    <ul class="list-inline">
                      <li>Date: ${Date(project.publishedAt)}</li>
                      <li>Client: Threads</li>
                      <li>Category: Illustration</li>
                      <li>url:<a target="_blank" href="${project.url}">${project.name}</a></li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    `
  )

  $(".protolio-modal-container").html(strHTMLs)

}

function userSendEmail() {
  var subject = $('#subject').val()
  var textArea = $('#userTextArea').val()
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=oren.sharizad12@gmail.com&su=${subject}&body=${textArea}`)
}