const abstract =
  'We presents an object-centric 3D scene reconstruction system that augments point-based scene geometry with individually manipulable textured meshes for selected object instances in a shared world frame. Its core module, Observation-Grounded Diffeomorphic Deformation (OGDD), is a training-free method that grounds each generated mesh against the corresponding partial object point cloud. OGDD first corrects residual scale and pose through bounded similarity alignment, then applies coarse-to-fine B-spline free-form deformation with bidirectional robust visible-surface fitting, multiple deformation regularisation terms including spatially varying bending regularisation derived from multi-view evidence, and injectivity constraints. The resulting transformation is applied to the entire mesh whilst preserving its connectivity and texture data. Across 12 CO3D sequences, OGDD reduces total bidirectional Chamfer distance by \(16.2\%\), test-view bidirectional Chamfer distance by \(41.8\%\), and test-view truncated depth MAE by \(34.5\%\), while increasing test-view silhouette IoU by \(7.062\) percentage points. Three self-captured multi-object sequences further demonstrate the full system, representing selected object instances as separate textured meshes within the surrounding point-based scene geometry.';

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
          <span className="separator" aria-hidden="true">
            ·
          </span>
          <a
            className="person"
            href="https://hengyiwang.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            Hengyi Wang
          </a >
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
              In our system, AMB3R and SAM 3 recover a shared scene reconstruction and instance masks (blue). 
              Masked pointmaps form the object point clouds, and SAM 3D supplies per-view candidate meshes for each object (purple). 
              ICP-based candidate selection and Observation-Grounded Diffeomorphic Deformation (OGDD) then optimise each mesh for insertion into the shared world frame (green).
            </figcaption>
          </figure>

          <figure className="ogdd-figure">
            <h3>Observation-Grounded Diffeomorphic Deformation (OGDD)</h3>
            <img
              src="./media/ogdd.png"
              alt="Detailed schematic of Observation-Grounded Diffeomorphic Deformation, from visibility-aware source sampling and bounded global alignment to coarse-to-fine B-spline deformation and the complete optimised mesh"
            />
            <figcaption>
              Through OGDD, source samples (orange) are fitted to target observations (blue). 
              (a) Ray casting retains only camera-visible source surfaces. 
              (b) Bounded similarity alignment removes residual pose and scale error. 
              (c) Coarse-to-fine B-spline optimisation corrects local shape, with multi-view evidence controlling bending stiffness and validity checks constraining each update. 
              (d) The final map is applied to the entire mesh.
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
