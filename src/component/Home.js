export default function Home() {
  return (
    <div>
{/* ============================================================== */}
{/* Page Content */}
{/* ============================================================== */}
<div id="page-wrapper">
  <div className="container-fluid">
    <div className="row bg-title">
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Dashboard 3</h4>
      </div>
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
        <button className="right-side-toggle waves-effect waves-light btn-info btn-circle pull-right m-l-20"><i className="ti-settings text-white" /></button>
        <a href="javascript:void(0)" target="_blank" className="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Buy Admin Now</a>
        <ol className="breadcrumb">
          <li><a href="index.html">Dashboard</a></li>
          <li className="active">Dashboard 3</li>
        </ol>
      </div>
      {/* /.col-lg-12 */}
    </div>
    {/* ============================================================== */}
    {/* Other sales widgets */}
    {/* ============================================================== */}
    {/* .row */}
    <div className="row">
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="white-box">
          <h3 className="box-title">NEW CLIENTS</h3>
          <ul className="list-inline two-part">
            <li><i className="icon-people text-info" /></li>
            <li className="text-right"><span className="counter">23</span></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="white-box">
          <h3 className="box-title">NEW Projects</h3>
          <ul className="list-inline two-part">
            <li><i className="icon-folder text-purple" /></li>
            <li className="text-right"><span className="counter">169</span></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="white-box">
          <h3 className="box-title">Open Projects</h3>
          <ul className="list-inline two-part">
            <li><i className="icon-folder-alt text-danger" /></li>
            <li className="text-right"><span className>311</span></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="white-box">
          <h3 className="box-title">NEW Invoices</h3>
          <ul className="list-inline two-part">
            <li><i className="ti-wallet text-success" /></li>
            <li className="text-right"><span className>117</span></li>
          </ul>
        </div>
      </div>
    </div>
    {/* /.row */}
    {/* ============================================================== */}
    {/* Extra-component */}
    {/* ============================================================== */}
    <div className="row">
      <div className="col-lg-5 col-md-12">
        <div className="white-box">
          <h3 className="box-title">Country visit</h3>
          <div id="usa" style={{height: 365}} />
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="white-box">
          <h3 className="box-title">Visit from the countries</h3>
          <ul className="country-state  p-t-20">
            <li>
              <h2>6350</h2> <small>From India</small>
              <div className="pull-right">48% <i className="fa fa-level-up text-success" /></div>
              <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '48%'}}> <span className="sr-only">48% Complete</span></div>
              </div>
            </li>
            <li>
              <h2>3250</h2> <small>From UAE</small>
              <div className="pull-right">98% <i className="fa fa-level-up text-success" /></div>
              <div className="progress">
                <div className="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '98%'}}> <span className="sr-only">98% Complete</span></div>
              </div>
            </li>
            <li>
              <h2>1250</h2> <small>From Australia</small>
              <div className="pull-right">75% <i className="fa fa-level-down text-danger" /></div>
              <div className="progress">
                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}> <span className="sr-only">75% Complete</span></div>
              </div>
            </li>
            <li>
              <h2>1350</h2> <small>From USA</small>
              <div className="pull-right">48% <i className="fa fa-level-up text-success" /></div>
              <div className="progress">
                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '48%'}}> <span className="sr-only">48% Complete</span></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="white-box">
          <h3 className="box-title"><small className="pull-right m-t-10 text-success"><i className="fa fa-sort-asc" /> 18% High then last month</small> Monthly Site Traffic</h3>
          <div className="stats-row">
            <div className="stat-item">
              <h6>Overall Growth</h6> <b>80.40%</b></div>
            <div className="stat-item">
              <h6>Montly</h6> <b>15.40%</b></div>
            <div className="stat-item">
              <h6>Day</h6> <b>5.50%</b></div>
          </div>
          <div id="sparkline8" />
        </div>
        <div className="white-box">
          <h3 className="box-title"><small className="pull-right m-t-10 text-danger"><i className="fa fa-sort-desc" /> 18% High then last month</small>Weekly Site Traffic</h3>
          <div className="stats-row">
            <div className="stat-item">
              <h6>Overall Growth</h6> <b>80.40%</b></div>
            <div className="stat-item">
              <h6>Montly</h6> <b>15.40%</b></div>
            <div className="stat-item">
              <h6>Day</h6> <b>5.50%</b></div>
          </div>
          <div id="sparkline9" />
        </div>
      </div>
    </div>
    {/* ============================================================== */}
    {/* city-weather */}
    {/* ============================================================== */}
    <div className="row">
      <div className="col-md-12 col-lg-5">
        <div className="weather-with-bg">
          <div className="wt-top">
            <div className="wt-img" style={{backgroundImage: 'url(../plugins/images/weather-bg.jpg)'}}>
              <ul className="side-icon-text">
                <li><span className="di vm"><i className="wi wi-day-sunny" /></span>
                  <div className="di vm">
                    <h1 className="m-b-0">25<sup>o</sup></h1>
                    <h4>Mostly Sunny</h4>
                  </div>
                </li>
              </ul>
              <div className="wt-city-text">
                <h1>New Delhi, India</h1>
                <h4>Friday, 19 Jan 2017</h4>
              </div>
            </div>
          </div>
          <div className="white-box">
            <h2>February</h2>
            <ul className="wt-counter list-unstyled">
              <li><a href="JavaScript:void(0)">1</a></li>
              <li><a href="JavaScript:void(0)">2</a></li>
              <li><a href="JavaScript:void(0)">3</a></li>
              <li><a href="JavaScript:void(0)">4</a></li>
              <li><a href="JavaScript:void(0)">5</a></li>
              <li><a href="JavaScript:void(0)">6</a></li>
              <li><a href="JavaScript:void(0)">7</a></li>
              <li><a href="JavaScript:void(0)">8</a></li>
              <li><a href="JavaScript:void(0)">9</a></li>
              <li><a href="JavaScript:void(0)">10</a></li>
              <li><a href="JavaScript:void(0)">11</a></li>
              <li><a href="JavaScript:void(0)">12</a></li>
              <li><a href="JavaScript:void(0)">13</a></li>
              <li><a href="JavaScript:void(0)">14</a></li>
              <li><a href="JavaScript:void(0)">15</a></li>
              <li><a href="JavaScript:void(0)">16</a></li>
              <li><a href="JavaScript:void(0)">17</a></li>
              <li><a href="JavaScript:void(0)">18</a></li>
              <li className="active"><a href="JavaScript:void(0)">19</a></li>
              <li><a href="JavaScript:void(0)">20</a></li>
              <li><a href="JavaScript:void(0)">21</a></li>
              <li><a href="JavaScript:void(0)">22</a></li>
              <li><a href="JavaScript:void(0)">23</a></li>
              <li><a href="JavaScript:void(0)">24</a></li>
              <li><a href="JavaScript:void(0)">25</a></li>
              <li><a href="JavaScript:void(0)">26</a></li>
              <li><a href="JavaScript:void(0)">27</a></li>
              <li><a href="JavaScript:void(0)">28</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-7">
        <div className="white-box bg-theme m-b-0">
          <div className="city-weather-widget">
            <h1>Kufri, Himachal Pradesh</h1>
            <h4>Friday, 19 Jan 2017</h4>
            <div className="row p-t-30">
              <div className="col-sm-6">
                <ul className="side-icon-text">
                  <li><span className="di vm"><i className="wi wi-day-hail" /></span>
                    <div className="di vm">
                      <h1 className="m-b-0">23<sup>o</sup></h1>
                      <h5 className="m-t-0">Mostly Sunny</h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-icons pull-right text-white">
                  <li><i className="wi wi-day-sunny m-r-5" />Humidity 38%</li>
                  <li><i className=" wi wi-day-windy m-r-5" />Wind 38%</li>
                </ul>
              </div>
              <div className="col-md-12">
                <div id="ct-city-wth" />
              </div>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="row">
            <ul className="list-unstyled city-weather-days">
              <li className="col-xs-4 col-sm-2"><span>Tue</span><i className="wi wi-day-sunny" /><span>32<sup>°F</sup></span></li>
              <li className="col-xs-4 col-sm-2"><span>Wed</span><i className="wi wi-day-cloudy" /><span>34<sup>°F</sup></span></li>
              <li className="col-xs-4 col-sm-2"><span>Thu</span><i className="wi wi-day-hail" /><span>35<sup>°F</sup></span></li>
              <li className="col-xs-4 col-sm-2 active"><span>Fri</span><i className="wi wi-day-sprinkle" /><span>34<sup>°F</sup></span></li>
              <li className="col-xs-4 col-sm-2"><span>Sat</span><i className="wi wi-day-snow" /><span>30<sup>°F</sup></span></li>
              <li className="col-xs-4 col-sm-2"><span>Sun</span><i className="wi wi-day-sunny" /><span>26<sup>°F</sup></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* .row */}
    <div className="row">
      <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="white-box">
              <h3 className="box-title">Daily Sales</h3>
              <div className="text-right"> <span className="text-muted">Todays Income</span>
                <h1><sup><i className="ti-arrow-up text-success" /></sup> $12,000</h1>
              </div> <span className="text-success">20%</span>
              <div className="progress m-b-0">
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}> <span className="sr-only">20% Complete</span> </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="white-box">
              <h3 className="box-title">Weekly Sales</h3>
              <div className="text-right"> <span className="text-muted">Weekly Income</span>
                <h1><sup><i className="ti-arrow-down text-danger" /></sup> $5,000</h1>
              </div> <span className="text-danger">30%</span>
              <div className="progress m-b-0">
                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}}> <span className="sr-only">230% Complete</span> </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="white-box">
              <h3 className="box-title">Monthly Sales</h3>
              <div className="text-right"> <span className="text-muted">Monthly Income</span>
                <h1><sup><i className="ti-arrow-up text-info" /></sup> $10,000</h1>
              </div> <span className="text-info">60%</span>
              <div className="progress m-b-0">
                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}> <span className="sr-only">20% Complete</span> </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="white-box">
              <h3 className="box-title">Yearly Sales</h3>
              <div className="text-right"> <span className="text-muted">Yearly Income</span>
                <h1><sup><i className="ti-arrow-up text-inverse" /></sup> $9,000</h1>
              </div> <span className="text-inverse">80%</span>
              <div className="progress m-b-0">
                <div className="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}> <span className="sr-only">230% Complete</span> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="news-slide m-b-30 dashboard-slide">
          <div className="vcarousel slide">
            {/* Carousel items */}
            <div className="carousel-inner">
              <div className="active item">
                <div className="overlaybg"><img src="../plugins/images/heading-bg/slide6.jpg" alt="slide1" /></div>
                <div className="news-content"><span className="label label-danger label-rounded">Primary</span>
                  <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2> <a href="#">Read More</a></div>
              </div>
              <div className="item">
                <div className="overlaybg"><img src="../plugins/images/heading-bg/slide4.jpg" alt="slide2" /></div>
                <div className="news-content"><span className="label label-primary label-rounded">Primary</span>
                  <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2> <a href="#">Read More</a></div>
              </div>
              <div className="item">
                <div className="overlaybg"><img src="../plugins/images/heading-bg/slide6.jpg" alt="slide3" /></div>
                <div className="news-content"><span className="label label-success label-rounded">Primary</span>
                  <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2> <a href="#">Read More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /.row */}
    {/* ============================================================== */}
    {/* Demo table */}
    {/* ============================================================== */}
    <div className="row">
      <div className="col-md-12">
        <div className="panel">
          <div className="panel-heading">MANAGE USERS</div>
          <div className="table-responsive">
            <table className="table table-hover manage-u-table">
              <thead>
                <tr>
                  <th className="text-center" style={{width: 70}}>#</th>
                  <th>NAME</th>
                  <th>OCCUPATION</th>
                  <th>EMAIL</th>
                  <th>ADDED</th>
                  <th style={{width: 250}}>CATEGORY</th>
                  <th style={{width: 300}}>MANAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td><span className="font-medium">Daniel Kristeen</span>
                    <br /><span className="text-muted">Texas, Unitedd states</span></td>
                  <td>Visual Designer
                    <br /><span className="text-muted">Past : teacher</span></td>
                  <td>daniel@website.com
                    <br /><span className="text-muted">999 - 444 - 555</span></td>
                  <td>15 Mar 1988
                    <br /><span className="text-muted">10: 55 AM</span></td>
                  <td>
                    <select className="form-control">
                      <option>Modulator</option>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Subscriber</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-key" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="icon-trash" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-pencil-alt" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i className="ti-upload" /></button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td><span className="font-medium">Daniel Kristeen</span>
                    <br /><span className="text-muted">Texas, Unitedd states</span></td>
                  <td>Visual Designer
                    <br /><span className="text-muted">Past : teacher</span></td>
                  <td>daniel@website.com
                    <br /><span className="text-muted">999 - 444 - 555</span></td>
                  <td>15 Mar 1988
                    <br /><span className="text-muted">10: 55 AM</span></td>
                  <td>
                    <select className="form-control">
                      <option>Modulator</option>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Subscriber</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-key" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="icon-trash" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-pencil-alt" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i className="ti-upload" /></button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">3</td>
                  <td><span className="font-medium">Daniel Kristeen</span>
                    <br /><span className="text-muted">Texas, Unitedd states</span></td>
                  <td>Visual Designer
                    <br /><span className="text-muted">Past : teacher</span></td>
                  <td>daniel@website.com
                    <br /><span className="text-muted">999 - 444 - 555</span></td>
                  <td>15 Mar 1988
                    <br /><span className="text-muted">10: 55 AM</span></td>
                  <td>
                    <select className="form-control">
                      <option>Modulator</option>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Subscriber</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-key" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="icon-trash" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-pencil-alt" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i className="ti-upload" /></button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">4</td>
                  <td><span className="font-medium">Daniel Kristeen</span>
                    <br /><span className="text-muted">Texas, Unitedd states</span></td>
                  <td>Visual Designer
                    <br /><span className="text-muted">Past : teacher</span></td>
                  <td>daniel@website.com
                    <br /><span className="text-muted">999 - 444 - 555</span></td>
                  <td>15 Mar 1988
                    <br /><span className="text-muted">10: 55 AM</span></td>
                  <td>
                    <select className="form-control">
                      <option>Modulator</option>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Subscriber</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-key" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="icon-trash" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-pencil-alt" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i className="ti-upload" /></button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">5</td>
                  <td><span className="font-medium">Daniel Kristeen</span>
                    <br /><span className="text-muted">Texas, Unitedd states</span></td>
                  <td>Visual Designer
                    <br /><span className="text-muted">Past : teacher</span></td>
                  <td>daniel@website.com
                    <br /><span className="text-muted">999 - 444 - 555</span></td>
                  <td>15 Mar 1988
                    <br /><span className="text-muted">10: 55 AM</span></td>
                  <td>
                    <select className="form-control">
                      <option>Modulator</option>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Subscriber</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-key" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="icon-trash" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-pencil-alt" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i className="ti-upload" /></button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">6</td>
                  <td><span className="font-medium">Daniel Kristeen</span>
                    <br /><span className="text-muted">Texas, Unitedd states</span></td>
                  <td>Visual Designer
                    <br /><span className="text-muted">Past : teacher</span></td>
                  <td>daniel@website.com
                    <br /><span className="text-muted">999 - 444 - 555</span></td>
                  <td>15 Mar 1988
                    <br /><span className="text-muted">10: 55 AM</span></td>
                  <td>
                    <select className="form-control">
                      <option>Modulator</option>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Subscriber</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-key" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="icon-trash" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-pencil-alt" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i className="ti-upload" /></button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">7</td>
                  <td><span className="font-medium">Daniel Kristeen</span>
                    <br /><span className="text-muted">Texas, Unitedd states</span></td>
                  <td>Visual Designer
                    <br /><span className="text-muted">Past : teacher</span></td>
                  <td>daniel@website.com
                    <br /><span className="text-muted">999 - 444 - 555</span></td>
                  <td>15 Mar 1988
                    <br /><span className="text-muted">10: 55 AM</span></td>
                  <td>
                    <select className="form-control">
                      <option>Modulator</option>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Subscriber</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-key" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="icon-trash" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i className="ti-pencil-alt" /></button>
                    <button type="button" className="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i className="ti-upload" /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* ============================================================== */}
    {/* Right sidebar */}
    {/* ============================================================== */}
    {/* .right-sidebar */}
    <div className="right-sidebar">
      <div className="slimscrollright">
        <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle" /></span> </div>
        <div className="r-panel-body">
          <ul id="themecolors" className="m-t-20">
            <li><b>With Light sidebar</b></li>
            <li><a href="javascript:void(0)" data-theme="default" className="default-theme">1</a></li>
            <li><a href="javascript:void(0)" data-theme="green" className="green-theme">2</a></li>
            <li><a href="javascript:void(0)" data-theme="gray" className="yellow-theme">3</a></li>
            <li><a href="javascript:void(0)" data-theme="blue" className="blue-theme">4</a></li>
            <li><a href="javascript:void(0)" data-theme="purple" className="purple-theme">5</a></li>
            <li><a href="javascript:void(0)" data-theme="megna" className="megna-theme">6</a></li>
            <li className="full-width"><b>With Dark sidebar</b></li>
            <li><a href="javascript:void(0)" data-theme="default-dark" className="default-dark-theme">7</a></li>
            <li><a href="javascript:void(0)" data-theme="green-dark" className="green-dark-theme">8</a></li>
            <li><a href="javascript:void(0)" data-theme="gray-dark" className="yellow-dark-theme">9</a></li>
            <li><a href="javascript:void(0)" data-theme="blue-dark" className="blue-dark-theme working">10</a></li>
            <li><a href="javascript:void(0)" data-theme="purple-dark" className="purple-dark-theme">11</a></li>
            <li><a href="javascript:void(0)" data-theme="megna-dark" className="megna-dark-theme">12</a></li>
          </ul>
          <ul className="m-t-20 all-demos">
            <li><b>Choose other demos</b></li>
          </ul>
          <ul className="m-t-20 chatonline">
            <li><b>Chat option</b></li>
            <li>
              <a href="javascript:void(0)"><img src="../plugins/images/users/varun.jpg" alt="user-img" className="img-circle" /> <span>Varun Dhavan <small className="text-success">online</small></span></a>
            </li>
            <li>
              <a href="javascript:void(0)"><img src="../plugins/images/users/genu.jpg" alt="user-img" className="img-circle" /> <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
            </li>
            <li>
              <a href="javascript:void(0)"><img src="../plugins/images/users/ritesh.jpg" alt="user-img" className="img-circle" /> <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
            </li>
            <li>
              <a href="javascript:void(0)"><img src="../plugins/images/users/arijit.jpg" alt="user-img" className="img-circle" /> <span>Arijit Sinh <small className="text-muted">Offline</small></span></a>
            </li>
            <li>
              <a href="javascript:void(0)"><img src="../plugins/images/users/govinda.jpg" alt="user-img" className="img-circle" /> <span>Govinda Star <small className="text-success">online</small></span></a>
            </li>
            <li>
              <a href="javascript:void(0)"><img src="../plugins/images/users/hritik.jpg" alt="user-img" className="img-circle" /> <span>John Abraham<small className="text-success">online</small></span></a>
            </li>
            <li>
              <a href="javascript:void(0)"><img src="../plugins/images/users/john.jpg" alt="user-img" className="img-circle" /> <span>Hritik Roshan<small className="text-success">online</small></span></a>
            </li>
            <li>
              <a href="javascript:void(0)"><img src="../plugins/images/users/pawandeep.jpg" alt="user-img" className="img-circle" /> <span>Pwandeep rajan <small className="text-success">online</small></span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* ============================================================== */}
    {/* End Right sidebar */}
    {/* ============================================================== */}
  </div>
  {/* /.container-fluid */}
  <footer className="footer text-center"> 2017 © Ampleadmin brought to you by themedesigner.in </footer>
</div>
{/* /#page-wrapper */}


    </div>
  )
}
