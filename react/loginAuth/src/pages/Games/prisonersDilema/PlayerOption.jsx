export default function PlayerOption({strat}){
    return(
        <select value={strat} onChange={(e) => setStrat(e.target.value)}>
            <option value="deffect">Deffect Always</option>
            <option value="coop">Cooperate Always</option>
            <option value="randD">Randomly Deffects 10% of the time</option>
            <option value="cTill">Cooperates till opponent deffects, then deffects only</option> 
            <option value="random">Random cooperate or deffect (50/50 split)</option> 
            <option value="forgive">Will cooperate by default, and respond to being deffected by deffecting once</option>
        </select>
    );
}