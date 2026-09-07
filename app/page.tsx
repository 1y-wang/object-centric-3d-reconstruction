const abstract =
  'Object-centric 3D scene reconstruction from monocular video requires both scene geometry and object meshes. Feed-forward 3D reconstruction methods recover camera poses and scene geometry, but represent object instances only as partial surface samples. Conversely, generative object reconstruction produces textured meshes that may not match the observed instance in scale, pose, or shape. We present a pipeline that combines metric-scale 3D scene reconstruction, promptable concept segmentation, per-view candidate mesh generation, and mesh grounding in a shared world frame. Its training-free core module, Observation-Grounded Diffeomorphic Deformation (OGDD), aligns and deforms a generated mesh using partial multi-view object geometry. OGDD combines bounded similarity alignment with coarse-to-fine B-spline deformation, bidirectional robust fitting, bending regularization adapted to multi-view observations, and injectivity constraints. Across 12 CO3D sequences, OGDD improves average total Chamfer distance, test Chamfer distance, test truncated depth MAE, and test silhouette IoU over the initial meshes. Results on three self-captured multi-object scenes further demonstrate separately accessible textured meshes embedded in metric scene context.';

export default function Home() {
  return (
    <main>
      <header className="hero shell">
        <h1>
          Object-Centric 3D Scene Reconstruction from Monocular Video
          <br />
          with Observation-Grounded Mesh Optimisation
        </h1>

        <div className="people" aria-label="Authors and supervision">
          <a
            className="person primary-person"
            href="https://www.linkedin.com/in/yiyue-wang-267a8b22b/"
            target="_blank"
            rel="noreferrer"
          >
            Yiyue Wang
          </a>
          <span className="separator" aria-hidden="true">
            ·
          </span>
          <span className="role">Supervised by</span>
          <a
            className="person"
            href="https://profiles.ucl.ac.uk/40331-lourdes-de-agapito-vicente/about"
            target="_blank"
            rel="noreferrer"
          >
            Lourdes Agapito
          </a>
        </div>
        <p className="affiliation">University College London</p>
      </header>

      <section className="lead-media shell-wide" aria-label="Project overview">
        <img
          className="hero-animation"
          src="./media/ucl200_objects_front_spin_float_hq.gif"
          alt="Object-centric scene reconstruction overview animation"
        />
      </section>

      <div className="content shell">
        <section className="paper-section" id="abstract">
          <h2>Abstract</h2>
          <p className="abstract">{abstract}</p>
        </section>

        <section className="paper-section" id="method">
          <h2>Method</h2>
          <figure className="method-figure">
            <img
              src="./media/method.jpeg"
              alt="Overview of the object-centric 3D scene reconstruction pipeline and Observation-Grounded Diffeomorphic Deformation"
            />
            <figcaption>
              Our pipeline combines metric-scale scene reconstruction,
              promptable segmentation, per-view mesh generation, and OGDD to
              ground and deform textured object meshes in a shared world frame.
            </figcaption>
          </figure>

          <figure className="ogdd-figure">
            <h3>Observation-Grounded Diffeomorphic Deformation (OGDD)</h3>
            <img
              src="./media/ogdd.png"
              alt="Detailed schematic of Observation-Grounded Diffeomorphic Deformation, from visibility-aware source sampling and bounded global alignment to coarse-to-fine B-spline deformation and the complete optimised mesh"
            />
            <figcaption>
              Observation-Guided Diffeomorphic Deformation (OGDD), optimises
              the camera-visible surface of a complete source mesh against a
              partial target point cloud without training. OGDD combines
              bounded similarity alignment and coarse-to-fine B-spline
              free-form deformation with bidirectional robust data terms,
              spatially varying bending regularisation weighted by multi-view
              evidence, and a Lipschitz-constrained parameterisation with
              Jacobian determinant checks.
            </figcaption>
          </figure>
        </section>

        <section className="paper-section results-section" id="visualisation">
          <h2>Visualisation</h2>
          <div className="results-list">
            <figure className="result-figure">
              <div className="result-heading">
                <span className="result-number">01</span>
                <h3>UCL 200</h3>
              </div>
              <video
                controls
                playsInline
                preload="metadata"
                poster="./media/result1_ucl200_poster.jpg"
                aria-label="Reconstruction result for the UCL 200 scene"
              >
                <source
                  src="./media/result1_ucl200_hq.mp4"
                  type="video/mp4"
                />
              </video>
            </figure>

            <figure className="result-figure">
              <div className="result-heading">
                <span className="result-number">02</span>
                <h3>Table &amp; Chair</h3>
              </div>
              <video
                controls
                playsInline
                preload="metadata"
                poster="./media/result2_tablechair_poster.jpg"
                aria-label="Reconstruction result for the table and chair scene"
              >
                <source
                  src="./media/result2_tablechair_hq.mp4"
                  type="video/mp4"
                />
              </video>
            </figure>

            <figure className="result-figure">
              <div className="result-heading">
                <span className="result-number">03</span>
                <h3>Everyday Objects</h3>
              </div>
              <video
                controls
                playsInline
                preload="metadata"
                poster="./media/result3_everydayobjs_poster.jpg"
                aria-label="Reconstruction result for the everyday objects scene"
              >
                <source
                  src="./media/result3_everydayobjs_hq.mp4"
                  type="video/mp4"
                />
              </video>
            </figure>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="footer-content shell">
          <p>
            This website is licensed under a{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noreferrer"
            >
              Creative Commons Attribution-ShareAlike 4.0 International License
            </a>
            .
          </p>
          <p>
            This means you are free to borrow the{' '}
            <a
              href="https://github.com/nerfies/nerfies.github.io"
              target="_blank"
              rel="noreferrer"
            >
              source code
            </a>{' '}
            of this website, we just ask that you link back to the{' '}
            <a
              href="https://nerfies.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              original page
            </a>{' '}
            in the footer. Please remember to remove the analytics code included
            in the header of the website which you do not want on your website.
          </p>
        </div>
      </footer>
    </main>
  );
}
