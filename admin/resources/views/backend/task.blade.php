@extends('layouts.app')

@section('title','Tasks')

@section('content')

<div class="box-heading">
    <div class="box-title">
        <h3 class="mb-35">My Tasks</h3>
    </div>
    <div class="box-breadcrumb">
        <div class="breadcrumbs">
            <ul>
                <li> <a class="icon-home" href="index.html">Admin</a></li>
                <li><span>My Jobs</span></li>
            </ul>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="section-box">
            <div class="container">
                <div class="panel-white mb-30">
                    <div class="box-padding">
                        <div class="row display-list">
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img1.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>1 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag high">High</a><a
                                            class="btn btn-tag planing">Planing</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>80</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img2.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>3 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag mid">Medium</a><a
                                            class="btn btn-tag in-progress">In Progress</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>68</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img3.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>4 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag low">Low</a><a
                                            class="btn btn-tag in-progress">In Progress</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>20</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img4.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>5 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img5.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>8 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img5.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>12 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img1.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>14 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img2.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>23 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img3.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>25 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img4.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>26 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img5.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>30 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img5.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>32 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img3.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>34 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img4.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>36 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img5.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>3 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="card-style-2 hover-up">
                                    <div class="card-head">
                                        <div class="card-image"> <img src="assets/imgs/page/dashboard/img4.png"
                                                alt="jobBox"></div>
                                        <div class="card-title">
                                            <h6>Senior Full Stack Engineer, Creator Success</h6><span
                                                class="text-muted">Start: </span><span>36 days ago</span>
                                        </div>
                                    </div>
                                    <div class="mr-15"> <a class="btn btn-tag complete">Completed</a>
                                    </div>
                                    <div class="card-progress"><span>Complete: </span><strong>100</strong><span
                                            class="hour"> %</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="paginations">
                            <ul class="pager">
                                <li><a class="pager-prev" href="#"></a></li>
                                <li><a class="pager-number" href="#">1</a></li>
                                <li><a class="pager-number" href="#">2</a></li>
                                <li><a class="pager-number" href="#">3</a></li>
                                <li><a class="pager-number" href="#">4</a></li>
                                <li><a class="pager-number" href="#">5</a></li>
                                <li><a class="pager-number active" href="#">6</a></li>
                                <li><a class="pager-number" href="#">7</a></li>
                                <li><a class="pager-next" href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection